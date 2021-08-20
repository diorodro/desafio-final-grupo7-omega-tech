import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateCargaDto{

    @IsNotEmpty()
    @IsString()
    public nomeEmpresa: string

    @IsNotEmpty()
    @IsNumber()
    public consumoKwh: number
}