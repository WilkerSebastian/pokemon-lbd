import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Especie } from "./Especie";

@Index("genero_pkey", ["lingua", "pokemonEspecie"], { unique: true })
@Entity("genero", { schema: "public" })
export class Genero {
  @Column("integer", { primary: true, name: "pokemon_especie" })
  pokemonEspecie: number;

  @Column("character varying", { primary: true, name: "lingua" })
  lingua: string;

  @Column("character varying", { name: "genero", nullable: true })
  genero: string | null;

  @ManyToOne(() => Especie, (especie) => especie.id)
  @JoinColumn([{ name: "pokemon_especie", referencedColumnName: "id" }])
  pokemonEspecie2: Especie;
}
