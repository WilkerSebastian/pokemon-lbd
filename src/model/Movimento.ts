import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { ContestEffect } from "./ContestEffect";
import { MoveDamageClass } from "./MoveDamageClass";
import { MoveTarget } from "./MoveTarget";
import { Tipo } from "./Tipo";

@Index("movimento_pkey", ["id"], { unique: true })
@Entity("movimento", { schema: "public" })
export class Movimento {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("character varying", { name: "nome", nullable: true, length: 50 })
  nome: string | null;

  @Column("integer", { name: "accuracy", nullable: true })
  accuracy: number | null;

  @Column("integer", { name: "priority", nullable: true })
  priority: number | null;

  @Column("integer", { name: "pp", nullable: true })
  pp: number | null;

  @Column("integer", { name: "power", nullable: true })
  power: number | null;

  @Column("integer", { name: "effect_chance", nullable: true })
  effectChance: number | null;

  @Column("character varying", {
    name: "contest_type",
    nullable: true,
    length: 50,
  })
  contestType: string | null;

  @Column("character varying", {
    name: "generation",
    nullable: true,
    length: 50,
  })
  generation: string | null;

  @ManyToOne(() => ContestEffect, (contestEffect) => contestEffect.id, {nullable: true})
  @JoinColumn([{ name: "contest_effect", referencedColumnName: "id" }])
  contestEffect: ContestEffect | null;

  @ManyToOne(
    () => MoveDamageClass,
    (moveDamageClass) => moveDamageClass.nome
  )
  @JoinColumn([{ name: "damage_class", referencedColumnName: "nome" }])
  damageClass: MoveDamageClass;

  @ManyToOne(() => MoveTarget, (moveTarget) => moveTarget.nome)
  @JoinColumn([{ name: "target", referencedColumnName: "nome" }])
  target: MoveTarget;

  @ManyToOne(() => Tipo, (tipo) => tipo.id)
  @JoinColumn([{ name: "tipo_id", referencedColumnName: "id" }])
  tipo: Tipo;

}
