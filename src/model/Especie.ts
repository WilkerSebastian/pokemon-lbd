import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Catalogo } from "./Catalogo";
import { EggGroup } from "./EggGroup";
import { GrowthRate } from "./GrowthRate";
import { EspecieFlavorText } from "./EspecieFlavorText";
import { Evolucao } from "./Evolucao";
import { Genero } from "./Genero";
import { PalParkEncounter } from "./PalParkEncounter";
import { Pokemon } from "./Pokemon";

@Index("especie_pkey", ["id"], { unique: true })
@Entity("especie", { schema: "public" })
export class Especie {
  @Column("character varying", { name: "nome", nullable: true, length: 50 })
  nome: string | null;

  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("integer", { name: "base_happiness", nullable: true })
  baseHappiness: number | null;

  @Column("integer", { name: "capture_rate", nullable: true })
  captureRate: number | null;

  @Column("integer", { name: "gender_rate", nullable: true })
  genderRate: number | null;

  @Column("integer", { name: "ordem", nullable: true })
  ordem: number | null;

  @Column("integer", { name: "hatch_counter", nullable: true })
  hatchCounter: number | null;

  @Column("character varying", { name: "cor", nullable: true, length: 50 })
  cor: string | null;

  @Column("character varying", { name: "habitat", nullable: true, length: 50 })
  habitat: string | null;

  @Column("character varying", {
    name: "generation",
    nullable: true,
    length: 50,
  })
  generation: string | null;

  @Column("character varying", { name: "formato", nullable: true, length: 50 })
  formato: string | null;

  @Column("boolean", { name: "has_gender_differences", nullable: true })
  hasGenderDifferences: boolean | null;

  @Column("boolean", { name: "is_baby", nullable: true })
  isBaby: boolean | null;

  @Column("boolean", { name: "is_mythical", nullable: true })
  isMythical: boolean | null;

  @Column("boolean", { name: "is_legendary", nullable: true })
  isLegendary: boolean | null;

  @Column("boolean", { name: "forms_switchable", nullable: true })
  formsSwitchable: boolean | null;

  @Column("integer", { name: "especie_flavor_text_id", nullable: true })
  especieFlavorTextId: number | null;

  @ManyToOne(() => GrowthRate, (growthRate) => growthRate.id)
  @JoinColumn([{ name: "growth_rate_id", referencedColumnName: "id" }])
  growthRate: GrowthRate;

}
