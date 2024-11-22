import { Column, Entity, Index, OneToMany } from "typeorm";
import { BattleStylePreference } from "./BattleStylePreference";

@Index("move_battle_style_pkey", ["id"], { unique: true })
@Entity("move_battle_style", { schema: "public" })
export class MoveBattleStyle {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("character varying", { name: "nome", nullable: true, length: 50 })
  nome: string | null;

  @OneToMany(
    () => BattleStylePreference,
    (battleStylePreference) => battleStylePreference.battleStyle
  )
  battleStylePreferences: BattleStylePreference[];
}
