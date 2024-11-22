import { Column, Entity, Index, OneToMany } from "typeorm";
import { Berry } from "./Berry";
import { Evolucao } from "./Evolucao";
import { ItemAtributo } from "./ItemAtributo";
import { ItemEffectEntry } from "./ItemEffectEntry";
import { ItemFlavorTextEntry } from "./ItemFlavorTextEntry";
import { ItemGameIndex } from "./ItemGameIndex";
import { ItemSegurado } from "./ItemSegurado";
import { Machine } from "./Machine";

@Index("item_pkey", ["id"], { unique: true })
@Entity("item", { schema: "public" })
export class Item {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("character varying", { name: "nome", nullable: true, length: 50 })
  nome: string | null;

  @Column("integer", { name: "custo", nullable: true })
  custo: number | null;

  @Column("integer", { name: "fling_power", nullable: true })
  flingPower: number | null;

  @Column("character varying", {
    name: "fling_effect",
    nullable: true,
    length: 50,
  })
  flingEffect: string | null;

  @Column("character varying", { name: "category", nullable: true, length: 50 })
  category: string | null;

  @Column("character varying", { name: "pocket", nullable: true, length: 50 })
  pocket: string | null;

  @Column("text", { name: "sprite", nullable: true })
  sprite: string | null;

  @Column("integer", { name: "baby_trigger_especie", nullable: true })
  babyTriggerEspecie: number | null;

  @OneToMany(() => Berry, (berry) => berry.item)
  berries: Berry[];

  @OneToMany(() => Evolucao, (evolucao) => evolucao.heldItem)
  evolucaos: Evolucao[];

  @OneToMany(() => ItemAtributo, (itemAtributo) => itemAtributo.item)
  itemAtributos: ItemAtributo[];

  @OneToMany(() => ItemEffectEntry, (itemEffectEntry) => itemEffectEntry.item)
  itemEffectEntries: ItemEffectEntry[];

  @OneToMany(
    () => ItemFlavorTextEntry,
    (itemFlavorTextEntry) => itemFlavorTextEntry.item
  )
  itemFlavorTextEntries: ItemFlavorTextEntry[];

  @OneToMany(() => ItemGameIndex, (itemGameIndex) => itemGameIndex.item)
  itemGameIndices: ItemGameIndex[];

  @OneToMany(() => ItemSegurado, (itemSegurado) => itemSegurado.item)
  itemSegurados: ItemSegurado[];

  @OneToMany(() => Machine, (machine) => machine.item)
  machines: Machine[];
}
