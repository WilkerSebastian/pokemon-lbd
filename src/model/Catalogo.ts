import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Pokedex } from "./Pokedex";
import { Especie } from "./Especie";

@Entity("catalogo", { schema: "public" })
export class Catalogo {
  @Column("integer", { name: "entry_number", nullable: true })
  entryNumber: number | null;

  @ManyToOne(() => Pokedex, (pokedex) => pokedex.catalogos)
  @JoinColumn([{ name: "pokedex_id", referencedColumnName: "id" }])
  pokedex: Pokedex;

  @ManyToOne(() => Especie, (especie) => especie.catalogos)
  @JoinColumn([{ name: "especie_id", referencedColumnName: "id" }])
  especie: Especie;
}
