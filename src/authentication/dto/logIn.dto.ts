import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator"

export class LogInDto {

    @IsString()
    @IsNotEmpty({ message: 'e-mail é obrigatório' })
    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty({ message: 'password é obrigatório' })
    @MinLength(8)
    password: string;
  }
  