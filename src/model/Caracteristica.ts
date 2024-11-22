import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Stat } from "./Stat";

@Entity("caracteristica", { schema: "public" })
export class Caracteristica {
  @PrimaryColumn("integer", { generated: "increment", name: "id" })
  id: number;
  
  @Column("text", { name: "descricao", nullable: true })
  descricao: string | null;

  @Column("integer", { name: "gene_modulo", nullable: true })
  geneModulo: number | null;

  @Column("int4", { name: "possible_values", nullable: true, array: true })
  possibleValues: number[] | null;

  @ManyToOne(() => Stat, (stat) => stat.id)
  @JoinColumn([{ name: "stat_id", referencedColumnName: "id" }])
  stat: Stat;
}
