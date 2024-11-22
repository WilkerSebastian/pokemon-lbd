import { Column, Entity, Index } from "typeorm";

@Index("atributo_pkey", ["id"], { unique: true })
@Entity("atributo", { schema: "public" })
export class Atributo {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("character varying", { name: "nome", nullable: true, length: 50 })
  nome: string | null;

  @Column("text", { name: "descricao", nullable: true })
  descricao: string | null;
}
