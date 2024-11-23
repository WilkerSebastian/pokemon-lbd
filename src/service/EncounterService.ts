import { api } from "../config/api";
import { Area } from "../model/Area";
import { Encounter } from "../model/Encounter";
import { EncounterCondition } from "../model/EncounterCondition";
import type { Pokemon } from "../model/Pokemon";

export class EncounterService {

    public static async search(url: string) {

        const data = (await api.get(url)).data as any[]

        return data
        
    }

    public static async createEncounters(data: any, area: Area, pokemon: Pokemon) {

        const encounters: {encounter: Encounter, conditions: string[]}[] = []

        for (const partial_encounter of data.encounter_details) {

            const encounter = new Encounter()

            encounter.minLevel = partial_encounter.min_level
            encounter.maxLevel = partial_encounter.max_level
            encounter.chance = partial_encounter.chance
            encounter.metodo = partial_encounter.method.name
            encounter.version = data.version.name
            encounter.maxChance = data.max_chance
            encounter.area = area
            encounter.pokemon = pokemon

            encounters.push({
                encounter: encounter,
                conditions: partial_encounter.condition_values ? partial_encounter.condition_values.map((c: {name:string, url:string}) => c.name) : []
            })

        }

        return encounters
        
    }

    public static async createEncounterCondition(condition: string, encounter: Encounter) {

        const encounterCondition = new EncounterCondition()

        encounterCondition.encounterId = encounter.id
        encounterCondition.condition = condition
        encounterCondition.encounter = encounter

        return encounterCondition

    }

    public static async searchArea(url: string) {

        const data = (await api.get(url)).data

        const region = (await api.get(data.location.url)).data.region.name

        const area = new Area()

        area.id = data.id
        area.nome = data.name
        area.location = data.location.name
        area.region = region

        return area

    }

}