import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Item } from "./Item";

@Entity("item_effect_entry", { schema: "public" })
export class ItemEffectEntry {
  @Column("text", { name: "effect", nullable: true })
  effect: string | null;

  @Column("text", { name: "short_effect", nullable: true })
  shortEffect: string | null;

  @ManyToOne(() => Item, (item) => item.itemEffectEntries)
  @JoinColumn([{ name: "item_id", referencedColumnName: "id" }])
  item: Item;
}
