import { Column, Entity, Index, OneToMany } from "typeorm";
import { Catalogo } from "./Catalogo";

@Index("pokedex_pkey", ["id"], { unique: true })
@Entity("pokedex", { schema: "public" })
export class Pokedex {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("character varying", { name: "nome", nullable: true, length: 50 })
  nome: string | null;

  @Column("boolean", { name: "is_main_series", nullable: true })
  isMainSeries: boolean | null;

  @Column("character varying", { name: "region", nullable: true, length: 50 })
  region: string | null;

  @Column("text", { name: "descricao", nullable: true })
  descricao: string | null;

  @OneToMany(() => Catalogo, (catalogo) => catalogo.pokedex)
  catalogos: Catalogo[];
}
