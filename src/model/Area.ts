import { Column, Entity, Index, PrimaryColumn } from "typeorm";

@Index("area_pkey", ["id"], { unique: true })
@Entity("area", { schema: "public" })
export class Area {
  @PrimaryColumn("integer", { name:"id" })
  id: number;

  @Column("character varying", { name: "nome", nullable: true, length: 50 })
  nome: string | null;

  @Column("character varying", { name: "location", nullable: true, length: 50 })
  location: string | null;

  @Column("character varying", { name: "region", nullable: true, length: 50 })
  region: string | null;
}
