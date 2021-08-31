/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Delete,
  Patch,
  Body,
  ParseIntPipe,
  Param,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PeriodEntity} from './period.entity';
import { PeriodService} from './period.service';
import { AddPeriodDto } from './dto/add-period.dto';
import { UpdatePeriodDto } from './dto/update-period.dto';

@ApiTags('periodes_enfant:')
@Controller('api/period')
export class PeriodController {
  constructor(private readonly PeriodService: PeriodService) {}
  @Get()
  async getAllPeriods(): Promise<PeriodEntity[]> {
    return await this.PeriodService.findAll();
  }

  @Get('/:id')
  async getPeriodById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<PeriodEntity> {
    return await this.PeriodService.findById(id);
  }
  @Post()
  async addPeriod(
    @Body() newPeriod: AddPeriodDto,
  ): Promise<PeriodEntity> {
    return await this.PeriodService.add(newPeriod);
  }

  @Patch('/:id')
  async updatePeriod(
    @Param('id', ParseIntPipe) id: number,
    @Body() Period: Partial<UpdatePeriodDto>,
  ): Promise<PeriodEntity> {
    return await this.PeriodService.update(id, Period);
  }
  @Delete(':id')
  async deletePeriod(@Param('id', ParseIntPipe) id: number) {
    return await this.PeriodService.delete(id);
  }
}
