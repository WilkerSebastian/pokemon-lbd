import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { Area } from "./Area";
import { Pokemon } from "./Pokemon";

@Index("encounter_pkey", ["id"], { unique: true })
@Entity("encounter", { schema: "public" })
export class Encounter {
  @PrimaryColumn("integer", {generated: true, name: "id"})
  id: number;

  @Column("integer", { name: "min_level", nullable: true })
  minLevel: number | null;

  @Column("integer", { name: "max_level", nullable: true })
  maxLevel: number | null;

  @Column("integer", { name: "chance", nullable: true })
  chance: number | null;

  @Column("character varying", { name: "metodo", nullable: true })
  metodo: string | null;

  @Column("character varying", { name: "version", nullable: true })
  version: string | null;

  @Column("integer", { name: "max_chance", nullable: true })
  maxChance: number | null;

  @ManyToOne(() => Area, (area) => area.id)
  @JoinColumn([{ name: "area_id", referencedColumnName: "id" }])
  area: Area;

  @ManyToOne(() => Pokemon, (pokemon) => pokemon.id)
  @JoinColumn([{ name: "pokemon_id", referencedColumnName: "id" }])
  pokemon: Pokemon;

}
