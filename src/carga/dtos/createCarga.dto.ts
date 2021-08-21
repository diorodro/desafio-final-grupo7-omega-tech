import { IsNotEmpty, IsNumber, IsString } from "class-validator"
import { CreateProposalDto } from "src/proposals/dtos/createProposal.dto"

export class CreateCargaDto{

    @IsNotEmpty()
    @IsString()
    public nomeEmpresa: string

    @IsNotEmpty()
    @IsNumber()
    public consumoKwh: number

    @IsNotEmpty()
    public proposal: CreateProposalDto
}