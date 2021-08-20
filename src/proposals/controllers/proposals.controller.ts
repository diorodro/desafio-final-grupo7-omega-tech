import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Guid } from 'guid-typescript';
import { CreateProposalDto } from '../dtos/createProposal.dto';
import { UpdateProposalDto } from '../dtos/updateProposal.dto';
import { Proposal } from '../entities/proposal.entity';
import { ProposalsService } from '../services/proposals.service';

@Controller('proposta')
export class ProposalsController{
    
    constructor(private readonly service: ProposalsService) {}

  @Post()
  add(@Body() dto: CreateProposalDto): Promise<Proposal> {
    return this.service.add(dto)
  }

  @Get()
  findAll(): Promise<Proposal[]> {
    return this.service.findAll()
  }

  @Delete(':id')
  remove(@Param('id') id: Guid): Promise<any> {
    return this.service.remove(id)
  }

  @Patch(':id')
  update(@Param('id') id: Guid, @Body() dto: UpdateProposalDto): Promise<Proposal> {
    return this.service.update(id, dto)
  }
}
