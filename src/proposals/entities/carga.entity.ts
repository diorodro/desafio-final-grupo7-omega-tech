import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Proposal } from "./proposal.entity";

@Entity()
export class Carga{

    @PrimaryGeneratedColumn()
    public id!: number;

    @Column()
    public nomeEmpresa: string

    @Column()
    public consumoKwh: number

    @ManyToOne(() => Proposal, proposal => proposal.carga)
    proposal: Proposal;

    constructor(empresa: string, Kwh: number) {
        this.nomeEmpresa = empresa
        this.consumoKwh = Kwh
    }
}