import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Item } from "./Item";

@Entity("item_game_index", { schema: "public" })
export class ItemGameIndex {
  @PrimaryColumn("integer", { generated: "increment", name: "id" })
  id: number;

  @Column("character varying", {
    name: "version_group",
    nullable: true,
    length: 50,
  })
  generation: string | null;

  @Column("integer", { name: "game_index", nullable: true })
  gameIndex: number | null;

  @ManyToOne(() => Item, (item) => item.id)
  @JoinColumn([{ name: "item_id", referencedColumnName: "id" }])
  item: Item;
}
