import { Column, Entity, Index } from "typeorm";

@Index("move_target_pkey", ["nome"], { unique: true })
@Entity("move_target", { schema: "public" })
export class MoveTarget {
  @Column("character varying", { primary: true, name: "nome", length: 50 })
  nome: string;

  @Column("text", { name: "descricao", nullable: true })
  descricao: string | null;
}
