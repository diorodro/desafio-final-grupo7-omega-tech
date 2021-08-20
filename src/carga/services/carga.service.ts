import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Guid } from 'guid-typescript';
import { Repository } from 'typeorm';
import { CreateCargaDto } from '../dtos/createCarga.dto';
import { Carga } from '../entities/carga.entity';

@Injectable()
export class CargaService {

    constructor(@InjectRepository(Carga) private repository: Repository<Carga>){}

    async remove(id: Guid) : Promise<any> {
        const cc = await this.findOne(id)
        return this.repository.delete(cc)
    }

    add(dto: CreateCargaDto): Promise<Carga>{
        const entity = dto
        return this.repository.save(entity)
    }   

    findAll() : Promise<Carga[]>{
        return this.repository.find()
    }

    findOne(id: Guid) : Promise<Carga>{
        return this.repository.findOne(id.toString())
    }
}
