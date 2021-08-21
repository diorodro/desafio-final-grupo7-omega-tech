import { IsDate, IsNotEmpty } from "class-validator";
import { CreateCargaDto } from "src/carga/dtos/createCarga.dto";
import { Carga } from "src/carga/entities/carga.entity";

export class UpdateProposalDto{
    
    public id: string;
    
    @IsNotEmpty()
    public dataInicio: Date
    
    @IsNotEmpty()
    public dataFinal: Date
    
    @IsNotEmpty()
    public cargas: CreateCargaDto[];

}

 