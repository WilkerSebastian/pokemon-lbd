import { Column, Entity, Index, OneToMany } from "typeorm";
import { BerryFlavor } from "./BerryFlavor";
import { Nature } from "./Nature";

@Index("flavor_pkey", ["id"], { unique: true })
@Entity("flavor", { schema: "public" })
export class Flavor {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("character varying", { name: "nome", nullable: true, length: 50 })
  nome: string | null;

  @Column("character varying", {
    name: "contest_type",
    nullable: true,
    length: 50,
  })
  contestType: string | null;
  
}
