import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Berry } from "./Berry";
import { Flavor } from "./Flavor";

@Entity("berry_flavor", { schema: "public" })
export class BerryFlavor {
  @PrimaryColumn("integer", { generated: "increment", name: "id" })
  id: number;

  @Column("integer", { name: "potency", nullable: true })
  potency: number | null;

  @ManyToOne(() => Berry, (berry) => berry.id)
  @JoinColumn([{ name: "berry_id", referencedColumnName: "id" }])
  berry: Berry;

  @ManyToOne(() => Flavor, (flavor) => flavor.id)
  @JoinColumn([{ name: "flavor_id", referencedColumnName: "id" }])
  flavor: Flavor;
}
