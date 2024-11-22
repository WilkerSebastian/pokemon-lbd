import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Movimento } from "./Movimento";

@Entity("movimento_past_values", { schema: "public" })
export class MovimentoPastValues {
  @Column("integer", { name: "accuracy", nullable: true })
  accuracy: number | null;

  @Column("integer", { name: "power", nullable: true })
  power: number | null;

  @Column("integer", { name: "pp", nullable: true })
  pp: number | null;

  @Column("integer", { name: "effect_chance", nullable: true })
  effectChance: number | null;

  @Column("integer", { name: "tipo_id", nullable: true })
  tipoId: number | null;

  @Column("integer", { name: "version_group", nullable: true })
  versionGroup: number | null;

  @ManyToOne(() => Movimento, (movimento) => movimento.movimentoPastValues)
  @JoinColumn([{ name: "movimento_id", referencedColumnName: "id" }])
  movimento: Movimento;
}
