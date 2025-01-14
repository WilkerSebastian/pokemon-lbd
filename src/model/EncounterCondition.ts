import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Encounter } from "./Encounter";

@Index("encounter_condition_pkey", ["condition", "encounterId"], {
  unique: true,
})
@Entity("encounter_condition", { schema: "public" })
export class EncounterCondition {
  @Column("integer", { primary: true, name: "encounter_id" })
  encounterId: number;

  @Column("character varying", { primary: true, name: "condition" })
  condition: string;

  @ManyToOne(() => Encounter, (encounter) => encounter.id)
  @JoinColumn([{ name: "encounter_id", referencedColumnName: "id" }])
  encounter: Encounter;
}
