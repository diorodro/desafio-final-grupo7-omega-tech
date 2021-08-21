import { IsDate, IsNotEmpty } from "class-validator";
import { CreateCargaDto } from "src/carga/dtos/createCarga.dto";
import FonteEnergia from "src/utils/fonte.enum";
import Submercado from "src/utils/submercado.enum";

export class CreateProposalDto{

    @IsNotEmpty()
    public dataInicio: Date
    
    @IsNotEmpty()
    public dataFinal: Date

    @IsNotEmpty()
    public cargas: CreateCargaDto[];
}

 