/* eslint-disable prettier/prettier */
import { Body, Delete, Post } from '@nestjs/common';
import { Patch } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { ParseIntPipe } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { AntigenEntity } from './antigen.entity';
import { AntigenService } from './antigen.service';
import { AddAntigenDto } from './dto/add-antigen.dto';
import { UpdateAntigenDto } from './dto/update-antigen.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('antigene:')
@Controller('api/antigen')
export class AntigenController {
  constructor(private antigenService: AntigenService) {}

  @Get(':title')
  async getByTitle( @Param('title') title: string,): Promise<AntigenEntity[]> {
    return await this.antigenService.findByTitle(title);
  }

  @Post()
  async create(@Body() antigen: AddAntigenDto): Promise<AntigenEntity> {
    return await this.antigenService.add(antigen);
  }

  @Get('/:id')
  async getById(@Param('id') id: number): Promise<AntigenEntity> {
    return await this.antigenService.findById(id);
  }
  @Delete('/:id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<AntigenEntity> {
    return await this.antigenService.delete(id);
  }
  @Patch('/:id')
  async edit(
    @Param('id', ParseIntPipe) id: number,
    @Body() editedAntigen: UpdateAntigenDto,
  ): Promise<AntigenEntity> {
    return await this.antigenService.update(id, editedAntigen)
   
  }

  @Get()
  async getAll(): Promise<AntigenEntity[]> {
    return await this.antigenService.findAll();
  }
}
