import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Item } from "./Item";
import { Movimento } from "./Movimento";

@Index("machine_pkey", ["id"], { unique: true })
@Entity("machine", { schema: "public" })
export class Machine {
  @Column("integer", { primary: true, generated: "increment", name: "id" })
  id: number;

  @Column("character varying", {
    name: "version_group",
    nullable: true,
    length: 50,
  })
  versionGroup: string | null;

  @ManyToOne(() => Item, (item) => item.id, {nullable:true})
  @JoinColumn([{ name: "item_id", referencedColumnName: "id"}])
  item: Item | null;

  @ManyToOne(() => Movimento, (movimento) => movimento.id, {nullable:true})
  @JoinColumn([{ name: "movimento_id", referencedColumnName: "id"}])
  movimento: Movimento | null;
}
