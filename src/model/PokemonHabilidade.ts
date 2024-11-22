import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Habilidade } from "./Habilidade";
import { Pokemon } from "./Pokemon";

@Entity("pokemon_habilidade", { schema: "public" })
export class PokemonHabilidade {
  @PrimaryColumn("integer", { generated: "increment", name: "id" })
  id: number;

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

  @ManyToOne(() => Habilidade, (habilidade) => habilidade.id)
  @JoinColumn([{ name: "habilidade_id", referencedColumnName: "id" }])
  habilidade: Habilidade;

  @ManyToOne(() => Pokemon, (pokemon) => pokemon.id)
  @JoinColumn([{ name: "pokemon_id", referencedColumnName: "id" }])
  pokemon: Pokemon;
}
