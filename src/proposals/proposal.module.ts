import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProposalsController } from './controllers/proposals.controller';
import { Proposal } from './entities/proposal.entity';
import { ProposalsService } from './services/proposals.service';

 
@Module({
  imports: [TypeOrmModule.forFeature([Proposal])],
  controllers: [ProposalsController],
  providers: [ProposalsService],
})
export class ProposalsModule {}