import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Habilidade } from "./Habilidade";
import { Pokemon } from "./Pokemon";

@Entity("pokemon_habilidade_antiga", { schema: "public" })
export class PokemonHabilidadeAntiga {
  @Column("character varying", {
    name: "generation",
    nullable: true,
    length: 50,
  })
  generation: string | null;

  @Column("boolean", { name: "is_hidden", nullable: true })
  isHidden: boolean | null;

  @Column("integer", { name: "slot", nullable: true })
  slot: number | null;

  @ManyToOne(
    () => Habilidade,
    (habilidade) => habilidade.pokemonHabilidadeAntigas
  )
  @JoinColumn([{ name: "habilidade_id", referencedColumnName: "id" }])
  habilidade: Habilidade;

  @ManyToOne(() => Pokemon, (pokemon) => pokemon.pokemonHabilidadeAntigas)
  @JoinColumn([{ name: "pokemon_id", referencedColumnName: "id" }])
  pokemon: Pokemon;
}
