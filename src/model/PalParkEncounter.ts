import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Especie } from "./Especie";

@Entity("pal_park_encounter", { schema: "public" })
export class PalParkEncounter {
  @PrimaryColumn("integer", { primary: true, generated: true, name: "id" })
  id: number;

  @Column("character varying", { name: "nome", nullable: true, length: 50 })
  nome: string | null;

  @Column("integer", { name: "base_score", nullable: true })
  baseScore: number | null;

  @Column("integer", { name: "rate", nullable: true })
  rate: number | null;

  @ManyToOne(() => Especie, (especie) => especie.id)
  @JoinColumn([{ name: "especie_id", referencedColumnName: "id" }])
  especie: Especie;
}
