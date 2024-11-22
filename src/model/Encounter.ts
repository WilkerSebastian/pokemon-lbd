import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Area } from "./Area";
import { Pokemon } from "./Pokemon";
import { EncounterCondition } from "./EncounterCondition";

@Index("encounter_pkey", ["id"], { unique: true })
@Entity("encounter", { schema: "public" })
export class Encounter {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("integer", { name: "min_level", nullable: true })
  minLevel: number | null;

  @Column("integer", { name: "max_level", nullable: true })
  maxLevel: number | null;

  @Column("integer", { name: "chance", nullable: true })
  chance: number | null;

  @Column("character varying", { name: "metodo", nullable: true, length: 50 })
  metodo: string | null;

  @Column("character varying", { name: "version", nullable: true, length: 50 })
  version: string | null;

  @Column("integer", { name: "max_chance", nullable: true })
  maxChance: number | null;

  @ManyToOne(() => Area, (area) => area.encounters)
  @JoinColumn([{ name: "area_id", referencedColumnName: "id" }])
  area: Area;

  @ManyToOne(() => Pokemon, (pokemon) => pokemon.encounters)
  @JoinColumn([{ name: "pokemon_id", referencedColumnName: "id" }])
  pokemon: Pokemon;

  @OneToMany(
    () => EncounterCondition,
    (encounterCondition) => encounterCondition.encounter
  )
  encounterConditions: EncounterCondition[];
}
