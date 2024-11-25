import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Habilidade } from "./Habilidade";

@Index(
  "habilidade_effect_entry_pkey",
  ["habilidadeId", "language"],
  { unique: true }
)
@Entity("habilidade_effect_entry", { schema: "public" })
export class HabilidadeEffectEntry {
  @Column("integer", { primary: true, name: "habilidade_id" })
  habilidadeId: number;

  @Column("character varying", { primary: true, name: "language" })
  language: string;

  @Column("text", { name: "effect", nullable: true })
  effect: string | null;

  @Column("text", { name: "short_effect", nullable: true })
  shortEffect: string | null;

  @ManyToOne(
    () => Habilidade,
    (habilidade) => habilidade.id
  )
  @JoinColumn([{ name: "habilidade_id", referencedColumnName: "id" }])
  habilidade: Habilidade;
}
