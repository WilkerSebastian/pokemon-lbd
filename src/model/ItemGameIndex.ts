import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Item } from "./Item";

@Entity("item_game_index", { schema: "public" })
export class ItemGameIndex {
  @Column("integer", { name: "generation", nullable: true })
  generation: number | null;

  @Column("integer", { name: "game_index", nullable: true })
  gameIndex: number | null;

  @ManyToOne(() => Item, (item) => item.itemGameIndices)
  @JoinColumn([{ name: "item_id", referencedColumnName: "id" }])
  item: Item;
}
