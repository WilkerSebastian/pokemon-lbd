import { api } from "../config/api";
import { Pokemon } from "../model/Pokemon";
import { getUniqueProperties } from "../utils/uniqueProp";

class PokemonService {
    
    public async search(name: string) {

        let pokemon: Pokemon = new Pokemon()
        let restData: Partial<any> = {}

        try {

            const data = (await api.get(`pokemon/${name}`)).data

            pokemon.id = data.id
            pokemon.nome = data.name
            pokemon.altura = data.height
            pokemon.peso = data.weight
            pokemon.ordem = data.order
            pokemon.baseExperience = data.base_experience
            pokemon.isDefault = data.is_default
            pokemon.latestCry = data.cries.latest
            pokemon.legacyCry = data.cries.legacy

            restData = getUniqueProperties(data, pokemon)

        } catch (error) {

            console.log("erro ao buscar pokemon: ", error);

        }

        return {pokemon, restData}

    }

}

export const pokemonService = new PokemonService()