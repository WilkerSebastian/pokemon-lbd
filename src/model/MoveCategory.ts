import { Column, Entity, Index, PrimaryColumn } from "typeorm";

@Index("move_category_pkey", ["nome"], { unique: true })
@Entity("move_category", { schema: "public" })
export class MoveCategory {
  @PrimaryColumn("integer", { name: "id" })
  id: number;

  @Column("character varying", { primary: true, name: "nome" })
  nome: string;

  @Column("text", { name: "descricao", nullable: true })
  descricao: string | null;
}
