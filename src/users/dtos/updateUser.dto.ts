import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator"


export class UpdateUserDto  {

    id: number;
    email: string;
    name: string;
    password: string;
  }