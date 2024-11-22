import { Column, Entity, Index, OneToMany } from "typeorm";
import { HabilidadeEffectEntry } from "./HabilidadeEffectEntry";
import { HabilidadeFlavorTextEntry } from "./HabilidadeFlavorTextEntry";
import { PokemonHabilidade } from "./PokemonHabilidade";
import { PokemonHabilidadeAntiga } from "./PokemonHabilidadeAntiga";

@Index("habilidade_pkey", ["id"], { unique: true })
@Entity("habilidade", { schema: "public" })
export class Habilidade {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("character varying", { name: "nome", nullable: true, length: 50 })
  nome: string | null;

  @Column("character varying", {
    name: "generation",
    nullable: true,
    length: 50,
  })
  generation: string | null;

  @Column("boolean", { name: "is_main_series", nullable: true })
  isMainSeries: boolean | null;

  @OneToMany(
    () => HabilidadeEffectEntry,
    (habilidadeEffectEntry) => habilidadeEffectEntry.habilidade
  )
  habilidadeEffectEntries: HabilidadeEffectEntry[];

  @OneToMany(
    () => HabilidadeFlavorTextEntry,
    (habilidadeFlavorTextEntry) => habilidadeFlavorTextEntry.habilidade
  )
  habilidadeFlavorTextEntries: HabilidadeFlavorTextEntry[];

  @OneToMany(
    () => PokemonHabilidade,
    (pokemonHabilidade) => pokemonHabilidade.habilidade
  )
  pokemonHabilidades: PokemonHabilidade[];

  @OneToMany(
    () => PokemonHabilidadeAntiga,
    (pokemonHabilidadeAntiga) => pokemonHabilidadeAntiga.habilidade
  )
  pokemonHabilidadeAntigas: PokemonHabilidadeAntiga[];
}
