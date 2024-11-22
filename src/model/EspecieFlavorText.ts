import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Especie } from "./Especie";

@Index("especie_flavor_text_pkey", ["especieId", "language", "version"], {
  unique: true,
})
@Entity("especie_flavor_text", { schema: "public" })
export class EspecieFlavorText {
  @Column("integer", { primary: true, name: "especie_id" })
  especieId: number;

  @Column("character varying", { primary: true, name: "version", length: 50 })
  version: string;

  @Column("character varying", { primary: true, name: "language", length: 50 })
  language: string;

  @Column("text", { name: "flavor_text", nullable: true })
  flavorText: string | null;

  @ManyToOne(() => Especie, (especie) => especie.id)
  @JoinColumn([{ name: "especie_id", referencedColumnName: "id" }])
  especie: Especie;
}
