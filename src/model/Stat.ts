import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Caracteristica } from "./Caracteristica";
import { Modifica } from "./Modifica";
import { Nature } from "./Nature";
import { PokemonStat } from "./PokemonStat";
import { MoveDamageClass } from "./MoveDamageClass";

@Index("stat_pkey", ["id"], { unique: true })
@Entity("stat", { schema: "public" })
export class Stat {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("character varying", { name: "nome", nullable: true, length: 50 })
  nome: string | null;

  @Column("boolean", { name: "is_battle_only", nullable: true })
  isBattleOnly: boolean | null;

  @Column("integer", { name: "game_index", nullable: true })
  gameIndex: number | null;

  @OneToMany(() => Caracteristica, (caracteristica) => caracteristica.stat)
  caracteristicas: Caracteristica[];

  @OneToMany(() => Modifica, (modifica) => modifica.stat)
  modificas: Modifica[];

  @OneToMany(() => Nature, (nature) => nature.statAumentado)
  natures: Nature[];

  @OneToMany(() => Nature, (nature) => nature.statDiminuido)
  natures2: Nature[];

  @OneToMany(() => PokemonStat, (pokemonStat) => pokemonStat.stat)
  pokemonStats: PokemonStat[];

  @ManyToOne(() => MoveDamageClass, (moveDamageClass) => moveDamageClass.stats)
  @JoinColumn([{ name: "damage_class", referencedColumnName: "nome" }])
  damageClass: MoveDamageClass;
}
