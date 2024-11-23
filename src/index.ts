import { AppDataSource } from "./database/data-source";
import { Habilidade } from "./model/Habilidade";
import { HabilidadeEffectEntry } from "./model/HabilidadeEffectEntry";
import { HabilidadeFlavorTextEntry } from "./model/HabilidadeFlavorTextEntry";
import { Pokemon } from "./model/Pokemon";
import { PokemonHabilidade } from "./model/PokemonHabilidade";
import { PokemonHabilidadeAntiga } from "./model/PokemonHabilidadeAntiga";
import { HabilidadeService } from "./service/HabilidadeService";
import { PokemonService } from "./service/PokemonService";

async function main() {

    try {

        await AppDataSource.initialize();

        if (!AppDataSource.isInitialized) 
            throw new Error("Erro ao conectar com o banco");

        const pokemonNames = ["eevee", "shiftry"];

        for (const pokemonName of pokemonNames) {

            let { pokemon, restData} = await PokemonService.search(pokemonName);

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
            
        }

        await AppDataSource.destroy();

    } catch (error) {

        console.error("Erro na execução principal:", error);

    }

}

main()