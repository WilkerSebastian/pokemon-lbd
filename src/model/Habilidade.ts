import { Column, Entity, Index } from "typeorm";

@Index("habilidade_pkey", ["id"], { unique: true })
@Entity("habilidade", { schema: "public" })
export class Habilidade {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("character varying", { name: "nome", nullable: true, length: 50 })
  nome: string | null;

  @Column("character varying", {
    name: "generation",
    nullable: true,
  })
  generation: string | null;

  @Column("boolean", { name: "is_main_series", nullable: true })
  isMainSeries: boolean | null;
  
}
