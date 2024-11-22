import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Stat } from "./Stat";
import { Pokemon } from "./Pokemon";

@Entity("pokemon_stat", { schema: "public" })
export class PokemonStat {
  @Column("integer", { name: "base_sat", nullable: true })
  baseSat: number | null;

  @Column("integer", { name: "effort", nullable: true })
  effort: number | null;

  @ManyToOne(() => Stat, (stat) => stat.pokemonStats)
  @JoinColumn([{ name: "stat_id", referencedColumnName: "id" }])
  stat: Stat;

  @ManyToOne(() => Pokemon, (pokemon) => pokemon.pokemonStats)
  @JoinColumn([{ name: "pokemon_id", referencedColumnName: "id" }])
  pokemon: Pokemon;
}
