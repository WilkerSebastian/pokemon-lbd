import { Entity, JoinColumn, ManyToOne } from "typeorm";
import { Pokemon } from "./Pokemon";
import { Tipo } from "./Tipo";

@Entity("pokemon_tipo", { schema: "public" })
export class PokemonTipo {
  @ManyToOne(() => Pokemon, (pokemon) => pokemon.pokemonTipos)
  @JoinColumn([{ name: "pokemon_id", referencedColumnName: "id" }])
  pokemon: Pokemon;

  @ManyToOne(() => Tipo, (tipo) => tipo.pokemonTipos)
  @JoinColumn([{ name: "tipo_id", referencedColumnName: "id" }])
  tipo: Tipo;
}
