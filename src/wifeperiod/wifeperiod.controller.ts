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
import { AddWifePerioDto } from './dto/add-wifeperiod.dto';
import { UpdateWifePerioDto } from './dto/update-wifeperiod.dto';
import { WifeperiodEntity } from './wifeperiod.entity';
import { WifeperiodService } from './wifeperiod.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Periode femmes:')
@Controller('api/wifeperiod')
export class WifeperiodController {
  constructor(private wifeperiodService: WifeperiodService) {}

  @Post()
  async create(@Body() wifePeriod: AddWifePerioDto): Promise<WifeperiodEntity> {
    return await this.wifeperiodService.addWifePeriod(wifePeriod);
  }

  @Delete('/:id')
  async remove(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<WifeperiodEntity> {
    return await this.wifeperiodService.deleteWifePeriod(id);
  }
  @Patch('/:id')
  async edit(
    @Param('id', ParseIntPipe) id: number,
    @Body() wifePeriod: UpdateWifePerioDto,
  ): Promise<WifeperiodEntity> {
    return await this.wifeperiodService.updateWifePeriod(id, wifePeriod);
  }

  @Get()
  async getAll(): Promise<WifeperiodEntity[]> {
    return await this.wifeperiodService.findAll();
  }
}
