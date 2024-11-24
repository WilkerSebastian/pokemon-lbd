import { api } from "../config/api"
import { AppDataSource, ensureDataSourceInitialized } from "../database/data-source"
import { Atributo } from "../model/Atributo"
import { Item } from "../model/Item"
import { ItemAtributo } from "../model/ItemAtributo"
import { ItemEffectEntry } from "../model/ItemEffectEntry"
import { ItemFlavorTextEntry } from "../model/ItemFlavorTextEntry"
import { ItemGameIndex } from "../model/ItemGameIndex"
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

        for (const data_atributos of data.attributes) {

            const data_atributo = (await api.get(data_atributos.url)).data

            const atributo = await this.createAtributo(data_atributo)

            await this.createItemAtributo(item, atributo)

        }

        for (const data_effect_entries of (data.effect_entries as any[]).filter(e => e.language.name == "en"))
            await this.createItemEffectEntry(data_effect_entries, item)

        for (const data_flavor_text_entries of (data.flavor_text_entries as any[]).filter(f => f.language.name == "en")) 
            await this.createFlavorTextEntry(data_flavor_text_entries, item)

        for (const data_game_index of data.game_indices)
            await this.createGameIndex(data_game_index, item)

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

    public static async createAtributo(data: any) {

        const atributo = new Atributo()

        atributo.id = data.id
        atributo.nome = data.name
        atributo.descricao = data.description

        return await AppDataSource.getRepository(Atributo).save(atributo)

    }

    public static async createItemAtributo(item: Item, atributo: Atributo) {

        await ensureDataSourceInitialized()

        const itemAtributo = new ItemAtributo()

        itemAtributo.item = item
        itemAtributo.atributo = atributo

        await AppDataSource.getRepository(ItemAtributo).save(itemAtributo)

    }

    public static async createItemEffectEntry(data: any, item: Item) {

        await ensureDataSourceInitialized()

        const itemEffectEntry = new ItemEffectEntry()

        itemEffectEntry.effect = data.effect
        itemEffectEntry.shortEffect = data.short_effect
        itemEffectEntry.item = item

        await AppDataSource.getRepository(ItemEffectEntry).save(itemEffectEntry)

    }

    public static async createFlavorTextEntry(data: any, item: Item) {

        await ensureDataSourceInitialized()

        const itemFlavorTextEntry = new ItemFlavorTextEntry()

        itemFlavorTextEntry.flavorText = data.text
        itemFlavorTextEntry.language = data.language.name
        itemFlavorTextEntry.versionGroup = data.version_group.name
        itemFlavorTextEntry.item = item

        await AppDataSource.getRepository(ItemFlavorTextEntry).save(itemFlavorTextEntry)

    }

    public static async createGameIndex(data: any, item: Item) {

        await ensureDataSourceInitialized()

        const itemGameIndex = new ItemGameIndex()

        itemGameIndex.generation = data.generation.name
        itemGameIndex.gameIndex = data.game_index
        itemGameIndex.item = item

        await AppDataSource.getRepository(ItemGameIndex).save(itemGameIndex)

    }

}