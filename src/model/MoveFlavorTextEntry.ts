import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Movimento } from "./Movimento";

@Entity("move_flavor_text_entry", { schema: "public" })
export class MoveFlavorTextEntry {
  @PrimaryColumn("integer", { generated: "increment", name: "id" })
  id: number;
  
  @Column("text", { name: "flavor_text", nullable: true })
  flavorText: string | null;

  @Column("character varying", { name: "language", nullable: true })
  language: string | null;

  @Column("character varying", {
    name: "version_group",
    nullable: true,
    length: 50,
  })
  versionGroup: string | null;

  @ManyToOne(() => Movimento, (movimento) => movimento.id)
  @JoinColumn([{ name: "move_id", referencedColumnName: "id" }])
  move: Movimento;
}
