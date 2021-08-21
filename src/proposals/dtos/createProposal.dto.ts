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
    public contratado: boolean

    @IsNotEmpty()
    public fonteEnergia: FonteEnergia

    public valorProposto: number

    public submercado: Submercado

    @IsNotEmpty()
    public cargas: CreateCargaDto[];
}

 