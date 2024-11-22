import { Column, Entity, Index, OneToMany } from "typeorm";
import { Movimento } from "./Movimento";

@Index("contest_effect_pkey", ["id"], { unique: true })
@Entity("contest_effect", { schema: "public" })
export class ContestEffect {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("integer", { name: "appeal", nullable: true })
  appeal: number | null;

  @Column("integer", { name: "jam", nullable: true })
  jam: number | null;

  @Column("text", { name: "effect", nullable: true })
  effect: string | null;

  @Column("text", { name: "flavor_text_entry", nullable: true })
  flavorTextEntry: string | null;

  @OneToMany(() => Movimento, (movimento) => movimento.contestEffect)
  movimentos: Movimento[];
}
