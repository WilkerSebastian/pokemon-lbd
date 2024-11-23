import { AppDataSource } from "./database/data-source";
import { Area } from "./model/Area";
import { Encounter } from "./model/Encounter";
import { EncounterCondition } from "./model/EncounterCondition";
import { Especie } from "./model/Especie";
import { EspecieFlavorText } from "./model/EspecieFlavorText";
import { GrowthRate } from "./model/GrowthRate";
import { Habilidade } from "./model/Habilidade";
import { HabilidadeEffectEntry } from "./model/HabilidadeEffectEntry";
import { HabilidadeFlavorTextEntry } from "./model/HabilidadeFlavorTextEntry";
import { PalParkEncounter } from "./model/PalParkEncounter";
import { Pokemon } from "./model/Pokemon";
import { PokemonHabilidade } from "./model/PokemonHabilidade";
import { PokemonHabilidadeAntiga } from "./model/PokemonHabilidadeAntiga";
import { SpritePokemon } from "./model/SpritePokemon";
import { EncounterService } from "./service/EncounterService";
import { EspecieService } from "./service/EspecieService";
import { HabilidadeService } from "./service/HabilidadeService";
import { PokemonService } from "./service/PokemonService";

async function main() {

    try {

        await AppDataSource.initialize();

        if (!AppDataSource.isInitialized) 
            throw new Error("Erro ao conectar com o banco");

        const pokemonNames = ["eevee", "shiftry", "ralts"];

        

        for (const pokemonName of pokemonNames) {

            let { pokemon, restData} = await PokemonService.search(pokemonName);

            const encounters_data = await EncounterService.search(restData.location_area_encounters)

            await AppDataSource.getRepository(Pokemon).save(pokemon);

            for (const ability of restData.abilities) {

                let { habilidade, restData } = await HabilidadeService.search(ability.ability.url)

                habilidade = await AppDataSource.getRepository(Habilidade).save(habilidade);

                const habilidadePokemon = await HabilidadeService.createPokemonHabilidade(ability, pokemon, habilidade);

                await AppDataSource.getRepository(PokemonHabilidade).save(habilidadePokemon);

                for (const flavorTextEntry of restData.flavor_text_entries) {

                    const habilidadeFlavorTextEntry = await HabilidadeService.createHabilidadeFlavorTextEntry(flavorTextEntry, habilidade);

                    await AppDataSource.getRepository(HabilidadeFlavorTextEntry).save(habilidadeFlavorTextEntry);                    

                }

                for (const effectEntry of restData.effect_entries) {    

                    const habilidadeEffectEntry = await HabilidadeService.createHabilidadeEffectEntry(effectEntry, habilidade);

                    await AppDataSource.getRepository(HabilidadeEffectEntry).save(habilidadeEffectEntry);

                }

            }

            for (const pastAbility of restData.past_abilities) {

                for (const ability  of pastAbility.abilities) {

                    let { habilidade, restData } = await HabilidadeService.search(ability.ability.url)

                    habilidade = await AppDataSource.getRepository(Habilidade).save(habilidade);
    
                    const habilidadePokemonAntiga = await HabilidadeService.createHabilidadeAntiga({generation: pastAbility.generation.name, ...ability}, pokemon, habilidade);
    
                    await AppDataSource.getRepository(PokemonHabilidadeAntiga).save(habilidadePokemonAntiga);
    
                    for (const flavorTextEntry of restData.flavor_text_entries) {
    
                        const habilidadeFlavorTextEntry = await HabilidadeService.createHabilidadeFlavorTextEntry(flavorTextEntry, habilidade);
    
                        await AppDataSource.getRepository(HabilidadeFlavorTextEntry).save(habilidadeFlavorTextEntry);                    
    
                    }
    
                    for (const effectEntry of restData.effect_entries) {    
    
                        const habilidadeEffectEntry = await HabilidadeService.createHabilidadeEffectEntry(effectEntry, habilidade);
    
                        await AppDataSource.getRepository(HabilidadeEffectEntry).save(habilidadeEffectEntry);

                    }

                }

            }

            for (const edata of encounters_data) {

                try {
                    
                    const area = await EncounterService.searchArea(edata.location_area.url)

                    await AppDataSource.getRepository(Area).save(area)

                    for (const encounter_data_real of edata.version_details) {

                        const encounters_data = await EncounterService.createEncounters(encounter_data_real, area, pokemon)
    
                        for (const { encounter, conditions } of encounters_data) {
    
                            try {
    
                                let encouterInserted = await AppDataSource.getRepository(Encounter).save(encounter)
    
                                try {
    
                                    for (const condition of conditions) {
        
                                        const encounterCondition = await EncounterService.createEncounterCondition(condition, encouterInserted)
            
                                        await AppDataSource.getRepository(EncounterCondition).save(encounterCondition);
                                    
                                    }
                                    
                                } catch (error) {
        
                                    console.error(`erro ao tentar inserir codições de encontro do pokemon ${pokemon}: ${error}`);
        
                                }
                                
                            } catch (error) {
    
                                console.error(`erro ao inserir encontro do pokemon ${pokemon}: ${error}`);
                                
                            }
    
                        }
    
                    }

                } catch (error) {

                    console.error(`erro ao inserir area do pokemon: ${pokemon}: ${error}`)
                    
                }

            }

            const especie_data = await EspecieService.search(restData.species.url)

            const growthRate = await EspecieService.searchEspecieGrowthRate(especie_data.growth_rate.url)

            await AppDataSource.getRepository(GrowthRate).save(growthRate)

            const especie = await EspecieService.createEspecie(especie_data, growthRate)

            const especieInserted = await AppDataSource.getRepository(Especie).save(especie)

            for (const pal_park_encounter of especie_data.pal_park_encounters) {

                const palParkEncounter = await EspecieService.createPalParkEncounters(pal_park_encounter, especieInserted)

                await AppDataSource.getRepository(PalParkEncounter).save(palParkEncounter)

            }

            for (const flavorTextEntry of especie_data.flavor_text_entries) {

                const especieFlavorText = await EspecieService.createEspecieFlavorText(flavorTextEntry, especieInserted)

                await AppDataSource.getRepository(EspecieFlavorText).save(especieFlavorText)

            }

            const sprites = await PokemonService.createSpritePokemon(restData.sprites, pokemon)

            await AppDataSource.getRepository(SpritePokemon).save(sprites)

        }

        await AppDataSource.destroy();

    } catch (error) {

        console.error("Erro na execução principal:", error);

    }

}

main()