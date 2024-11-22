import { Column, Entity, Index, OneToMany } from "typeorm";
import { Movimento } from "./Movimento";

@Index("move_target_pkey", ["nome"], { unique: true })
@Entity("move_target", { schema: "public" })
export class MoveTarget {
  @Column("character varying", { primary: true, name: "nome", length: 50 })
  nome: string;

  @Column("text", { name: "descricao", nullable: true })
  descricao: string | null;

  @OneToMany(() => Movimento, (movimento) => movimento.target)
  movimentos: Movimento[];
}
