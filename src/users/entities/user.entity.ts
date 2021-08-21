import { Guid } from "guid-typescript";
import {Entity, Column, PrimaryColumn} from "typeorm";

@Entity()
export class User {

    @PrimaryColumn({type: 'uuid', name: 'ID' })
    public id: string

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column()
    name: string;

    constructor() {
        this.id = Guid.create().toString()
    }

}
