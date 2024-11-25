import { api } from "../config/api";
import { AppDataSource, ensureDataSourceInitialized } from "../database/data-source";
import { Pokemon } from "../model/Pokemon";
import { PokemonTipo } from "../model/PokemonTipo";
import { PokemonTipoAntigo } from "../model/PokemonTipoAntigo";
import { Tipo } from "../model/Tipo";
import { TipoEfetividade } from "../model/TipoEfetividade";
import { getUniqueProperties } from "../utils/uniqueProp";

export class TipoService {

    public static async search(url: string) {

        const data = (await api.get(url)).data
    
        const tipo = new Tipo()
    
        tipo.id = data.id
        tipo.nome = data.name
        tipo.moveDamageClass = data.move_damage_class ? data.move_damage_class.name : null
        tipo.generation = data.generation.name

        const restData = getUniqueProperties(data, tipo)
    
        return {tipo, restData}
    
    }

    public static async createTipoAntigo(data: any, pokemon: Pokemon) {

        await ensureDataSourceInitialized()

        const repository = AppDataSource.getRepository(Tipo);
        const repositoryPokemonTipo = AppDataSource.getRepository(PokemonTipo)
        const repositoryAntigo = AppDataSource.getRepository(PokemonTipoAntigo);

        for (const past_type of data) {

            const tipoAntigo = new PokemonTipoAntigo()

            tipoAntigo.generation = past_type.generation ? past_type.generation.name : null
            tipoAntigo.pokemon = pokemon

            for (const type of past_type.types) {

                let tipo = await repository.findOneBy({nome: type.type.name})

                if (!tipo) {

                    const data2 = (await api.get(type.type.url)).data

                    tipo = new Tipo()

                    tipo.id = data2.id
                    tipo.nome = data2.name
                    tipo.moveDamageClass = data2.move_damage_class ? data2.move_damage_class.name : null
                    tipo.generation = data2.generation.name

                    await repository.save(tipo)

                    const pokemonType = await TipoService.createPokemonTipo(tipo, pokemon)
                
                    await repositoryPokemonTipo.save(pokemonType)

                    await this.createTipoEfetividade(data2.damage_relations, tipo)
                
                }

                tipoAntigo.tipo = tipo

            }

            await repositoryAntigo.save(tipoAntigo)

        }

    }

    public static async createTipoEfetividade(data: any, tipo: Tipo) {

        await ensureDataSourceInitialized()

        const repository = AppDataSource.getRepository(Tipo);
        const repositoryEfetividade = AppDataSource.getRepository(TipoEfetividade);
    
        let i = 0

        for (const [key, value] of Object.entries(data)) {

            const values = value as {name:string, url:string}[]

            if (i % 2 == 0) {

                for (const {name, url} of values) {

                    let tipo2 = (await repository.findOneBy({nome: name}))

                    if (!tipo2) {

                        const data2 = (await api.get(url)).data

                        tipo2 = new Tipo()

                        tipo2.id = data2.id
                        tipo2.nome = data2.name
                        tipo2.moveDamageClass = data2.move_damage_class ? data2.move_damage_class.name : null
                        tipo2.generation = data2.generation.name

                        await repository.save(tipo2)

                        await this.createTipoEfetividade(data2.damage_relations, tipo2)

                    }

                    const exist = await repositoryEfetividade.existsBy({
                        relacao: key,
                        tipoAlvo: tipo,
                        tipoAtancante: tipo2
                    })

                    if (!exist) {

                        const tipoEfetividade = new TipoEfetividade()

                        tipoEfetividade.relacao = key
                        tipoEfetividade.tipoAlvo = tipo
                        tipoEfetividade.tipoAtancante = tipo2

                        await repositoryEfetividade.save(tipoEfetividade)

                    }

                }

            } else {

                for (const {name, url} of values) {

                    let tipo2 = (await repository.findOneBy({nome: name}))

                    if (!tipo2) {

                        const data2 = (await api.get(url)).data

                        tipo2 = new Tipo()

                        tipo2.id = data2.id
                        tipo2.nome = data2.name
                        tipo2.moveDamageClass = data2.move_damage_class ? data2.move_damage_class.name : null
                        tipo2.generation = data2.generation.name

                        await repository.save(tipo2)

                        await this.createTipoEfetividade(data2.damage_relations, tipo2)

                    }                    

                    const exist = await repositoryEfetividade.existsBy({
                        relacao: key,
                        tipoAlvo: tipo2,
                        tipoAtancante: tipo
                    })

                    if (!exist) {

                        const tipoEfetividade = new TipoEfetividade()

                        tipoEfetividade.relacao = key
                        tipoEfetividade.tipoAlvo = tipo2
                        tipoEfetividade.tipoAtancante = tipo

                        await repositoryEfetividade.save(tipoEfetividade)

                    }
                
                }

            }

            i++

        }

    }

    public static async createPokemonTipo(tipo: Tipo, pokemon: Pokemon) {

        const pokemonTipo = new PokemonTipo()

        pokemonTipo.id = tipo.id
        pokemonTipo.tipo = tipo
        pokemonTipo.pokemon = pokemon

        return pokemonTipo
    
    }

}