import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  ParseIntPipe,
  Body,
  Param,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CenterProfessionalEntity } from './center-professional.entity';
import { CenterProfessionalService } from './center-professional.service';
import { AddCenterProfessionalDto } from './dto/add-center-professional.dto';
import { UpdateCenterProfessionalDto } from './dto/update-center-professional.dto';

@ApiTags('professionel_centre')
@Controller('api/center-professional')
export class CenterProfessionalController {
  constructor(
    private readonly centerProfessionalService: CenterProfessionalService,
  ) {}
  @Get()
  async getAll(): Promise<CenterProfessionalEntity[]> {
    return await this.centerProfessionalService.findAll();
  }
  @Post()
  async create(
    @Body() dto: AddCenterProfessionalDto,
  ): Promise<CenterProfessionalEntity> {
    return await this.centerProfessionalService.add(dto);
  }

  @Get(':id')
  async getById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<CenterProfessionalEntity> {
    return await this.centerProfessionalService.findById(id);
  }

  @Patch(':id')
  async edit(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: Partial<UpdateCenterProfessionalDto>,
  ): Promise<CenterProfessionalEntity> {
    return await this.centerProfessionalService.update(id, dto);
  }
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return await this.centerProfessionalService.delete(id);
  }
}
