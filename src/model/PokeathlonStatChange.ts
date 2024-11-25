import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Nature } from "./Nature";

@Index("pokeathlon_stat_change_pkey", ["natureId", "stat"], { unique: true })
@Entity("pokeathlon_stat_change", { schema: "public" })
export class PokeathlonStatChange {
  @Column("integer", { primary: true, name: "nature_id" })
  natureId: number;

  @Column("character varying", { primary: true, name: "stat" })
  stat: string;

  @Column("integer", { name: "max_change", nullable: true })
  maxChange: number | null;

  @ManyToOne(() => Nature, (nature) => nature.id)
  @JoinColumn([{ name: "nature_id", referencedColumnName: "id" }])
  nature: Nature;
}
