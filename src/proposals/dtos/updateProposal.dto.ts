import { IsDate, IsNotEmpty } from "class-validator";
import { Carga } from "src/carga/entities/carga.entity";

export class UpdateProposalDto{

    
    @IsNotEmpty()
    public carga: Carga;

    @IsNotEmpty()
    @IsDate()
    public dataInicial: Date

    @IsNotEmpty()
    @IsDate()
    public dataFinal: Date

}

 