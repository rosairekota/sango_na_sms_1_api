/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CarnetEntity } from './carnet.entity';
import { CarnetService } from './carnet.service';
import { ApiTags } from '@nestjs/swagger';
import { SendingCarnetDto } from './dto/SendingCarnetDto';
import { SearchInterface } from 'src/helpers/search.interface';

@ApiTags('carnet_enfant')
@Controller('api/carnet')
export class CarnetController {
    constructor(private readonly carnetRepository: CarnetService) {}

    @Get(':id')
     async getCarnetsByEnfant(@Param("id",ParseIntPipe) id:number ) :Promise<SendingCarnetDto[]>{
         return await this.carnetRepository.findCarnetsByEnfant(id);
     }
     @Post('statistique_vaccination_enfant')
     async getCarnets(@Body() newChildVaccinationView: SearchInterface[]) :Promise<CarnetEntity[]>{
         return await this.carnetRepository.findCarnets(newChildVaccinationView)
     }

     @Get('general_statistics')
     async getGeneralStatistics() :Promise<any[]>{
         return await this.carnetRepository.findCarnetsGeneralStatistics();
     }
}
