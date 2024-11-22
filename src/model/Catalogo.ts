import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Pokedex } from "./Pokedex";
import { Especie } from "./Especie";

@Entity("catalogo", { schema: "public" })
export class Catalogo {
  @PrimaryColumn("integer", { generated: "increment", name: "id" })
  id: number

  @Column("integer", { name: "entry_number", nullable: true })
  entryNumber: number | null;

  @ManyToOne(() => Pokedex, (pokedex) => pokedex.id)
  @JoinColumn([{ name: "pokedex_id", referencedColumnName: "id" }])
  pokedex: Pokedex;

  @ManyToOne(() => Especie, (especie) => especie.id)
  @JoinColumn([{ name: "especie_id", referencedColumnName: "id" }])
  especie: Especie;
}
