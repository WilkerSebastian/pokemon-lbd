import { Column, Entity, Index, OneToMany } from "typeorm";
import { Encounter } from "./Encounter";
import { Evolucao } from "./Evolucao";

@Index("area_pkey", ["id"], { unique: true })
@Entity("area", { schema: "public" })
export class Area {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("character varying", { name: "nome", nullable: true, length: 50 })
  nome: string | null;

  @Column("character varying", { name: "location", nullable: true, length: 50 })
  location: string | null;

  @Column("character varying", { name: "region", nullable: true, length: 50 })
  region: string | null;

  @OneToMany(() => Encounter, (encounter) => encounter.area)
  encounters: Encounter[];

  @OneToMany(() => Evolucao, (evolucao) => evolucao.area)
  evolucaos: Evolucao[];
}
