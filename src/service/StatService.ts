import { api } from "../config/api"
import { AppDataSource, ensureDataSourceInitialized } from "../database/data-source"
import { Caracteristica } from "../model/Caracteristica"
import type { ContestEffect } from "../model/ContestEffect"
import { Modifica } from "../model/Modifica"
import { MoveDamageClass } from "../model/MoveDamageClass"
import { Movimento } from "../model/Movimento"
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

        await ensureDataSourceInitialized()

        let stat = new Stat()

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

        stat = await AppDataSource.getRepository(Stat).save(stat)

        await this.createModificas(data.affecting_moves, stat)

        for (const data_caracteristicas of data.characteristics) {

            const data_caracteristica = (await api.get(data_caracteristicas.url)).data
        
            await this.createCaracteristica(data_caracteristica, stat)
        
        }

        return stat

    }

    public static async createPokemonStat(data: any, pokemon: Pokemon, stat: Stat) {

        await ensureDataSourceInitialized()

        const pokemonStat = new PokemonStat()

        pokemonStat.pokemon = pokemon
        pokemonStat.stat = stat
        pokemonStat.baseSat = data.base_stat
        pokemonStat.effort = data.effort

        await AppDataSource.getRepository(PokemonStat).save(pokemonStat)
    
    }

    public static async createModificas(data: any, stat: Stat) {

        await ensureDataSourceInitialized()

        for (const data_decrease of data.decrease) {

            const modifica = new Modifica()

            modifica.change = data_decrease.change
            modifica.stat = stat

            let movimento = await AppDataSource.getRepository(Movimento).findOneBy({nome: data_decrease.move.name}) 

            if (!movimento) {

                const dataMove = (await api.get(data_decrease.move.url)).data

                let contestEffect: ContestEffect | null = null

                if (dataMove.contest_effect)
                    contestEffect = await MovimentoService.createContestEffect(dataMove.contest_effect.url)

                const moveTarget = await MovimentoService.createMoveTarget(dataMove.target)

                const moveDamageClass = await MovimentoService.createMoveDamageClass(dataMove.damage_class)

                movimento = await MovimentoService.createMove(dataMove, moveTarget, moveDamageClass, contestEffect)

            }

            modifica.movimento = movimento

            await AppDataSource.getRepository(Modifica).save(modifica)

        }

        for (const data_increase of data.increase) {

            const modifica = new Modifica()

            modifica.change = data_increase.change
            modifica.stat = stat

            let movimento = await AppDataSource.getRepository(Movimento).findOneBy({nome: data_increase.move.name}) 

            if (!movimento) {

                const dataMove = (await api.get(data_increase.move.url)).data

                let contestEffect: ContestEffect | null = null

                if (dataMove.contest_effect)
                    contestEffect = await MovimentoService.createContestEffect(dataMove.contest_effect.url)

                const moveTarget = await MovimentoService.createMoveTarget(dataMove.target)

                const moveDamageClass = await MovimentoService.createMoveDamageClass(dataMove.damage_class)

                movimento = await MovimentoService.createMove(dataMove, moveTarget, moveDamageClass, contestEffect)

            }

            modifica.movimento = movimento

            await AppDataSource.getRepository(Modifica).save(modifica)

        }

    }

    public static async createCaracteristica(data: any, stat: Stat) {

        await ensureDataSourceInitialized()

        const caracteristica = new Caracteristica()

        caracteristica.id = data.id
        caracteristica.descricao = data.descriptions.find((d: any) => d.language.name == "en").description
        caracteristica.geneModulo = data.gene_modulo
        caracteristica.possibleValues = data.possible_values
        caracteristica.stat = stat

        await AppDataSource.getRepository(Caracteristica).save(caracteristica)

    }

}