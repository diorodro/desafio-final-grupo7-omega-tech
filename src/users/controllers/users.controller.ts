import { Controller, Get, Post } from '@nestjs/common';
import { Guid } from 'guid-typescript';
import { IController } from 'src/shared/controller.interface';
import { User } from '../entities/user.entity';

@Controller('users')
export class UsersController implements IController<User>{
    
    @Get()
    helloWorld(): string{
        return "Hello world"
    }

    add(dto: any): Promise<User> {
        throw new Error('Method not implemented.');
    }
    findOne(id: Guid): Promise<User> {
        throw new Error('Method not implemented.');
    }
    findAll(): Promise<User[]> {
        throw new Error('Method not implemented.');
    }
    remove(id: Guid): Promise<any> {
        throw new Error('Method not implemented.');
    }
    update(id: Guid, dto: any): Promise<User> {
        throw new Error('Method not implemented.');
    }
    
}
