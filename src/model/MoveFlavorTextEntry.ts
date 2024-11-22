import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Movimento } from "./Movimento";

@Entity("move_flavor_text_entry", { schema: "public" })
export class MoveFlavorTextEntry {
  @Column("text", { name: "flavor_text", nullable: true })
  flavorText: string | null;

  @Column("character varying", { name: "language", nullable: true, length: 50 })
  language: string | null;

  @Column("character varying", {
    name: "version_group",
    nullable: true,
    length: 50,
  })
  versionGroup: string | null;

  @ManyToOne(() => Movimento, (movimento) => movimento.moveFlavorTextEntries)
  @JoinColumn([{ name: "move_id", referencedColumnName: "id" }])
  move: Movimento;
}
