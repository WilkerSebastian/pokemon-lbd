import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Pokemon } from "./Pokemon";
import { Tipo } from "./Tipo";

@Entity("pokemon_tipo", { schema: "public" })
export class PokemonTipo {
  @PrimaryColumn("integer", { generated: "increment", name: "id" })
  id: number;
  
  @ManyToOne(() => Pokemon, (pokemon) => pokemon.id)
  @JoinColumn([{ name: "pokemon_id", referencedColumnName: "id" }])
  pokemon: Pokemon;

  @ManyToOne(() => Tipo, (tipo) => tipo.id)
  @JoinColumn([{ name: "tipo_id", referencedColumnName: "id" }])
  tipo: Tipo;
}
