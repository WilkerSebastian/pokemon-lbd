import { Column, Entity, Index } from "typeorm";

@Index("move_battle_style_pkey", ["id"], { unique: true })
@Entity("move_battle_style", { schema: "public" })
export class MoveBattleStyle {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("character varying", { name: "nome", nullable: true, length: 50 })
  nome: string | null;
}
