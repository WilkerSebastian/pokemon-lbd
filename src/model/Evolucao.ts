import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Area } from "./Area";
import { Item } from "./Item";
import { Movimento } from "./Movimento";
import { Especie } from "./Especie";
import { Tipo } from "./Tipo";

@Entity("evolucao", { schema: "public" })
export class Evolucao {
  @PrimaryColumn("integer", { generated: "increment", name: "id" })
  id: number;

  @Column("integer", { name: "location", nullable: true })
  location: number | null;

  @Column("character varying", { name: "trigger", nullable: true, length: 50 })
  trigger: string | null;

  @Column("character varying", { name: "genero", nullable: true, length: 50 })
  genero: string | null;

  @Column("integer", { name: "min_affection", nullable: true })
  minAffection: number | null;

  @Column("integer", { name: "min_beauty", nullable: true })
  minBeauty: number | null;

  @Column("integer", { name: "min_happiness", nullable: true })
  minHappiness: number | null;

  @Column("integer", { name: "min_level", nullable: true })
  minLevel: number | null;

  @Column("boolean", { name: "needs_overworld_rain", nullable: true })
  needsOverworldRain: boolean | null;

  @Column("integer", { name: "relative_physical_stats", nullable: true })
  relativePhysicalStats: number | null;

  @Column("character varying", {
    name: "time_of_day",
    nullable: true,
    length: 50,
  })
  timeOfDay: string | null;

  @Column("boolean", { name: "turn_upside_down", nullable: true })
  turnUpsideDown: boolean | null;

  @ManyToOne(() => Area, (area) => area.id)
  @JoinColumn([{ name: "area_id", referencedColumnName: "id" }])
  area: Area;

  @ManyToOne(() => Item, (item) => item.id)
  @JoinColumn([{ name: "held_item", referencedColumnName: "id" }])
  heldItem: Item;

  @ManyToOne(() => Movimento, (movimento) => movimento.id)
  @JoinColumn([{ name: "known_move_id", referencedColumnName: "id" }])
  knownMove: Movimento;

  @ManyToOne(() => Especie, (especie) => especie.id)
  @JoinColumn([{ name: "especie_anterior", referencedColumnName: "id" }])
  especieAnterior: Especie;

  @ManyToOne(() => Especie, (especie) => especie.id)
  @JoinColumn([{ name: "especie_evoluida", referencedColumnName: "id" }])
  especieEvoluida: Especie;

  @ManyToOne(() => Tipo, (tipo) => tipo.id)
  @JoinColumn([{ name: "known_move_type", referencedColumnName: "id" }])
  knownMoveType: Tipo;

  @ManyToOne(() => Especie, (especie) => especie.id)
  @JoinColumn([{ name: "party_species", referencedColumnName: "id" }])
  partySpecies: Especie;

  @ManyToOne(() => Tipo, (tipo) => tipo.id)
  @JoinColumn([{ name: "party_type", referencedColumnName: "id" }])
  partyType: Tipo;

  @ManyToOne(() => Especie, (especie) => especie.id)
  @JoinColumn([{ name: "trade_species", referencedColumnName: "id" }])
  tradeSpecies: Especie;
}
