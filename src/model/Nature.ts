import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { BattleStylePreference } from "./BattleStylePreference";
import { Flavor } from "./Flavor";
import { Stat } from "./Stat";
import { PokeathlonStatChange } from "./PokeathlonStatChange";

@Index("nature_pkey", ["id"], { unique: true })
@Entity("nature", { schema: "public" })
export class Nature {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("character varying", { name: "nome", nullable: true, length: 50 })
  nome: string | null;

  @ManyToOne(() => Flavor, (flavor) => flavor.id)
  @JoinColumn([{ name: "likes_flavor_id", referencedColumnName: "id" }])
  likesFlavor: Flavor;

  @ManyToOne(() => Stat, (stat) => stat.id)
  @JoinColumn([{ name: "stat_aumentado_id", referencedColumnName: "id" }])
  statAumentado: Stat;

  @ManyToOne(() => Stat, (stat) => stat.id)
  @JoinColumn([{ name: "stat_diminuido_id", referencedColumnName: "id" }])
  statDiminuido: Stat;

}
