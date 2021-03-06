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
import { AddProvinceDto } from './dto/add-province.dto';
import { UpdateProvinceDto } from './dto/update-province.dto';
import { ProvinceEntity } from './province.entity';
import { ProvinceService } from './province.service';
@ApiTags('Provinces:')
@Controller('api/province')
export class ProvinceController {
  constructor(private provinceService: ProvinceService) {}

  // Get all provinces
  @Get('/:labelProvince')
  async getProvinceByLabel(
    @Param('labelProvince') labelProvince: string,
  ): Promise<ProvinceEntity[]> {
    return await this.provinceService.getProvinceByLabel(labelProvince)
  }
  @Get()
  async getAllProvinces(): Promise<ProvinceEntity[]> {
    return await this.provinceService.getProvince();
  }
  // Get a province
  @Get(':id')
  async getProvinceById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<ProvinceEntity> {
    return await this.provinceService.getProvinceById(id);
  }

 
  // Add a province
  @Post()
  async addProvince(@Body() province: AddProvinceDto): Promise<ProvinceEntity> {
    return await this.provinceService.addProvince(province);
  }

  // Update province
  @Patch('/:id')
  async updateProvince(
    @Body() province: UpdateProvinceDto,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<ProvinceEntity> {
    return await this.provinceService.updateProvince(id, province);
  }

  // Delete a province
  @Delete('/:id')
  async removeProvince(@Param('id', ParseIntPipe) id: number) :Promise<ProvinceEntity>{
    return await this.provinceService.removeProvince(id);
  }
}
