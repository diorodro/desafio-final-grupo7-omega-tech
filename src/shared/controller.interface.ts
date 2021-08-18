import { Guid } from "guid-typescript";

export interface IController<TEntity>{
    add(dto: any) : Promise<TEntity>
    findOne(id: Guid) : Promise<TEntity>
    findAll() : Promise<TEntity[]>
    remove(id: Guid) : Promise<any>
    update(id: Guid, dto: any) : Promise<TEntity>
}