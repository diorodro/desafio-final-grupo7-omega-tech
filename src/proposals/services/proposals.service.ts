import { BadRequestException, Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Guid } from 'guid-typescript';
import { Repository } from 'typeorm';
import { Proposal } from '../entities/proposal.entity';
import { CreateProposalDto } from '../dtos/createProposal.dto';
import { UpdateProposalDto } from '../dtos/updateProposal.dto';
import { Carga } from 'src/carga/entities/carga.entity';

@Injectable()
export class ProposalsService {

    constructor(
        @InjectRepository(Proposal) private repository: Repository<Proposal>,
        @InjectRepository(Carga) private repositoryCarga: Repository<Carga>,
    ){}

    private proposals: Proposal[] = []

    async remove(id: Guid) : Promise<any> {
        const cc = await this.repository.findOne(id.toString())
        return this.repository.delete(cc)
    }

    async add(dtoProposal: CreateProposalDto): Promise<Proposal>{
        const entity = await new Proposal(
                    dtoProposal.dataInicio,
                    dtoProposal.dataFinal,
                    dtoProposal.contratado,
                    dtoProposal.fonteEnergia

        )

        this.repository.save(entity)

        dtoProposal.cargas.forEach(carga =>{

          var newCarga = new Carga(carga.nomeEmpresa,carga.consumoKwh)

          newCarga.proposal = entity

          this.repositoryCarga.save(newCarga)
        })

        return entity
    }   

    findAll() : Promise<Proposal[]>{
        return this.repository.find({ relations: ['cargas'] });
    }

    findOne(id: Guid) : Promise<Proposal>{
        return this.repository.findOne(id.toString())
    }

    async update(id: Guid, dto: UpdateProposalDto): Promise<Proposal>{
        
        if(dto.cargas == null) throw new BadRequestException("Valor inválido")
        
        var cc = await this.findOne(id)

        return this.repository.save(cc)
    }
}
