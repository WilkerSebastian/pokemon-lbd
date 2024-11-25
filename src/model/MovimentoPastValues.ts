import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Movimento } from "./Movimento";

@Entity("movimento_past_values", { schema: "public" })
export class MovimentoPastValues {
  @PrimaryColumn("integer", { generated: "increment", name: "id" })
  id: number;
  
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

  @Column("character varying", { name: "nome", nullable: true })
  versionGroup: string | null;

  @ManyToOne(() => Movimento, (movimento) => movimento.id)
  @JoinColumn([{ name: "movimento_id", referencedColumnName: "id" }])
  movimento: Movimento;
}
