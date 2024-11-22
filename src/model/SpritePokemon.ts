import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Pokemon } from "./Pokemon";

@Entity("sprite_pokemon", { schema: "public" })
export class SpritePokemon {
  @PrimaryColumn("integer", {generated: "increment", name: "id" })
  id: number

  @Column("text", { name: "back_default", nullable: true })
  backDefault: string | null;

  @Column("text", { name: "back_female", nullable: true })
  backFemale: string | null;

  @Column("text", { name: "back_shiny", nullable: true })
  backShiny: string | null;

  @Column("text", { name: "back_shiny_female", nullable: true })
  backShinyFemale: string | null;

  @Column("text", { name: "front_default", nullable: true })
  frontDefault: string | null;

  @Column("text", { name: "front_shiny", nullable: true })
  frontShiny: string | null;

  @Column("text", { name: "front_female", nullable: true })
  frontFemale: string | null;

  @Column("text", { name: "front_shiny_female", nullable: true })
  frontShinyFemale: string | null;

  @ManyToOne(() => Pokemon, (pokemon) => pokemon.id)
  @JoinColumn([{ name: "pokemon_id", referencedColumnName: "id" }])
  pokemon: Pokemon;
}
