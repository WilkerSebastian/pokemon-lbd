import { api } from "../config/api"
import { AppDataSource, ensureDataSourceInitialized } from "../database/data-source"
import { MoveDamageClass } from "../model/MoveDamageClass"
import type { Pokemon } from "../model/Pokemon"
import { PokemonStat } from "../model/PokemonStat"
import { Stat } from "../model/Stat"
import { MovimentoService } from "./MovimentoService"

export class StatService {

    public static async search(data: any) {

        const dataStat = (await api.get(data.stat.url)).data

        return dataStat

    }

    public static async createStat(data: any) {

        ensureDataSourceInitialized()

        const stat = new Stat()

        stat.id = data.id
        stat.nome = data.name
        stat.isBattleOnly = data.is_battle_only
        stat.gameIndex = data.game_index

        if (data.damage_class) {

            const repositoryDamageClass = AppDataSource.getRepository(MoveDamageClass)

            let moveDamageClass = await repositoryDamageClass.findOneBy({nome: data.damage_class.name})

            if (!moveDamageClass) {

                const dataMoveDamageClass = (await api.get(data.damage_class.url)).data

                moveDamageClass = await MovimentoService.createMoveDamageClass(dataMoveDamageClass)

            }

            stat.damageClass = moveDamageClass

        }

        return await AppDataSource.getRepository(Stat).save(stat)

    }

    public static async createPokemonStat(data: any, pokemon: Pokemon, stat: Stat) {

        ensureDataSourceInitialized()

        const pokemonStat = new PokemonStat()

        pokemonStat.pokemon = pokemon
        pokemonStat.stat = stat
        pokemonStat.baseSat = data.base_stat
        pokemonStat.effort = data.effort

        await AppDataSource.getRepository(PokemonStat).save(pokemonStat)
    
    }

}