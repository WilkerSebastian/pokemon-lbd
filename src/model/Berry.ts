import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Item } from "./Item";
import { BerryFlavor } from "./BerryFlavor";

@Index("berry_pkey", ["id"], { unique: true })
@Entity("berry", { schema: "public" })
export class Berry {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("character varying", { name: "nome", nullable: true, length: 50 })
  nome: string | null;

  @Column("character varying", {
    name: "natural_gift_type",
    nullable: true,
    length: 50,
  })
  naturalGiftType: string | null;

  @Column("integer", { name: "natural_gift_power", nullable: true })
  naturalGiftPower: number | null;

  @Column("integer", { name: "max_harvest", nullable: true })
  maxHarvest: number | null;

  @Column("integer", { name: "size", nullable: true })
  size: number | null;

  @Column("integer", { name: "smoothness", nullable: true })
  smoothness: number | null;

  @Column("integer", { name: "soil_dryness", nullable: true })
  soilDryness: number | null;

  @Column("integer", { name: "growth_time", nullable: true })
  growthTime: number | null;

  @Column("character varying", { name: "firmness", nullable: true, length: 50 })
  firmness: string | null;

  @ManyToOne(() => Item, (item) => item.id)
  @JoinColumn([{ name: "item_id", referencedColumnName: "id" }])
  item: Item;

}
