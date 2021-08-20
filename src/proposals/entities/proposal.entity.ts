import { Guid } from 'guid-typescript';
import { Carga } from 'src/carga/entities/carga.entity';
import FonteEnergia from 'src/utils/fonte.enum';
import Submercado from 'src/utils/submercado.enum';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
 
@Entity()
export class Proposal{

  @PrimaryColumn({type: 'uuid', name: 'ID' })
  public id: string

  @Column({type: 'date', name: 'DT_START'})
  public dataInicio: Date

  @Column({type: 'date', name: 'DT_FINAL'})
  public dataFinal: Date

  @OneToMany(() => Carga, carga => carga.proposal)
  cargas: Carga[]

  @Column({type:'float', name: 'CSM_TOTAL'})
  public consumoTotal: number

  @Column({type:'text', name: 'ENERGY_SOURCE'})
  public fonteEnergia: FonteEnergia

  @Column({type:'boolean', name: 'CONTRACTED'})
  public contratado: boolean

  @Column({type:'float', name: 'VL_PROPOSED'})
  public valorProposto: number

  @Column({type:'float', name: 'SUB_MARKET'})
  public submercado: Submercado

  constructor() {
    this.id = Guid.create().toString()
  }
}