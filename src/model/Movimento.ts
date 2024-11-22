import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Aprende } from "./Aprende";
import { ContestCombo } from "./ContestCombo";
import { Evolucao } from "./Evolucao";
import { Machine } from "./Machine";
import { Modifica } from "./Modifica";
import { MoveEffectEntry } from "./MoveEffectEntry";
import { MoveFlavorTextEntry } from "./MoveFlavorTextEntry";
import { ContestEffect } from "./ContestEffect";
import { MoveDamageClass } from "./MoveDamageClass";
import { MoveTarget } from "./MoveTarget";
import { Tipo } from "./Tipo";
import { MovimentoMeta } from "./MovimentoMeta";
import { MovimentoPastValues } from "./MovimentoPastValues";

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

  @OneToMany(() => Aprende, (aprende) => aprende.move)
  aprendes: Aprende[];

  @OneToMany(() => ContestCombo, (contestCombo) => contestCombo.firstMove)
  contestCombos: ContestCombo[];

  @OneToMany(() => ContestCombo, (contestCombo) => contestCombo.secondMove)
  contestCombos2: ContestCombo[];

  @OneToMany(() => Evolucao, (evolucao) => evolucao.knownMove)
  evolucaos: Evolucao[];

  @OneToMany(() => Machine, (machine) => machine.movimento)
  machines: Machine[];

  @OneToMany(() => Modifica, (modifica) => modifica.movimento)
  modificas: Modifica[];

  @OneToMany(() => MoveEffectEntry, (moveEffectEntry) => moveEffectEntry.move)
  moveEffectEntries: MoveEffectEntry[];

  @OneToMany(
    () => MoveFlavorTextEntry,
    (moveFlavorTextEntry) => moveFlavorTextEntry.move
  )
  moveFlavorTextEntries: MoveFlavorTextEntry[];

  @ManyToOne(() => ContestEffect, (contestEffect) => contestEffect.movimentos)
  @JoinColumn([{ name: "contest_effect", referencedColumnName: "id" }])
  contestEffect: ContestEffect;

  @ManyToOne(
    () => MoveDamageClass,
    (moveDamageClass) => moveDamageClass.movimentos
  )
  @JoinColumn([{ name: "damage_class", referencedColumnName: "nome" }])
  damageClass: MoveDamageClass;

  @ManyToOne(() => MoveTarget, (moveTarget) => moveTarget.movimentos)
  @JoinColumn([{ name: "target", referencedColumnName: "nome" }])
  target: MoveTarget;

  @ManyToOne(() => Tipo, (tipo) => tipo.movimentos)
  @JoinColumn([{ name: "tipo_id", referencedColumnName: "id" }])
  tipo: Tipo;

  @OneToMany(() => MovimentoMeta, (movimentoMeta) => movimentoMeta.movimento)
  movimentoMetas: MovimentoMeta[];

  @OneToMany(
    () => MovimentoPastValues,
    (movimentoPastValues) => movimentoPastValues.movimento
  )
  movimentoPastValues: MovimentoPastValues[];
}
