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
import { ZoneService } from './zone.service';
import { ZoneEntity } from './zone.entity';
import { AddZoneDto } from './dto/add-zone.dto';
@Controller('api/zone')
export class ZoneController {
  constructor(private readonly zoneService: ZoneService) {}
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
  @Post()
  async createZone(@Body() newZone: AddZoneDto): Promise<ZoneEntity> {
    return await this.zoneService.add(newZone);
  }

  @Patch('/:id')
  async editZone(
    @Param('id', ParseIntPipe) id: number,
    @Body() newZone: AddZoneDto,
  ): Promise<ZoneEntity> {
    return await this.zoneService.update(id, newZone);
  }

  @Delete('/:id')
  async deleteZone(@Param('id', ParseIntPipe) id: number): Promise<ZoneEntity> {
    return await this.zoneService.remove(id);
  }
}
