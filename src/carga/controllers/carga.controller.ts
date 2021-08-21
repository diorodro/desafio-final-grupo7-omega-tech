import { Body, Controller, Delete, Get, Param, Patch, Post, Req } from '@nestjs/common';
import RequestWithProposal from 'src/proposals/interfaces/requestWithProposal.interface';
import FindOneParams from 'src/utils/findOneParams';
import { CreateCargaDto } from '../dtos/createCarga.dto';
import { UpdateCargaDto } from '../dtos/updateCarga.dto';
import CargaService from '../services/carga.service';

@Controller('cargas')
export default class CargasController {
  constructor(
    private readonly service: CargaService
  ) {}

  @Get()
  getAll() {
    return this.service.getAll();
  }

  @Get(':id')
  getById(@Param() { id }: FindOneParams) {
    return this.service.getById(id.toString());
  }

  @Post()
  async createCarga(@Body() carga: CreateCargaDto, @Req() req: RequestWithProposal) {
    return this.service.createCarga(carga, req.proposal);
  }

  @Patch(':id')
  async updatePost(@Param() { id }: FindOneParams, @Body() carga: UpdateCargaDto) {
    return this.service.updateCarga(id.toString(), carga);
  }

  @Delete(':id')
  async delete(@Param() { id }: FindOneParams) {
    return this.service.deleteCarga(id.toString());
  }
}