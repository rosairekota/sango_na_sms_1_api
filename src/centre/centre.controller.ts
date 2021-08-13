/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CentreEntity } from './centre.entity';
import { CentreService } from './centre.service';
import { AddCentreDto } from './dto/add-centre.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('centres:')

@Controller('api/centre')
export class CentreController {
    constructor(
        private centreService : CentreService,
    ){}

    @Post()
  async AddCentre(@Body() centre: AddCentreDto): Promise<CentreEntity> {
    return await this.centreService.addCentre(centre);
    }

  @Get('centres')
  async getCentres(): Promise<CentreEntity[]> {
    return await this.centreService.getAllCenters();
    }
}