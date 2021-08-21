import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProposalsController } from './controllers/proposals.controller';
import { Proposal } from './entities/proposal.entity';
import { ProposalsService } from './services/proposals.service';
import { Carga } from 'src/carga/entities/carga.entity';
import CargaService from 'src/carga/services/carga.service';


 
@Module({
  imports: [TypeOrmModule.forFeature([Proposal, Carga])],
  controllers: [ProposalsController],
  providers: [ProposalsService, CargaService],
})
export class ProposalsModule {}