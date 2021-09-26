/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  ParseIntPipe,
  Param,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SearchInterface } from 'src/helpers/search.interface';
import { ChildVaccinationEntity } from './child-vaccination.entity';
import { ChildVaccinationService } from './child-vaccination.service';
import { AddChildVaccinationDto } from './dto/add-child-vaccination.dto';
import { UpdateChildVaccinationDto } from './dto/update-child-vaccination.dto';


@ApiTags('vaccination enfant:')
@Controller('api/vaccination_enfant')
export class ChildVaccinationController {
  constructor(
    private readonly childVaccinationService: ChildVaccinationService,
  ) {}

  @Post('statistique_vaccination_enfant')
  async filterChilds(@Body() newChildVaccinationView: SearchInterface[]) {
    return await this.childVaccinationService.filterChildsByVaccinations(
      newChildVaccinationView,
    );
  }
  @Get()
  async getAll(): Promise<ChildVaccinationEntity[]> {
    return await this.childVaccinationService.findAll();
  }

  @Post()
  async create(
    @Body() newDto: AddChildVaccinationDto,
  ): Promise<ChildVaccinationEntity> {
    console.log('vaccination_enfant');
    console.log(newDto);
    return await this.childVaccinationService.add(newDto);
  }

  @Patch('id')
  async edit(
    @Param('id', ParseIntPipe) id: number,
    @Body() newDto: UpdateChildVaccinationDto,
  ): Promise<ChildVaccinationEntity> {
    return await this.childVaccinationService.Update(id, newDto);
  }

  @Delete()
  async remove(@Param('id', ParseIntPipe) id: number) {
    return await this.childVaccinationService.delete(id);
  }
}
