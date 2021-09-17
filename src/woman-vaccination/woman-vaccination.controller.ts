/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SearchInterface } from 'src/helpers/search.interface';
import { AddWomanVaccinationDto } from './dto/add-woman-vaccination.dto';
import { UpdateWomanVaccinationDto } from './dto/update-woman-vaccination.dto';
import {WomanVaccinationView } from './search/woman-vaccination-search.entity';
import { WomanVaccinationEntity } from './woman-vaccination.entity';
import { WomanVaccinationService } from './woman-vaccination.service';

@ApiTags('vaccinations femme:')
@Controller('api/vaccination_femme')
export class WomanVaccinationController {
  constructor(private womanVaccinationService: WomanVaccinationService) {}

  @Post()
  async create(
    @Body() womanVaccination: AddWomanVaccinationDto,
  ): Promise<WomanVaccinationEntity> {
    return await this.womanVaccinationService.add(womanVaccination);
  }
  @Post('statistiques_vaccination_femmes')
  async filterWifes(
    @Body() newEntity: SearchInterface[],
  ): Promise<WomanVaccinationView[]> {
    return await this.womanVaccinationService.filterWomanByVaccinations(
      newEntity,
    );
  }

  @Delete('/:id')
  async remove(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<WomanVaccinationEntity> {
    return await this.womanVaccinationService.delete(id);
  }
  @Patch('/:id')
  async edit(
    @Param('id', ParseIntPipe) id: number,
    @Body() womanVaccination: UpdateWomanVaccinationDto,
  ): Promise<WomanVaccinationEntity> {
    return await this.womanVaccinationService.update(id, womanVaccination);
  }

  @Get()
  async getAll(): Promise<WomanVaccinationEntity[]> {
    return await this.womanVaccinationService.findAll();
  }
}
