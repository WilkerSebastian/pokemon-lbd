import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Pokemon } from "./Pokemon";
import { Tipo } from "./Tipo";

@Entity("pokemon_tipo_antigo", { schema: "public" })
export class PokemonTipoAntigo {
  @PrimaryColumn("integer", { generated: "increment", name: "id" })
  id: number

  @Column("character varying", {
    name: "generation",
    nullable: true,
    length: 50,
  })
  generation: string | null;

  @ManyToOne(() => Pokemon, (pokemon) => pokemon.id)
  @JoinColumn([{ name: "pokemon_id", referencedColumnName: "id" }])
  pokemon: Pokemon;

  @ManyToOne(() => Tipo, (tipo) => tipo.id)
  @JoinColumn([{ name: "tipo_id", referencedColumnName: "id" }])
  tipo: Tipo;
}
