import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { MoveBattleStyle } from "./MoveBattleStyle";
import { Nature } from "./Nature";

@Entity("battle_style_preference", { schema: "public" })
export class BattleStylePreference {
  @PrimaryColumn("integer", { generated: "increment", name: "id" })
  id: number;
  
  @Column("integer", { name: "high_hp_preference", nullable: true })
  highHpPreference: number | null;

  @Column("integer", { name: "low_hp_preference", nullable: true })
  lowHpPreference: number | null;

  @ManyToOne(
    () => MoveBattleStyle,
    (moveBattleStyle) => moveBattleStyle.id
  )
  @JoinColumn([{ name: "battle_style_id", referencedColumnName: "id" }])
  battleStyle: MoveBattleStyle;

  @ManyToOne(() => Nature, (nature) => nature.id)
  @JoinColumn([{ name: "nature_id", referencedColumnName: "id" }])
  nature: Nature;
}
