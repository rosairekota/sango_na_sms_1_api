/* eslint-disable prettier/prettier */
import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CarnetEntity } from './carnet.entity';
import { CarnetService } from './carnet.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('carnet_enfant')
@Controller('api/carnet')
export class CarnetController {
    constructor(private readonly carnetRepository: CarnetService) {}

    @Get(':id')
     async getCarnetsByEnfant(@Param("id",ParseIntPipe) id:number ) :Promise<CarnetEntity[]>{
         return await this.carnetRepository.findCarnetsByEnfant(id);
     }
}
