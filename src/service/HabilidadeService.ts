import axios from "axios";
import { PokemonHabilidade } from "../model/PokemonHabilidade";
import { Habilidade } from "../model/Habilidade";
import type { Pokemon } from "../model/Pokemon";

export class HabilidadeService {

    public static async search(url: string) {

        const data = (await axios.get(url)).data

        const habilidade = new Habilidade()

        habilidade.id = data.id
        habilidade.isMainSeries = data.is_main_series
        habilidade.nome = data.name
        habilidade.generation = data.generation.name

        return habilidade

    }

    public static async createPokemonHabilidade(data: any, pokemon: Pokemon, habilidade: Habilidade) {

        const pokemonHabilidade = new PokemonHabilidade()

        pokemonHabilidade.slot = data.slot
        pokemonHabilidade.isHidden = data.is_hidden

        pokemonHabilidade.pokemon = pokemon
        pokemonHabilidade.habilidade = habilidade

        return pokemonHabilidade

    }

}