import { Injectable } from '@nestjs/common';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDTO } from 'src/calculator/dtos/user.dto';

@Injectable()
export class UsersService {

    saveUser(newUser: UserDTO): UserDTO{
        console.log("Chegou no Serviço");
        return newUser
        
    }
}
