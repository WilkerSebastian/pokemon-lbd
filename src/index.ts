import { AppDataSource, ensureDataSourceInitialized } from "./database/data-source";
import { Area } from "./model/Area";
import { Catalogo } from "./model/Catalogo";
import type { ContestEffect } from "./model/ContestEffect";
import { EggGroup } from "./model/EggGroup";
import { Encounter } from "./model/Encounter";
import { EncounterCondition } from "./model/EncounterCondition";
import { Especie } from "./model/Especie";
import { EspecieFlavorText } from "./model/EspecieFlavorText";
import { Genero } from "./model/Genero";
import { GrowthRate } from "./model/GrowthRate";
import { Habilidade } from "./model/Habilidade";
import { HabilidadeEffectEntry } from "./model/HabilidadeEffectEntry";
import { HabilidadeFlavorTextEntry } from "./model/HabilidadeFlavorTextEntry";
import { PalParkEncounter } from "./model/PalParkEncounter";
import { Pokedex } from "./model/Pokedex";
import { Pokemon } from "./model/Pokemon";
import { PokemonHabilidade } from "./model/PokemonHabilidade";
import { PokemonHabilidadeAntiga } from "./model/PokemonHabilidadeAntiga";
import { PokemonTipo } from "./model/PokemonTipo";
import { SpritePokemon } from "./model/SpritePokemon";
import { Tipo } from "./model/Tipo";
import { TipoEfetividade } from "./model/TipoEfetividade";
import { EncounterService } from "./service/EncounterService";
import { EspecieService } from "./service/EspecieService";
import { HabilidadeService } from "./service/HabilidadeService";
import { ItemService } from "./service/ItemService";
import { MovimentoService } from "./service/MovimentoService";
import { PokemonService } from "./service/PokemonService";
import { StatService } from "./service/StatService";
import { TipoService } from "./service/TipoService";

async function main() {

    try {

        await ensureDataSourceInitialized();

        if (!AppDataSource.isInitialized) 
            throw new Error("Erro ao conectar com o banco");

        const pokemonNames = ["gardevoir", "groudon", "chansey", "eevee", "ninetales", "krookodile", "swampert", "exeggutor", "metagross", "absol"];

        console.log("iniciando o scrpit");
        
        for (const pokemonName of pokemonNames) {

            console.log(`inseriando o pokemon ${pokemonName}`);

            let { pokemon, restData} = await PokemonService.search(pokemonName);

            const encounters_data = await EncounterService.search(restData.location_area_encounters)

            await AppDataSource.getRepository(Pokemon).save(pokemon);

            console.log("inserindo as habilidades");

            for (const ability of restData.abilities) {


                let { habilidade, restData } = await HabilidadeService.search(ability.ability.url)

                console.log(`habilidade ${habilidade.nome}`);

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

            console.log("inserindo os encontros");
            
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

                    console.error(`erro ao inserir area do pokemon: ${pokemon.nome}: ${error}`)
                    
                }

            }

            console.log(`inserindo as especies do pokemon: ${pokemon.nome}`);

            const especie_data = await EspecieService.search(restData.species.url)

            const growthRate = await EspecieService.searchEspecieGrowthRate(especie_data.growth_rate.url)

            await AppDataSource.getRepository(GrowthRate).save(growthRate)

            const especie = await EspecieService.createEspecie(especie_data, growthRate)

            const especieInserted = await AppDataSource.getRepository(Especie).save(especie)

            pokemon.especie = especieInserted

            await AppDataSource.getRepository(Pokemon).save(pokemon)

            for (const catalog_data of  especie_data.pokedex_numbers) {

                let pokedex = await EspecieService.searchPokedex(catalog_data.pokedex.url)

                pokedex = await AppDataSource.getRepository(Pokedex).save(pokedex)

                const catalogo = await EspecieService.createCatalogo(catalog_data, pokedex, especie)

                await AppDataSource.getRepository(Catalogo).save(catalogo)
                
            }

            for (const egg_group_data of especie_data.egg_groups) {

                const eggGroup = await EspecieService.searchEggGroup(egg_group_data.url, especieInserted)

                await AppDataSource.getRepository(EggGroup).save(eggGroup)

            }

            for (const genero_data of especie_data.genera) {

                const genero = await EspecieService.createGenero(genero_data, especieInserted)

                await AppDataSource.getRepository(Genero).save(genero)

            }

            for (const pal_park_encounter of especie_data.pal_park_encounters) {

                const palParkEncounter = await EspecieService.createPalParkEncounters(pal_park_encounter, especieInserted)

                await AppDataSource.getRepository(PalParkEncounter).save(palParkEncounter)

            }

            for (const flavorTextEntry of especie_data.flavor_text_entries) {

                const especieFlavorText = await EspecieService.createEspecieFlavorText(flavorTextEntry, especieInserted)

                await AppDataSource.getRepository(EspecieFlavorText).save(especieFlavorText)

            }

            console.log(`inserindo os sprites do pokemon: ${pokemon.nome}`);
            
            const sprites = await PokemonService.createSpritePokemon(restData.sprites, pokemon)

            await AppDataSource.getRepository(SpritePokemon).save(sprites)

            for (const tipo_data of restData.types) {

                let { tipo, restData } = await TipoService.search(tipo_data.type.url)

                console.log(`inserindo o tipo do pokemon: ${tipo.nome}`);

                await AppDataSource.getRepository(Tipo).save(tipo)

                const pokemonType = await TipoService.createPokemonTipo(tipo, pokemon)
                
                await AppDataSource.getRepository(PokemonTipo).save(pokemonType)

                await TipoService.createTipoEfetividade(restData.damage_relations, tipo)

            }

            await TipoService.createTipoAntigo(restData.past_types, pokemon)

            for (const moves_data of restData.moves) {

                let contestEffect: ContestEffect | null = null

                const move_data = await MovimentoService.search(moves_data.move.url)

                console.log(`inserindo o movimento do pokemon: ${move_data.name}`);

                if (move_data.contest_effect)
                    contestEffect = await MovimentoService.createContestEffect(move_data.contest_effect.url)

                const moveTarget = await MovimentoService.createMoveTarget(move_data.target)

                const moveDamageClass = await MovimentoService.createMoveDamageClass(move_data.damage_class)

                const movimento = await MovimentoService.createMove(move_data, moveTarget, moveDamageClass, contestEffect)

                for (const version_group_detail of moves_data.version_group_details) 
                    await MovimentoService.createAprende(version_group_detail, pokemon, movimento)

            }

            for (const heldItemData of restData.held_items) {

                console.log(`inserindo o item do pokemon: ${heldItemData.item.name}`);

                const itemData = await ItemService.search(heldItemData)

                const item = await ItemService.createItem(itemData)

                await ItemService.createItemSegurado(heldItemData.version_details, pokemon, item)

            }

            for (const stats_data of restData.stats) {

                console.log(`inserindo o stat do pokemon: ${stats_data.stat.name}`);

                const stat_data = await StatService.search(stats_data)

                const stat = await StatService.createStat(stat_data)

                await StatService.createPokemonStat(stats_data, pokemon, stat)

            }

        }

    } catch (error) {

        console.error("Erro na execução principal:", error);

    }

}

main()