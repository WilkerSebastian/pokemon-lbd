import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Movimento } from "./Movimento";

@Entity("contest_combo", { schema: "public" })
export class ContestCombo {
  @Column("character varying", {
    name: "contest_type",
    nullable: true,
    length: 50,
  })
  contestType: string | null;

  @ManyToOne(() => Movimento, (movimento) => movimento.contestCombos)
  @JoinColumn([{ name: "first_move_id", referencedColumnName: "id" }])
  firstMove: Movimento;

  @ManyToOne(() => Movimento, (movimento) => movimento.contestCombos2)
  @JoinColumn([{ name: "second_move_id", referencedColumnName: "id" }])
  secondMove: Movimento;
}
