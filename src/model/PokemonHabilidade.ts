import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Habilidade } from "./Habilidade";
import { Pokemon } from "./Pokemon";

@Entity("pokemon_habilidade", { schema: "public" })
export class PokemonHabilidade {
  @Column("character varying", {
    name: "version_group",
    nullable: true,
    length: 50,
  })
  versionGroup: string | null;

  @Column("integer", { name: "slot", nullable: true })
  slot: number | null;

  @Column("boolean", { name: "is_hidden", nullable: true })
  isHidden: boolean | null;

  @ManyToOne(() => Habilidade, (habilidade) => habilidade.pokemonHabilidades)
  @JoinColumn([{ name: "habilidade_id", referencedColumnName: "id" }])
  habilidade: Habilidade;

  @ManyToOne(() => Pokemon, (pokemon) => pokemon.pokemonHabilidades)
  @JoinColumn([{ name: "pokemon_id", referencedColumnName: "id" }])
  pokemon: Pokemon;
}
