import { IsDate, IsNotEmpty } from "class-validator";
import { Carga } from "src/carga/entities/carga.entity";

export class UpdateProposalDto{

    
    @IsNotEmpty()
    public carga: Carga;

    public dataInicio: string

    public dataFinal: string

}

 