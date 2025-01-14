import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Especie } from "./Especie";

@Index("egg_group_pkey", ["especieId", "nome"], { unique: true })
@Entity("egg_group", { schema: "public" })
export class EggGroup {
  @Column("integer", { primary: true, name: "especie_id" })
  especieId: number;

  @Column("character varying", { primary: true, name: "nome" })
  nome: string;

  @ManyToOne(() => Especie, (especie) => especie.id)
  @JoinColumn([{ name: "especie_id", referencedColumnName: "id" }])
  especie: Especie;
}
