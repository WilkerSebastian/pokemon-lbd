import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Movimento } from "./Movimento";
import { Pokemon } from "./Pokemon";

@Entity("aprende", { schema: "public" })
export class Aprende {
  @PrimaryColumn("integer", { generated: "increment", name: "id" })
  id: number;

  @Column("integer", { name: "level_learned_at", nullable: true })
  levelLearnedAt: number | null;

  @Column("character varying", { name: "metodo", nullable: true, length: 50 })
  metodo: string | null;

  @Column("character varying", {
    name: "version_group",
    nullable: true,
    length: 50,
  })
  versionGroup: string | null;

  @ManyToOne(() => Movimento, (movimento) => movimento.id)
  @JoinColumn([{ name: "move_id", referencedColumnName: "id" }])
  move: Movimento;

  @ManyToOne(() => Pokemon, (pokemon) => pokemon.id)
  @JoinColumn([{ name: "pokemon_id", referencedColumnName: "id" }])
  pokemon: Pokemon;
}
