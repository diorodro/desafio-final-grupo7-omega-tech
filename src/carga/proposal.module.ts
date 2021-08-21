import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import CargaService from 'src/carga/services/carga.service';
import CargasController from './controllers/carga.controller';
import { Carga } from './entities/carga.entity';


 
@Module({
  imports: [TypeOrmModule.forFeature([Carga])],
  controllers: [CargasController],
  providers: [CargaService],
})
export class CargaModule {}