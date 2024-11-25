import { Column, Entity, Index, PrimaryColumn } from "typeorm";

@Index("area_pkey", ["id"], { unique: true })
@Entity("area", { schema: "public" })
export class Area {
  @PrimaryColumn("integer", { name:"id" })
  id: number;

  @Column("character varying", { name: "nome", nullable: true })
  nome: string | null;

  @Column("character varying", { name: "location", nullable: true })
  location: string | null;

  @Column("character varying", { name: "region", nullable: true })
  region: string | null;
}
