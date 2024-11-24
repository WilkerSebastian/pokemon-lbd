import { api } from "../config/api"
import { AppDataSource, ensureDataSourceInitialized } from "../database/data-source"
import { Item } from "../model/Item"
import { ItemSegurado } from "../model/ItemSegurado"
import { Machine } from "../model/Machine"
import type { Movimento } from "../model/Movimento"
import type { Pokemon } from "../model/Pokemon"

export class ItemService {

    public static async search(data: any) {

        const dataItem = (await api.get(data.item.url)).data

        return dataItem

    }

    public static async createItem(data: any) {

        await ensureDataSourceInitialized()

        let item = new Item()

        item.id = data.id
        item.nome = data.name
        item.custo = data.cost
        item.flingPower = data.fling_power
        item.flingEffect = data.fling_effect
        item.category = data.category ? data.category.name : null
        item.sprite = data.sprites ? data.sprites.default : null

        await AppDataSource.getRepository(Item).save(item)

        for (const data_machine of data.machines) {
            
            await this.createMachine(data_machine, {item})

        }

        return item

    }

    public static async createItemSegurado(data: any, pokemon: Pokemon, item: Item) {

        await ensureDataSourceInitialized()

        for (const item_segurado_data of data) {

            const itemSegurado = new ItemSegurado()
        
            itemSegurado.version = item_segurado_data.version.name
            itemSegurado.rarity = item_segurado_data.rarity
            itemSegurado.pokemon = pokemon
            itemSegurado.item = item

            await AppDataSource.getRepository(ItemSegurado).save(itemSegurado)

        }

    }

    public static async createMachine(data: any, extraData: {movimento?: Movimento, item?: Item}) {

        await ensureDataSourceInitialized()

        let machine = await AppDataSource.getRepository(Machine).findOne({where: {
            movimento: extraData.movimento,
            item: extraData.item
        }})

        if (!machine) {

            machine = new Machine()

            machine.versionGroup = data.version_group.name

        }

        if (!machine.item)
            machine.item = extraData.item ?? null

        if (!machine.movimento)
            machine.movimento = extraData.movimento ?? null

        await AppDataSource.getRepository(Machine).save(machine)


    }

}