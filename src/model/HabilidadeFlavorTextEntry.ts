import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Habilidade } from "./Habilidade";

@Index(
  "habilidade_flavor_text_entry_pkey",
  ["habilidadeId", "language", "versionGroup"],
  { unique: true }
)
@Entity("habilidade_flavor_text_entry", { schema: "public" })
export class HabilidadeFlavorTextEntry {
  @Column("integer", { primary: true, name: "habilidade_id" })
  habilidadeId: number;

  @Column("character varying", {
    primary: true,
    name: "version_group",
    length: 50,
  })
  versionGroup: string;

  @Column("character varying", { primary: true, name: "language", length: 50 })
  language: string;

  @Column("text", { name: "flavor_text", nullable: true })
  flavorText: string | null;

  @ManyToOne(
    () => Habilidade,
    (habilidade) => habilidade.id
  )
  @JoinColumn([{ name: "habilidade_id", referencedColumnName: "id" }])
  habilidade: Habilidade;
}
