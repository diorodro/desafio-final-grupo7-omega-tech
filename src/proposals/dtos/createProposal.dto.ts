import { IsDate, IsNotEmpty } from "class-validator";
import { Carga } from "src/carga/entities/carga.entity";

export class CreateProposalDto{

    public id: string;

    @IsNotEmpty()
    public carga: Carga;

    @IsNotEmpty()
    public dataInicial: Date

    @IsNotEmpty()
    public dataFinal: Date
}

 