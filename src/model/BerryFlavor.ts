import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Berry } from "./Berry";
import { Flavor } from "./Flavor";

@Entity("berry_flavor", { schema: "public" })
export class BerryFlavor {
  @Column("integer", { name: "potency", nullable: true })
  potency: number | null;

  @ManyToOne(() => Berry, (berry) => berry.berryFlavors)
  @JoinColumn([{ name: "berry_id", referencedColumnName: "id" }])
  berry: Berry;

  @ManyToOne(() => Flavor, (flavor) => flavor.berryFlavors)
  @JoinColumn([{ name: "flavor_id", referencedColumnName: "id" }])
  flavor: Flavor;
}
