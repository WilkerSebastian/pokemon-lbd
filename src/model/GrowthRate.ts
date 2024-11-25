import { Column, Entity, Index, OneToMany } from "typeorm";
import { Especie } from "./Especie";

@Index("growth_rate_pkey", ["id"], { unique: true })
@Entity("growth_rate", { schema: "public" })
export class GrowthRate {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("character varying", { name: "nome", nullable: true })
  nome: string | null;

  @Column("int4", { name: "levels", nullable: true, array: true })
  levels: number[] | null;

  @Column("character varying", { name: "formula", nullable: true })
  formula: string | null;

}
