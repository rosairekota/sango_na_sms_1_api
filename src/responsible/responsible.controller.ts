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
import { AddResponsibleDto } from './dto/add-responsible.dto';
import { UpdateResponsibleDto } from './dto/update-responsible.dto';
import { ResponsibleEntity } from './responsible.entity';
import { ResponsibleService } from './responsible.service';

@ApiTags('Responsibles')
@Controller('api/responsable')
export class ResponsibleController {
  constructor(private responsibleSerive: ResponsibleService) {}

  @Post()
  async create(
    @Body() responsible: AddResponsibleDto,
  ): Promise<ResponsibleEntity> {
    return await this.responsibleSerive.add(responsible);
  }
  @Patch('/:id')
  async edit(
    @Param('id', ParseIntPipe) id: number,
    @Body() responsible: UpdateResponsibleDto,
  ): Promise<ResponsibleEntity> {
    return await this.responsibleSerive.update(id, responsible);
  }
  @Delete('/:id')
  async remove(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<ResponsibleEntity> {
    return await this.responsibleSerive.delete(id);
  }

  @Get()
  async getAll(): Promise<ResponsibleEntity[]> {
    return await this.responsibleSerive.findAll();
  }
}
