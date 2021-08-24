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

@ApiTags('Zones:')
@Controller('api/zone')
export class ZoneController {
  constructor(private readonly zoneService: ZoneService) {}


  @Post()
  async createZone(@Body() newZone: AddZoneDto): Promise<ZoneEntity> {
    console.log(newZone)
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
    @Body() newZone: AddZoneDto,
  ): Promise<ZoneEntity> {
    return await this.zoneService.update(id, newZone);
  }

  @Delete('/:id')
  async deleteZone(@Param('id', ParseIntPipe) id: number): Promise<ZoneEntity> {
    return await this.zoneService.remove(id);
  }
}
