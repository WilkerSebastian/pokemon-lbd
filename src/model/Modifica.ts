import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Movimento } from "./Movimento";
import { Stat } from "./Stat";

@Entity("modifica", { schema: "public" })
export class Modifica {
  @Column("integer", { name: "change", nullable: true })
  change: number | null;

  @ManyToOne(() => Movimento, (movimento) => movimento.modificas)
  @JoinColumn([{ name: "movimento_id", referencedColumnName: "id" }])
  movimento: Movimento;

  @ManyToOne(() => Stat, (stat) => stat.modificas)
  @JoinColumn([{ name: "stat_id", referencedColumnName: "id" }])
  stat: Stat;
}
