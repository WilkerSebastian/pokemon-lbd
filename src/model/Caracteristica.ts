import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Stat } from "./Stat";

@Entity("caracteristica", { schema: "public" })
export class Caracteristica {
  @Column("text", { name: "descricao", nullable: true })
  descricao: string | null;

  @Column("integer", { name: "gene_modulo", nullable: true })
  geneModulo: number | null;

  @Column("int4", { name: "possible_values", nullable: true, array: true })
  possibleValues: number[] | null;

  @ManyToOne(() => Stat, (stat) => stat.caracteristicas)
  @JoinColumn([{ name: "stat_id", referencedColumnName: "id" }])
  stat: Stat;
}
