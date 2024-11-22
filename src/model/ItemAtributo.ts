import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Atributo } from "./Atributo";
import { Item } from "./Item";

@Entity("item_atributo", { schema: "public" })
export class ItemAtributo {
  @PrimaryColumn("integer", { generated: "increment", name: "id" })
  id: number;

  @ManyToOne(() => Atributo, (atributo) => atributo.id)
  @JoinColumn([{ name: "atributo_id", referencedColumnName: "id" }])
  atributo: Atributo;

  @ManyToOne(() => Item, (item) => item.id)
  @JoinColumn([{ name: "item_id", referencedColumnName: "id" }])
  item: Item;
}
