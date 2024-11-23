import { api } from "../config/api";
import { Especie } from "../model/Especie";
import { EspecieFlavorText } from "../model/EspecieFlavorText";
import { Genero } from "../model/Genero";
import { GrowthRate } from "../model/GrowthRate";
import { PalParkEncounter } from "../model/PalParkEncounter";

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
        especie.habitat = data.habitat.name
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

}