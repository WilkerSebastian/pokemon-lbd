import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Pokemon } from "./Pokemon";
import { Tipo } from "./Tipo";

@Entity("pokemon_tipo_antigo", { schema: "public" })
export class PokemonTipoAntigo {
  @Column("character varying", {
    name: "generation",
    nullable: true,
    length: 50,
  })
  generation: string | null;

  @ManyToOne(() => Pokemon, (pokemon) => pokemon.pokemonTipoAntigos)
  @JoinColumn([{ name: "pokemon_id", referencedColumnName: "id" }])
  pokemon: Pokemon;

  @ManyToOne(() => Tipo, (tipo) => tipo.pokemonTipoAntigos)
  @JoinColumn([{ name: "tipo_id", referencedColumnName: "id" }])
  tipo: Tipo;
}
