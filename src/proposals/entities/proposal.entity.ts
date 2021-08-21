import { Guid } from 'guid-typescript';
import { Carga } from 'src/carga/entities/carga.entity';
import FonteEnergia from 'src/utils/fonte.enum';
import Submercado from 'src/utils/submercado.enum';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
 
@Entity()
export class Proposal{

  @PrimaryColumn({type: 'uuid', name: 'ID' })
  public id: string

  @Column()
  public dataInicio: Date

  @Column()
  public dataFinal: Date

  @OneToMany(() => Carga, carga => carga.proposal)
  public cargas: Carga[]

  // @Column()
  // public consumoTotal: number

  @Column()
  public fonteEnergia: FonteEnergia

  @Column()
  public contratado: boolean

  @Column()
  public valorProposto: number

  @Column()
  public submercado: Submercado

  constructor(dataInicio: Date, dataFinal: Date, contratado: boolean, fonteEnergia: FonteEnergia) {
    this.id = Guid.create().toString()
    this.dataInicio = dataInicio
    this.dataFinal = dataFinal
    this.contratado = contratado
    this.fonteEnergia = fonteEnergia
  }
}