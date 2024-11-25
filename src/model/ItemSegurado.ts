import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Item } from "./Item";
import { Pokemon } from "./Pokemon";

@Index("item_segurado_pkey", ["id"], { unique: true })
@Entity("item_segurado", { schema: "public" })
export class ItemSegurado {
  @Column("integer", { primary: true, generated: "increment", name: "id" })
  id: number;

  @Column("character varying", { name: "version", nullable: true })
  version: string | null;

  @Column("integer", { name: "rarity", nullable: true })
  rarity: number | null;

  @ManyToOne(() => Item, (item) => item.id)
  @JoinColumn([{ name: "item_id", referencedColumnName: "id" }])
  item: Item;

  @ManyToOne(() => Pokemon, (pokemon) => pokemon.id)
  @JoinColumn([{ name: "pokemon_id", referencedColumnName: "id" }])
  pokemon: Pokemon;
}
