import { Column, Entity, Index, OneToMany } from "typeorm";
import { Movimento } from "./Movimento";
import { Stat } from "./Stat";

@Index("move_damage_class_pkey", ["nome"], { unique: true })
@Entity("move_damage_class", { schema: "public" })
export class MoveDamageClass {
  @Column("character varying", { primary: true, name: "nome", length: 50 })
  nome: string;

  @Column("character varying", {
    name: "descricao",
    nullable: true,
    length: 50,
  })
  descricao: string | null;

  @OneToMany(() => Movimento, (movimento) => movimento.damageClass)
  movimentos: Movimento[];

  @OneToMany(() => Stat, (stat) => stat.damageClass)
  stats: Stat[];
}
