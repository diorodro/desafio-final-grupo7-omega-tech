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
    ){}

    private proposals: Proposal[] = []

    async remove(id: Guid) : Promise<any> {
        const cc = await this.findOne(id)
        return this.repository.delete(cc)
    }

    add(dtoProposal: CreateProposalDto): Promise<Proposal>{
        const entity = new Proposal()
        return this.repository.save(entity)
    }   

    findAll() : Promise<Proposal[]>{
        return this.repository.find()
    }

    findOne(id: Guid) : Promise<Proposal>{
        return this.repository.findOne(id.toString())
    }

    async update(id: Guid, dto: UpdateProposalDto): Promise<Proposal>{
        
        if(dto.carga == null) throw new BadRequestException("Valor inválido")
        
        var cc = await this.findOne(id)

        return this.repository.save(cc)
    }
}
