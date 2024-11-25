import { Column, Entity, Index, PrimaryColumn } from "typeorm";

@Index("pokedex_pkey", ["id"], { unique: true })
@Entity("pokedex", { schema: "public" })
export class Pokedex {
  @PrimaryColumn()
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("character varying", { name: "nome", nullable: true })
  nome: string | null;

  @Column("boolean", { name: "is_main_series", nullable: true })
  isMainSeries: boolean | null;

  @Column("character varying", { name: "region", nullable: true })
  region: string | null;

  @Column("text", { name: "descricao", nullable: true })
  descricao: string | null;

}
