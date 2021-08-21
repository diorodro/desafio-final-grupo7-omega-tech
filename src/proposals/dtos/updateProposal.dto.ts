import { IsDate, IsNotEmpty } from "class-validator";
import { CreateCargaDto } from "src/carga/dtos/createCarga.dto";
import FonteEnergia from "src/utils/fonte.enum";
import Submercado from "src/utils/submercado.enum";

export class UpdateProposalDto{
    
    public id: string;
    
    @IsNotEmpty()
    public dataInicio: Date
    
    @IsNotEmpty()
    public dataFinal: Date
    
    @IsNotEmpty()
    public fonteEnergia: FonteEnergia

    @IsNotEmpty()
    public contratado: boolean

    @IsNotEmpty()
    public valorProposto: number

    @IsNotEmpty()
    public submercado: Submercado

    @IsNotEmpty()
    public cargas: CreateCargaDto[];

}

 