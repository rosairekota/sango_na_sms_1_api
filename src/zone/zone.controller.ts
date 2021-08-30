import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Param,
  ParseIntPipe,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ZoneService } from './zone.service';
import { ZoneEntity } from './zone.entity';
import { AddZoneDto } from './dto/add-zone.dto';
import { UpdateZoneDto } from './dto/update-zone.dto';
import { Filteredzone } from './Filteredzone.entity';

@ApiTags('Zones:')
@Controller('api/zone')
export class ZoneController {
  constructor(private readonly zoneService: ZoneService) {}

  @Get('/:labelZone')
  async getProvinceByLabel(
    @Param('labelZone') labelZone: string,
  ): Promise<Filteredzone[]> {
    return await this.zoneService.getZoneByLabel(labelZone);
  }

  @Post()
  async createZone(@Body() newZone: AddZoneDto): Promise<ZoneEntity> {
    return await this.zoneService.add(newZone);
  }
  @Get()
  async getAllZones(): Promise<ZoneEntity[]> {
    return await this.zoneService.findAll();
  }
  @Get('/:id')
  async getZoneById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<ZoneEntity> {
    return await this.zoneService.findById(id);
  }

  @Patch('/:id')
  async editZone(
    @Param('id', ParseIntPipe) id: number,
    @Body() newZone: UpdateZoneDto,
  ): Promise<ZoneEntity> {
    return await this.zoneService.update(id, newZone);
  }

  @Delete('/:id')
  async deleteZone(@Param('id', ParseIntPipe) id: number): Promise<ZoneEntity> {
    return await this.zoneService.remove(id);
  }
}
