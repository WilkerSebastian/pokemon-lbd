import { Column, Entity, Index, PrimaryColumn } from "typeorm";

@Index("item_pkey", ["id"], { unique: true })
@Entity("item", { schema: "public" })
export class Item {
  @PrimaryColumn("integer", { name: "id" })
  id: number;

  @Column("character varying", { name: "nome", nullable: true, length: 50 })
  nome: string | null;

  @Column("integer", { name: "custo", nullable: true })
  custo: number | null;

  @Column("integer", { name: "fling_power", nullable: true })
  flingPower: number | null;

  @Column("character varying", {
    name: "fling_effect",
    nullable: true,
    length: 50,
  })
  flingEffect: string | null;

  @Column("character varying", { name: "category", nullable: true, length: 50 })
  category: string | null;

  @Column("text", { name: "sprite", nullable: true })
  sprite: string | null;

}
