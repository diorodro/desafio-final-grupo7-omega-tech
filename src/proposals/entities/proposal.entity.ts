import FonteEnergia from 'src/utils/fonte.enum';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Carga } from './carga.entity';
 
@Entity()
export class Proposal{

  @PrimaryGeneratedColumn()
  public id!: number;
  
  @Column()
  private dataInicio: Date

  @Column()
  private dataFinal: Date

  @OneToMany(() => Carga, carga => carga.proposal)
  carga: Carga[]

  @Column()
  private consumoTotal: number

  @Column()
  private fonteEnergia: FonteEnergia

  @Column()
  private contratado: boolean

  @Column()
  private valorProposto: string

}