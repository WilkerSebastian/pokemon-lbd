import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Tipo } from "./Tipo";

@Entity("tipo_efetividade", { schema: "public" })
export class TipoEfetividade {
  @PrimaryColumn("integer", { generated: "increment", name: "id" })
  id: number;

  @Column("character varying", { name: "relacao", nullable: true, length: 50 })
  relacao: string | null;

  @ManyToOne(() => Tipo, (tipo) => tipo.id)
  @JoinColumn([{ name: "tipo_alvo_id", referencedColumnName: "id" }])
  tipoAlvo: Tipo;

  @ManyToOne(() => Tipo, (tipo) => tipo.id)
  @JoinColumn([{ name: "tipo_atancante_id", referencedColumnName: "id" }])
  tipoAtancante: Tipo;
}
