/* eslint-disable prettier/prettier */
import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CarnetEntity } from './carnet.entity';
import { CarnetService } from './carnet.service';
import { ApiTags } from '@nestjs/swagger';
import { SendingCarnetDto } from './dto/SendingCarnetDto';

@ApiTags('carnet_enfant')
@Controller('api/carnet')
export class CarnetController {
    constructor(private readonly carnetRepository: CarnetService) {}

    @Get(':id')
     async getCarnetsByEnfant(@Param("id",ParseIntPipe) id:number ) :Promise<SendingCarnetDto[]>{
         return await this.carnetRepository.findCarnetsByEnfant(id);
     }
}
