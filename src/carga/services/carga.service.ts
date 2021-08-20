import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Guid } from 'guid-typescript';
import { Repository } from 'typeorm';
import { CreateCargaDto } from '../dtos/createCarga.dto';
import { Carga } from '../entities/carga.entity';
import { Proposal } from "src/proposals/entities/proposal.entity";
import { UpdateProposalDto } from 'src/proposals/dtos/updateProposal.dto';
import { UpdateCargaDto } from '../dtos/updateCarga.dto';

@Injectable()
export default class CargaService {
  constructor(
    @InjectRepository(Carga)
    private repository: Repository<Carga>
  ) {}

  getAll() {
    return this.repository.find({ relations: ['proposal'] });
  }

  async getById(id: string) {
    const carga = await this.repository.findOne(id, { relations: ['proposal'] });
    if (carga) {
      return carga;
    }
    throw new NotFoundException(id);
  }

  async createCarga(carga: CreateCargaDto, proposal: Proposal) {
    const newCarga = await this.repository.create({
      ...carga,
      proposal: proposal
    });
    await this.repository.save(newCarga);
    return newCarga;
  }

  async updateCarga(id: string, carga: UpdateCargaDto) {
    await this.repository.update(id, carga);
    const updatedCarga = await this.repository.findOne(id, { relations: ['proposal'] });
    if (updatedCarga) {
      return updatedCarga
    }
    throw new NotFoundException(id);
  }

  async deleteCarga(id: string) {
    const deleteResponse = await this.repository.delete(id);
    if (!deleteResponse.affected) {
      throw new NotFoundException(id);
    }
  }
}
