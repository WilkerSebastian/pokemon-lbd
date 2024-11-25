import { Column, Entity, Index, PrimaryColumn } from "typeorm";

@Index("tipo_pkey", ["id"], { unique: true })
@Entity("tipo", { schema: "public" })
export class Tipo {

  @Column("character varying", { name: "nome", nullable: true })
  nome: string | null;

  @PrimaryColumn("integer", { name: "id" })
  id: number;

  @Column("character varying", {
    name: "move_damage_class",
    nullable: true,
  })
  moveDamageClass: string | null;

  @Column("character varying", {
    name: "generation",
    nullable: true,
  })
  generation: string | null;

}
