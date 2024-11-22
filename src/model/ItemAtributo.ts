import { Entity, JoinColumn, ManyToOne } from "typeorm";
import { Atributo } from "./Atributo";
import { Item } from "./Item";

@Entity("item_atributo", { schema: "public" })
export class ItemAtributo {
  @ManyToOne(() => Atributo, (atributo) => atributo.itemAtributos)
  @JoinColumn([{ name: "atributo_id", referencedColumnName: "id" }])
  atributo: Atributo;

  @ManyToOne(() => Item, (item) => item.itemAtributos)
  @JoinColumn([{ name: "item_id", referencedColumnName: "id" }])
  item: Item;
}
