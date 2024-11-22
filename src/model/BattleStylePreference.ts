import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { MoveBattleStyle } from "./MoveBattleStyle";
import { Nature } from "./Nature";

@Entity("battle_style_preference", { schema: "public" })
export class BattleStylePreference {
  @Column("integer", { name: "high_hp_preference", nullable: true })
  highHpPreference: number | null;

  @Column("integer", { name: "low_hp_preference", nullable: true })
  lowHpPreference: number | null;

  @ManyToOne(
    () => MoveBattleStyle,
    (moveBattleStyle) => moveBattleStyle.battleStylePreferences
  )
  @JoinColumn([{ name: "battle_style_id", referencedColumnName: "id" }])
  battleStyle: MoveBattleStyle;

  @ManyToOne(() => Nature, (nature) => nature.battleStylePreferences)
  @JoinColumn([{ name: "nature_id", referencedColumnName: "id" }])
  nature: Nature;
}
