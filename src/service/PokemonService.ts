import { api } from "../config/api";
import { Pokemon } from "../model/Pokemon";
import { SpritePokemon } from "../model/SpritePokemon";
import { getUniqueProperties } from "../utils/uniqueProp";

export class PokemonService {
    
    public static async search(name: string) {

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

    public static async createSpritePokemon(data:any, pokemon: Pokemon) {

        const sprite = new SpritePokemon()

        sprite.backDefault = data.back_default
        sprite.backFemale = data.back_female
        sprite.backShiny = data.back_shiny
        sprite.backShiny = data.back_shiny_female
        sprite.frontDefault = data.front_default
        sprite.frontFemale = data.front_female
        sprite.frontShiny = data.front_shiny
        sprite.frontShinyFemale = data.front_shiny_female
        sprite.pokemon = pokemon

        return sprite

    }

}