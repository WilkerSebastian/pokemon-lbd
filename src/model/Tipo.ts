import { Column, Entity, Index, OneToMany } from "typeorm";
import { Evolucao } from "./Evolucao";
import { Movimento } from "./Movimento";
import { PokemonTipo } from "./PokemonTipo";
import { PokemonTipoAntigo } from "./PokemonTipoAntigo";
import { TipoEfetividade } from "./TipoEfetividade";

@Index("tipo_pkey", ["id"], { unique: true })
@Entity("tipo", { schema: "public" })
export class Tipo {
  @Column("character varying", { name: "nome", nullable: true, length: 50 })
  nome: string | null;

  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("character varying", {
    name: "move_damage_class",
    nullable: true,
    length: 50,
  })
  moveDamageClass: string | null;

  @Column("character varying", {
    name: "generation",
    nullable: true,
    length: 50,
  })
  generation: string | null;

  @OneToMany(() => Evolucao, (evolucao) => evolucao.knownMoveType)
  evolucaos: Evolucao[];

  @OneToMany(() => Evolucao, (evolucao) => evolucao.partyType)
  evolucaos2: Evolucao[];

  @OneToMany(() => Movimento, (movimento) => movimento.tipo)
  movimentos: Movimento[];

  @OneToMany(() => PokemonTipo, (pokemonTipo) => pokemonTipo.tipo)
  pokemonTipos: PokemonTipo[];

  @OneToMany(
    () => PokemonTipoAntigo,
    (pokemonTipoAntigo) => pokemonTipoAntigo.tipo
  )
  pokemonTipoAntigos: PokemonTipoAntigo[];

  @OneToMany(
    () => TipoEfetividade,
    (tipoEfetividade) => tipoEfetividade.tipoAlvo
  )
  tipoEfetividades: TipoEfetividade[];

  @OneToMany(
    () => TipoEfetividade,
    (tipoEfetividade) => tipoEfetividade.tipoAtancante
  )
  tipoEfetividades2: TipoEfetividade[];
}
