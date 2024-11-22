import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Movimento } from "./Movimento";

@Entity("move_effect_entry", { schema: "public" })
export class MoveEffectEntry {
  @PrimaryColumn("integer", { generated: "increment", name: "id" })
  id: number;
  
  @Column("text", { name: "effect", nullable: true })
  effect: string | null;

  @Column("text", { name: "short_effect", nullable: true })
  shortEffect: string | null;

  @ManyToOne(() => Movimento, (movimento) => movimento.id)
  @JoinColumn([{ name: "move_id", referencedColumnName: "id" }])
  move: Movimento;
}
