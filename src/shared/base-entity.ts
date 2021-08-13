import { IsNotEmpty } from 'class-validator'
import { Guid } from 'guid-typescript'
// import { Column, Entity, PrimaryColumn } from 'typeorm'

// @Entity()
export abstract class BaseEntity {

//   @PrimaryColumn({type: 'uuid', name: 'ID' })
  @IsNotEmpty()
  public id: string

  constructor() {
    this.id = Guid.create().toString()
  }
}