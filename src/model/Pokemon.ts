import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Aprende } from "./Aprende";
import { Encounter } from "./Encounter";
import { ItemSegurado } from "./ItemSegurado";
import { Especie } from "./Especie";
import { PokemonHabilidade } from "./PokemonHabilidade";
import { PokemonHabilidadeAntiga } from "./PokemonHabilidadeAntiga";
import { PokemonStat } from "./PokemonStat";
import { PokemonTipo } from "./PokemonTipo";
import { PokemonTipoAntigo } from "./PokemonTipoAntigo";
import { SpritePokemon } from "./SpritePokemon";

@Index("pokemon_pkey", ["id"], { unique: true })
@Entity("pokemon", { schema: "public" })
export class Pokemon {
  @Column("character varying", { name: "nome", nullable: true, length: 50 })
  nome: string | null;

  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("integer", { name: "base_experience", nullable: true })
  baseExperience: number | null;

  @Column("boolean", { name: "is_default", nullable: true })
  isDefault: boolean | null;

  @Column("integer", { name: "peso", nullable: true })
  peso: number | null;

  @Column("integer", { name: "altura", nullable: true })
  altura: number | null;

  @Column("integer", { name: "ordem", nullable: true })
  ordem: number | null;

  @Column("text", { name: "latest_cry", nullable: true })
  latestCry: string | null;

  @Column("text", { name: "legacy_cry", nullable: true })
  legacyCry: string | null;

  @OneToMany(() => Aprende, (aprende) => aprende.pokemon)
  aprendes: Aprende[];

  @OneToMany(() => Encounter, (encounter) => encounter.pokemon)
  encounters: Encounter[];

  @OneToMany(() => ItemSegurado, (itemSegurado) => itemSegurado.pokemon)
  itemSegurados: ItemSegurado[];

  @ManyToOne(() => Especie, (especie) => especie.pokemon)
  @JoinColumn([{ name: "especie_id", referencedColumnName: "id" }])
  especie: Especie;

  @OneToMany(
    () => PokemonHabilidade,
    (pokemonHabilidade) => pokemonHabilidade.pokemon
  )
  pokemonHabilidades: PokemonHabilidade[];

  @OneToMany(
    () => PokemonHabilidadeAntiga,
    (pokemonHabilidadeAntiga) => pokemonHabilidadeAntiga.pokemon
  )
  pokemonHabilidadeAntigas: PokemonHabilidadeAntiga[];

  @OneToMany(() => PokemonStat, (pokemonStat) => pokemonStat.pokemon)
  pokemonStats: PokemonStat[];

  @OneToMany(() => PokemonTipo, (pokemonTipo) => pokemonTipo.pokemon)
  pokemonTipos: PokemonTipo[];

  @OneToMany(
    () => PokemonTipoAntigo,
    (pokemonTipoAntigo) => pokemonTipoAntigo.pokemon
  )
  pokemonTipoAntigos: PokemonTipoAntigo[];

  @OneToMany(() => SpritePokemon, (spritePokemon) => spritePokemon.pokemon)
  spritePokemon: SpritePokemon[];
}
