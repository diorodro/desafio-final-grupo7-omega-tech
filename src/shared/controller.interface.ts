import { Guid } from "guid-typescript";
import { BaseEntity } from "./base-entity";

export interface IController<TEntity extends BaseEntity>{
    add(dto: any) : Promise<TEntity>
    findOne(id: Guid) : Promise<TEntity>
    findAll() : Promise<TEntity[]>
    remove(id: Guid) : Promise<any>
    update(id: Guid, dto: any) : Promise<TEntity>
}