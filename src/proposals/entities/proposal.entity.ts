import FonteEnergia from 'src/utils/fonte.enum';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../../shared/base-entity';
import { Carga } from './carga.entity';
 
@Entity()
export class Proposal extends BaseEntity {
  
  private dataInicio: Date

  private dataFinal: Date

  private cargas: Carga[]

  private consumoTotal: number

  private fonteEnergia: FonteEnergia

  private contratado: boolean

  private valorProposto: string

  constructor() {
      super()
  }
}