import { BaseEntity } from "src/shared/base-entity"
import { Carga } from "../entities/carga.entity";

export class UpdateProposalDto extends BaseEntity{
    public carga: Carga;
}

 