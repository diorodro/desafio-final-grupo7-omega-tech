import { BaseEntity } from "src/shared/base-entity";
import { Column } from "typeorm";


export class User extends BaseEntity{

    @Column({type:'text', name: 'EMAIL'})
    email:string

    @Column({type:'text', name: 'USERNAME'})
    name:string

    @Column({type:'text', name: 'PASSWORD'})
    password:string

    constructor(email: string, name: string,password: string) {
        super()
        this.email = email
        this.name = name
        this.password = password
     }
}