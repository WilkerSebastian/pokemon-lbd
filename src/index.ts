import { AppDataSource } from "./database/data-source";
import { Pokemon } from "./model/Pokemon";
import { pokemonService } from "./service/PokemonService";

async function main() {

    try {

        await AppDataSource.initialize();

        if (!AppDataSource.isInitialized) 
            throw new Error("Erro ao conectar com o banco");

        const pokemonNames = ["eevee"];

        for (const pokemonName of pokemonNames) {

            const result = await pokemonService.search(pokemonName);

            if (!result || !result.pokemon) 
                throw new Error(`Falha ao buscar dados do Pokémon ${pokemonName}`);

            console.log(result.pokemon);
            

            await AppDataSource.getRepository(Pokemon).save(result.pokemon);
            
        }

        await AppDataSource.destroy();

    } catch (error) {

        console.error("Erro na execução principal:", error);

    }

}

main()