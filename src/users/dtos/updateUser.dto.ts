import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator"

export class UpdateUserDto  {

    id: number;
    
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    name: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    password: string;
  }