import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { Especie } from "./Especie";

@Index("pokemon_pkey", ["id"], { unique: true })
@Entity("pokemon", { schema: "public" })
export class Pokemon {
  @Column("character varying", { name: "nome", nullable: true })
  nome: string | null;

  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("integer", { name: "base_experience", nullable: true })
  baseExperience: number | null;

  @Column("boolean", { name: "is_default", nullable: true })
  isDefault: boolean | null;

  @Column("integer", { name: "peso", nullable: true })
  peso: number | null;

  @Column("integer", { name: "altura", nullable: true })
  altura: number | null;

  @Column("integer", { name: "ordem", nullable: true })
  ordem: number | null;

  @Column("text", { name: "latest_cry", nullable: true })
  latestCry: string | null;

  @Column("text", { name: "legacy_cry", nullable: true })
  legacyCry: string | null;

  @ManyToOne(() => Especie, (especie) => especie.id)
  @JoinColumn([{ name: "especie_id", referencedColumnName: "id" }])
  especie: Especie;

}
