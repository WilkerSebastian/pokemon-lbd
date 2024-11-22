import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Movimento } from "./Movimento";
import { Stat } from "./Stat";

@Entity("modifica", { schema: "public" })
export class Modifica {
  @PrimaryColumn("integer", { generated: "increment", name: "id" })
  id: number;
  
  @Column("integer", { name: "change", nullable: true })
  change: number | null;

  @ManyToOne(() => Movimento, (movimento) => movimento.id)
  @JoinColumn([{ name: "movimento_id", referencedColumnName: "id" }])
  movimento: Movimento;

  @ManyToOne(() => Stat, (stat) => stat.id)
  @JoinColumn([{ name: "stat_id", referencedColumnName: "id" }])
  stat: Stat;
}
