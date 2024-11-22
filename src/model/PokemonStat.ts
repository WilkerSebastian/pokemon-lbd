import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Stat } from "./Stat";
import { Pokemon } from "./Pokemon";

@Entity("pokemon_stat", { schema: "public" })
export class PokemonStat {
  @PrimaryColumn("integer", { generated: "increment", name: "id" })
  id: number;
  
  @Column("integer", { name: "base_sat", nullable: true })
  baseSat: number | null;

  @Column("integer", { name: "effort", nullable: true })
  effort: number | null;

  @ManyToOne(() => Stat, (stat) => stat.id)
  @JoinColumn([{ name: "stat_id", referencedColumnName: "id" }])
  stat: Stat;

  @ManyToOne(() => Pokemon, (pokemon) => pokemon.id)
  @JoinColumn([{ name: "pokemon_id", referencedColumnName: "id" }])
  pokemon: Pokemon;
}
