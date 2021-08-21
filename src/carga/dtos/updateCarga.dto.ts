import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"
import { CreateProposalDto } from "src/proposals/dtos/createProposal.dto";

export class UpdateCargaDto{

    id: string;

    @IsNotEmpty()
    @IsString()
    public nomeEmpresa: string

    @IsNotEmpty()
    @IsNumber()
    public consumoKwh: number

    @IsNotEmpty()
    public proposal: CreateProposalDto
}