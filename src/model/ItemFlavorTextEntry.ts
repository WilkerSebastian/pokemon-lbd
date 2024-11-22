import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Item } from "./Item";

@Index("item_flavor_text_entry_pkey", ["id"], { unique: true })
@Entity("item_flavor_text_entry", { schema: "public" })
export class ItemFlavorTextEntry {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("character varying", {
    name: "version_group",
    nullable: true,
    length: 50,
  })
  versionGroup: string | null;

  @Column("text", { name: "flavor_text", nullable: true })
  flavorText: string | null;

  @Column("character varying", { name: "language", nullable: true, length: 50 })
  language: string | null;

  @ManyToOne(() => Item, (item) => item.id)
  @JoinColumn([{ name: "item_id", referencedColumnName: "id" }])
  item: Item;
}
