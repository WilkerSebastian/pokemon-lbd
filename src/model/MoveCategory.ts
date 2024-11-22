import { Column, Entity, Index } from "typeorm";

@Index("move_category_pkey", ["nome"], { unique: true })
@Entity("move_category", { schema: "public" })
export class MoveCategory {
  @Column("character varying", { primary: true, name: "nome", length: 50 })
  nome: string;

  @Column("text", { name: "descricao", nullable: true })
  descricao: string | null;
}
