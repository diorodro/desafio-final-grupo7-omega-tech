import { Guid } from 'guid-typescript'
import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export abstract class BaseEntity {

  @PrimaryColumn({type: 'uuid', name: 'ID' })
  public id: string

  constructor() {
    this.id = Guid.create().toString()
  }
}