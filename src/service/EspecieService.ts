import { api } from "../config/api";
import { Catalogo } from "../model/Catalogo";
import { EggGroup } from "../model/EggGroup";
import { Especie } from "../model/Especie";
import { EspecieFlavorText } from "../model/EspecieFlavorText";
import { Genero } from "../model/Genero";
import { GrowthRate } from "../model/GrowthRate";
import { PalParkEncounter } from "../model/PalParkEncounter";
import { Pokedex } from "../model/Pokedex";

export class EspecieService {

    public static async search(url: string) {

        const data = (await api.get(url)).data

        return data

    }

    public static async createEspecie(data: any, growthRate: GrowthRate) {

        const especie = new Especie()

        especie.id = data.id
        especie.nome = data.name 
        especie.baseHappiness = data.base_happiness
        especie.captureRate = data.capture_rate
        especie.cor = data.color.name
        especie.genderRate = data.gender_rate
        especie.ordem = data.order
        especie.hatchCounter = data.hatch_counter
        especie.habitat = data.habitat ? data.habitat.name : null
        especie.generation = data.generation.name
        especie.formato = data.shape.name
        especie.hasGenderDifferences = data.has_gender_differences
        especie.isBaby = data.is_baby
        especie.isLegendary = data.is_legendary
        especie.isMythical = data.is_mythical
        especie.formsSwitchable = data.forms_switchable
        especie.growthRate = growthRate

        return especie

    }

    public static async createEspecieFlavorText(data: any, especie: Especie) {

        const especieFlavorText = new EspecieFlavorText()

        especieFlavorText.especieId = especie.id
        especieFlavorText.version = data.version.name
        especieFlavorText.language = data.language.name
        especieFlavorText.flavorText = data.flavor_text
        especieFlavorText.especie = especie

        return especieFlavorText
 
    }

    public static async searchEspecieGrowthRate(url: string) {

        const data = (await api.get(url)).data

        const growthRate = new GrowthRate()

        growthRate.id = data.id
        growthRate.nome = data.name
        growthRate.levels = data.levels.map((l: { level: number, experience: number }) => l.experience)
        growthRate.formula = data.formula

        return growthRate

    }

    public static async createPalParkEncounters(data: any, especie: Especie) {

        const palParkEncounter = new PalParkEncounter()

        palParkEncounter.nome = data.area.name
        palParkEncounter.baseScore = data.base_score
        palParkEncounter.rate = data.rate
        palParkEncounter.especie = especie

        return palParkEncounter

    }

    public static async createGenero(data: any, especie: Especie) {

        const genero = new Genero()

        genero.pokemonEspecie = especie.id
        genero.lingua = data.language.name
        genero.genero = data.genus
        genero.pokemonEspecie2 = especie

        return genero

    }

    public static async searchEggGroup(url: string, especie: Especie) {

        const data = (await api.get(url)).data

        const eggGroup = new EggGroup()

        eggGroup.especieId = data.id
        eggGroup.especie = especie
        eggGroup.nome = data.name

        return eggGroup

    }

    public static async searchPokedex(url: string) {

        const data = (await api.get(url)).data

        const pokedex = new Pokedex()

        const en_descriptions = (data.descriptions as any[]).filter(d => d.language.name == "en");

        pokedex.id = data.id
        pokedex.nome = data.name
        pokedex.isMainSeries = data.is_main_series
        pokedex.region = data.region ? data.region.name : null
        pokedex.descricao = en_descriptions.length > 0 ? en_descriptions[0].description : null

        return pokedex

    }

    public static async createCatalogo(data: any, pokedex: Pokedex, especie: Especie) {

        const catalogo = new Catalogo()

        catalogo.entryNumber = data.entry_number
        catalogo.pokedex = pokedex
        catalogo.especie = especie

        return catalogo

    }

}