import { Controller } from '@nestjs/common';
import { Guid } from 'guid-typescript';
import { IController } from 'src/shared/controller.interface';
import Proposal from '../entities/proposal.entity';

@Controller('proposta')
export class ProposalsController implements IController<Proposal> {
    
    add(dto: any): Promise<Proposal> {
        throw new Error('Method not implemented.');
    }
    findOne(id: Guid): Promise<Proposal> {
        throw new Error('Method not implemented.');
    }
    findAll(): Promise<Proposal[]> {
        throw new Error('Method not implemented.');
    }
    remove(id: Guid): Promise<any> {
        throw new Error('Method not implemented.');
    }
    update(id: Guid, dto: any): Promise<Proposal> {
        throw new Error('Method not implemented.');
    }
}
