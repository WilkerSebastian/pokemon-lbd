import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Movimento } from "./Movimento";

@Entity("contest_combo", { schema: "public" })
export class ContestCombo {
  @PrimaryColumn("integer", { generated: "increment", name: "id" })
  id: number;
  
  @Column("character varying", {
    name: "contest_type",
    nullable: true,
    length: 50,
  })
  contestType: string | null;

  @ManyToOne(() => Movimento, (movimento) => movimento.id)
  @JoinColumn([{ name: "first_move_id", referencedColumnName: "id" }])
  firstMove: Movimento;

  @ManyToOne(() => Movimento, (movimento) => movimento.id)
  @JoinColumn([{ name: "second_move_id", referencedColumnName: "id" }])
  secondMove: Movimento;
}
