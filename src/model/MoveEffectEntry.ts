import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Movimento } from "./Movimento";

@Entity("move_effect_entry", { schema: "public" })
export class MoveEffectEntry {
  @Column("text", { name: "effect", nullable: true })
  effect: string | null;

  @Column("text", { name: "short_effect", nullable: true })
  shortEffect: string | null;

  @ManyToOne(() => Movimento, (movimento) => movimento.moveEffectEntries)
  @JoinColumn([{ name: "move_id", referencedColumnName: "id" }])
  move: Movimento;
}
