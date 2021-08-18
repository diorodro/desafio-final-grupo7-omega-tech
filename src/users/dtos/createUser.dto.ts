import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator"

export class CreateUserDto {

    @IsString()
    @IsNotEmpty({ message: 'e-mail é obrigatório' })
    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty({ message: 'nome é obrigatório' })
    @MinLength(3)
    name: string;

    @IsString()
    @IsNotEmpty({ message: 'password é obrigatório' })
    @MinLength(8)
    password: string;

  }
   