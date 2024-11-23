import axios from "axios";
import { PokemonHabilidade } from "../model/PokemonHabilidade";
import { Habilidade } from "../model/Habilidade";
import type { Pokemon } from "../model/Pokemon";
import { HabilidadeEffectEntry } from "../model/HabilidadeEffectEntry";
import { HabilidadeFlavorTextEntry } from "../model/HabilidadeFlavorTextEntry";
import { getUniqueProperties } from "../utils/uniqueProp";
import { PokemonHabilidadeAntiga } from "../model/PokemonHabilidadeAntiga";

export class HabilidadeService {

    public static async search(url: string) {

        const data = (await axios.get(url)).data

        const habilidade = new Habilidade()

        habilidade.id = data.id
        habilidade.isMainSeries = data.is_main_series
        habilidade.nome = data.name
        habilidade.generation = data.generation.name

        const restData = getUniqueProperties(data, habilidade)

        return {habilidade, restData}

    }

    public static async createPokemonHabilidade(data: any, pokemon: Pokemon, habilidade: Habilidade) {

        const pokemonHabilidade = new PokemonHabilidade()

        pokemonHabilidade.slot = data.slot
        pokemonHabilidade.isHidden = data.is_hidden

        pokemonHabilidade.pokemon = pokemon
        pokemonHabilidade.habilidade = habilidade

        return pokemonHabilidade

    }

    public static async createHabilidadeFlavorTextEntry(data: any, habilidade: Habilidade) {
        
        const habilidadeFlavorTextEntry = new HabilidadeFlavorTextEntry()

        habilidadeFlavorTextEntry.habilidadeId = habilidade.id
        habilidadeFlavorTextEntry.versionGroup = data.version_group.name
        habilidadeFlavorTextEntry.language = data.language.name
        habilidadeFlavorTextEntry.flavorText = data.flavor_text

        return habilidadeFlavorTextEntry

    }

    public static async createHabilidadeEffectEntry(data: any, habilidade: Habilidade) {

        const habilidadeEffectEntry = new HabilidadeEffectEntry()

        habilidadeEffectEntry.habilidadeId = habilidade.id
        habilidadeEffectEntry.language = data.language.name
        habilidadeEffectEntry.effect = data.effect
        habilidadeEffectEntry.shortEffect = data.short_effect

        return habilidadeEffectEntry
    
    }

    public static async createHabilidadeAntiga(data: any, pkemon: Pokemon, habilidade: Habilidade) {

        const habilidadeAntiga = new PokemonHabilidadeAntiga()

        habilidadeAntiga.slot = data.slot
        habilidadeAntiga.isHidden = data.is_hidden
        habilidadeAntiga.generation = data.generation
        habilidadeAntiga.pokemon = pkemon
        habilidadeAntiga.habilidade = habilidade

        return habilidadeAntiga

    }

}