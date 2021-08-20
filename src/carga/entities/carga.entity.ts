import { Guid } from "guid-typescript";
import { Proposal } from "src/proposals/entities/proposal.entity";
import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";

@Entity()
export class Carga{

    @PrimaryColumn({type: 'uuid', name: 'ID' })
    public id: string

    @Column({type:'text', name: 'COMPANY_NAME'})
    public nomeEmpresa: string

    @Column({type:'float', name: 'CSM_KWH'})
    public consumoKwh: number

    @ManyToOne(() => Proposal, proposal => proposal.cargas)
    proposal: Proposal;

    constructor(empresa: string, Kwh: number) {
        this.id = Guid.create().toString()
        this.nomeEmpresa = empresa
        this.consumoKwh = Kwh
    }
}