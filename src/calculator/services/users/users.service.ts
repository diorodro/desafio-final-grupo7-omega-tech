import { Injectable } from '@nestjs/common';
import { UserDTO } from 'src/calculator/dtos/user.dto';

@Injectable()
export class UsersService {

    saveUser(newUser: UserDTO): UserDTO{
        console.log("Chegou no Serviço");
        return newUser
        
    }
}
