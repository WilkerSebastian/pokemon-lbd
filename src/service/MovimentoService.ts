import { api } from "../config/api"
import { AppDataSource, ensureDataSourceInitialized } from "../database/data-source";
import { Aprende } from "../model/Aprende";
import { ContestEffect } from "../model/ContestEffect";
import { MoveDamageClass } from "../model/MoveDamageClass";
import { MoveTarget } from "../model/MoveTarget";
import { Movimento } from "../model/Movimento";
import type { Pokemon } from "../model/Pokemon";
import { Tipo } from "../model/Tipo";

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

        return await repository.save(movimento)

    }

    public static async createAprende(data: any, pokemon: Pokemon, movimento: Movimento) {

        ensureDataSourceInitialized()

        const repositoryAprende = AppDataSource.getRepository(Aprende);

        const aprende = new Aprende()

        aprende.levelLearnedAt = data.level_learned_at
        aprende.metodo = data.move_learn_method.name
        aprende.versionGroup = data.version_group.name
        aprende.move = movimento
        aprende.pokemon = pokemon

       return await repositoryAprende.save(aprende)

        
    }

}