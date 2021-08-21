import { IsDate, IsNotEmpty } from "class-validator";
import { CreateCargaDto } from "src/carga/dtos/createCarga.dto";
import { Carga } from "src/carga/entities/carga.entity";
import FonteEnergia from "src/utils/fonte.enum";
import Submercado from "src/utils/submercado.enum";

export class CreateProposalDto{

    @IsNotEmpty()
    public dataInicio: Date
    
    @IsNotEmpty()
    public dataFinal: Date

    public consumoTotal: number

    public fonteEnergia: FonteEnergia

    public contratado: boolean

    public valorProposto: number

    public submercado: Submercado

    @IsNotEmpty()
    public cargas: CreateCargaDto[];
}

 