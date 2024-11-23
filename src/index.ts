import { AppDataSource } from "./database/data-source";
import { Habilidade } from "./model/Habilidade";
import { Pokemon } from "./model/Pokemon";
import { PokemonHabilidade } from "./model/PokemonHabilidade";
import { HabilidadeService } from "./service/HabilidadeService";
import { PokemonService } from "./service/PokemonService";

async function main() {

    try {

        await AppDataSource.initialize();

        if (!AppDataSource.isInitialized) 
            throw new Error("Erro ao conectar com o banco");

        const pokemonNames = ["eevee"];

        for (const pokemonName of pokemonNames) {

            const { pokemon, restData} = await PokemonService.search(pokemonName);

            await AppDataSource.getRepository(Pokemon).save(pokemon);

            for (const ability of restData.abilities) {

                let habilidade = await HabilidadeService.search(ability.ability.url)

                habilidade = await AppDataSource.getRepository(Habilidade).save(habilidade);

                const habilidadePokemon = await HabilidadeService.createPokemonHabilidade(ability, pokemon, habilidade);

                await AppDataSource.getRepository(PokemonHabilidade).save(habilidadePokemon);

            }
            
        }

        await AppDataSource.destroy();

    } catch (error) {

        console.error("Erro na execução principal:", error);

    }

}

main()