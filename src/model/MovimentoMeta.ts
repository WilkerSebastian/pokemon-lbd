import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Movimento } from "./Movimento";

@Entity("movimento_meta", { schema: "public" })
export class MovimentoMeta {
  @PrimaryColumn("integer", { generated: "increment", name: "id" })
  id: number;

  @Column("character varying", { name: "ailment", nullable: true, length: 50 })
  ailment: string | null;

  @Column("integer", { name: "crit_rate", nullable: true })
  critRate: number | null;

  @Column("integer", { name: "drain", nullable: true })
  drain: number | null;

  @Column("integer", { name: "flinch_chance", nullable: true })
  flinchChance: number | null;

  @Column("integer", { name: "healing", nullable: true })
  healing: number | null;

  @Column("integer", { name: "max_hits", nullable: true })
  maxHits: number | null;

  @Column("integer", { name: "min_hits", nullable: true })
  minHits: number | null;

  @Column("integer", { name: "max_turns", nullable: true })
  maxTurns: number | null;

  @Column("integer", { name: "stat_chance", nullable: true })
  statChance: number | null;

  @Column("character varying", { name: "category", nullable: true, length: 50 })
  category: string | null;

  @ManyToOne(() => Movimento, (movimento) => movimento.id)
  @JoinColumn([{ name: "movimento_id", referencedColumnName: "id" }])
  movimento: Movimento;
}
