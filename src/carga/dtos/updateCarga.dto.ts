import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"

export class UpdateCargaDto{

    id: string;

    @IsNotEmpty()
    @IsString()
    public nomeEmpresa: string

    @IsNotEmpty()
    @IsNumber()
    public consumoKwh: number
}