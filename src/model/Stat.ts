import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { MoveDamageClass } from "./MoveDamageClass";

@Index("stat_pkey", ["id"], { unique: true })
@Entity("stat", { schema: "public" })
export class Stat {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("character varying", { name: "nome", nullable: true })
  nome: string | null;

  @Column("boolean", { name: "is_battle_only", nullable: true })
  isBattleOnly: boolean | null;

  @Column("integer", { name: "game_index", nullable: true })
  gameIndex: number | null;

  @ManyToOne(() => MoveDamageClass, (moveDamageClass) => moveDamageClass.nome)
  @JoinColumn([{ name: "damage_class", referencedColumnName: "nome" }])
  damageClass: MoveDamageClass;
}
