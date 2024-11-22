import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Tipo } from "./Tipo";

@Entity("tipo_efetividade", { schema: "public" })
export class TipoEfetividade {
  @Column("character varying", { name: "relacao", nullable: true, length: 50 })
  relacao: string | null;

  @ManyToOne(() => Tipo, (tipo) => tipo.tipoEfetividades)
  @JoinColumn([{ name: "tipo_alvo_id", referencedColumnName: "id" }])
  tipoAlvo: Tipo;

  @ManyToOne(() => Tipo, (tipo) => tipo.tipoEfetividades2)
  @JoinColumn([{ name: "tipo_atancante_id", referencedColumnName: "id" }])
  tipoAtancante: Tipo;
}
