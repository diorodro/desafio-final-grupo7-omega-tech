import { IsDate, IsNotEmpty } from "class-validator";
import { Carga } from "src/carga/entities/carga.entity";

export class CreateProposalDto{

    public id: string;

    @IsNotEmpty()
    public carga: Carga;

    public dataInicio: Date

    public dataFinal: Date
}

 