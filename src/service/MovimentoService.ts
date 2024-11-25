import { api } from "../config/api"
import { AppDataSource, ensureDataSourceInitialized } from "../database/data-source";
import { Aprende } from "../model/Aprende";
import { ContestEffect } from "../model/ContestEffect";
import { Machine } from "../model/Machine";
import { MoveCategory } from "../model/MoveCategory";
import { MoveDamageClass } from "../model/MoveDamageClass";
import { MoveEffectEntry } from "../model/MoveEffectEntry";
import { MoveFlavorTextEntry } from "../model/MoveFlavorTextEntry";
import { MoveTarget } from "../model/MoveTarget";
import { Movimento } from "../model/Movimento";
import { MovimentoMeta } from "../model/MovimentoMeta";
import { MovimentoPastValues } from "../model/MovimentoPastValues";
import type { Pokemon } from "../model/Pokemon";
import { Tipo } from "../model/Tipo";
import { ItemService } from "./ItemService";

export class MovimentoService {

    public static async search(url: string) {

        const data = (await api.get(url)).data

        return data

    }

    public static async createMoveTarget(data: any) {

        ensureDataSourceInitialized()

        const repositoryMoveTarget = AppDataSource.getRepository(MoveTarget);

        const moveTarget = new MoveTarget()

        moveTarget.nome = data.name
        moveTarget.descricao = ((await api.get(data.url)).data.descriptions as any[]).map(d => d.language.name == "en" ? d.description : null)[0]

        return await repositoryMoveTarget.save(moveTarget)

    }

    public static async createMoveDamageClass(data: any) {

        ensureDataSourceInitialized()

        const repositoryMoveDamageClass = AppDataSource.getRepository(MoveDamageClass);

        const moveDamageClass = new MoveDamageClass()
        
        moveDamageClass.nome = data.name
        moveDamageClass.descricao = ((await api.get(data.url)).data.descriptions as any[]).map(d => d.language.name == "en" ? d.description : null)[0]

        return await repositoryMoveDamageClass.save(moveDamageClass)

    }

    public static async createContestEffect(url: string) {

        ensureDataSourceInitialized()

        const data = (await api.get(url)).data

        const repositoryContestEffect = AppDataSource.getRepository(ContestEffect);

        const contestEffect = new ContestEffect()

        contestEffect.id = data.id
        contestEffect.appeal = data.appeal
        contestEffect.jam = data.jam
        contestEffect.effect = (data.effect_entries as any[]).filter(e => e.language.name == "en")[0].effect
        contestEffect.flavorTextEntry = (data.flavor_text_entries as any[]).filter(f => f.language.name == "en")[0].flavor_text

        return await repositoryContestEffect.save(contestEffect)

    }

    public static async createMove(data: any, moveTarget: MoveTarget, moveDamageClass: MoveDamageClass, contestEffect: ContestEffect | null) {

        ensureDataSourceInitialized()

        const repository = AppDataSource.getRepository(Movimento);

        const repositoryTipo = AppDataSource.getRepository(Tipo);

        const tipo = (await repositoryTipo.findOneBy({nome: data.type.name}))!

        const movimento = new Movimento()

        movimento.id = data.id
        movimento.accuracy = data.accuracy
        movimento.nome = data.name
        movimento.power = data.power
        movimento.pp = data.pp
        movimento.priority = data.priority
        movimento.effectChance = data.effect_chance
        movimento.contestType = data.contest_type ? data.contest_type.name : null
        movimento.generation = data.generation ? data.generation.name : null
        movimento.contestEffect = contestEffect
        movimento.damageClass = moveDamageClass
        movimento.target = moveTarget
        movimento.tipo = tipo

        const move = await repository.save(movimento)

        if (data.meta)
            await this.createMovimentoMeta(data.meta, move)

        for (const pasta_value_data of data.past_values)
            await this.createMovimentoPastValues(pasta_value_data, move)

        for (const effect_entry_data of data.effect_entries)
            await this.createMoveEffectEntry(effect_entry_data, move)

        for (const flavor_text_entry_data of data.flavor_text_entries)
            await this.createMoveFlavorTextEntry(flavor_text_entry_data, move)

        return move

    }

    public static async createAprende(data: any, pokemon: Pokemon, movimento: Movimento) {

        ensureDataSourceInitialized()

        const repositoryAprende = AppDataSource.getRepository(Aprende);

        const aprende = new Aprende()

        if (data.move_learn_method.name == "machine") {

            await ItemService.createMachine(data, {movimento})

        }

        aprende.levelLearnedAt = data.level_learned_at
        aprende.metodo = data.move_learn_method.name
        aprende.versionGroup = data.version_group.name
        aprende.move = movimento
        aprende.pokemon = pokemon

       return await repositoryAprende.save(aprende)

        
    }

    public static async createMovimentoMeta(data: any, movimento: Movimento) {

        await ensureDataSourceInitialized()

        const movimentoMeta = new MovimentoMeta()

        movimentoMeta.ailment = data.ailment ? data.ailment.name : null
        movimentoMeta.critRate = data.crit_rate
        movimentoMeta.drain = data.drain
        movimentoMeta.flinchChance = data.flinch_chance
        movimentoMeta.healing = data.healing
        movimentoMeta.maxHits = data.max_hits
        movimentoMeta.minHits = data.min_hits
        movimentoMeta.maxTurns = data.max_turns
        movimentoMeta.statChance = data.stat_chance
        movimentoMeta.movimento = movimento

        const data_category = (await api.get(data.category.url)).data

        const category = await this.createMoveCategory(data_category)

        movimentoMeta.category = category.nome

        return await AppDataSource.getRepository(MovimentoMeta).save(movimentoMeta)


    }

    public static async createMoveCategory(data: any) {

        await ensureDataSourceInitialized()

        const moveCategory = new MoveCategory();

        moveCategory.id = data.id
        moveCategory.nome = data.name
        moveCategory.descricao = (data.descriptions as any[]).filter(d => d.language.name == "en")[0].description

        return await AppDataSource.getRepository(MoveCategory).save(moveCategory)

    }

    public static async createMovimentoPastValues(data: any, movimento: Movimento) {

        await ensureDataSourceInitialized()

        const movimentoPastValues = new MovimentoPastValues()

        movimentoPastValues.accuracy = data.accuracy
        movimentoPastValues.power = data.power
        movimentoPastValues.pp = data.pp
        movimentoPastValues.effectChance = data.effect_chance
        movimentoPastValues.movimento = movimento
        movimentoPastValues.versionGroup = data.version_group.name

        if (data.type) {
            
            let tipo = (await AppDataSource.getRepository(Tipo).findOneBy({nome: data.type.name}))
    
            if (!tipo) {

                const data2 = (await api.get(data.type.url)).data

                tipo = new Tipo()

                tipo.id = data2.id
                tipo.nome = data2.name
                tipo.moveDamageClass = data2.move_damage_class ? data2.move_damage_class.name : null
                tipo.generation = data2.generation ? data2.generation.name : null

                await AppDataSource.getRepository(Tipo).save(tipo)

            }

            movimentoPastValues.tipoId = tipo.id  

        }
        
        return await AppDataSource.getRepository(MovimentoPastValues).save(movimentoPastValues)

    }

    public static async createMoveEffectEntry(data: any, movimento: Movimento) {

        await ensureDataSourceInitialized()

        const moveEffectEntry = new MoveEffectEntry()

        moveEffectEntry.move = movimento
        moveEffectEntry.effect = data.effect
        moveEffectEntry.shortEffect = data.short_effect

        return await AppDataSource.getRepository(MoveEffectEntry).save(moveEffectEntry)

    }

    public static async createMoveFlavorTextEntry(data: any, movimento: Movimento) {

        await ensureDataSourceInitialized() 

        const moveFlavorTextEntry = new MoveFlavorTextEntry()

        moveFlavorTextEntry.flavorText
        moveFlavorTextEntry.language = data.language.name
        moveFlavorTextEntry.versionGroup = data.version_group.name
        moveFlavorTextEntry.move = movimento

        return await AppDataSource.getRepository(MoveFlavorTextEntry).save(moveFlavorTextEntry)

    }


}