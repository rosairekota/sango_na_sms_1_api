/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ChildAntigenService } from './child-antigen.service';
import { ChildAntigenEntity } from './child-antigen.entity';
import { AddchildAntigenDto } from './dto/addchild-antigen.dto';
import { UpdatechildAntigenDto } from './dto/updatechild-antigen.dto';
@ApiTags('Antiges enfant:')
@Controller('api/antigene_enfant')
export class ChildAntigenController {
  constructor(private readonly childAntigenService: ChildAntigenService) {}
  @Get()
  async getAll(): Promise<ChildAntigenEntity[]> {
    return await this.childAntigenService.findAll();
  }
  @Get('/:id')
  async getById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<ChildAntigenEntity> {
    return await this.childAntigenService.findById(id);
  }
  @Post()
  async create(
    @Body() newChildAntigen: AddchildAntigenDto,
  ): Promise<ChildAntigenEntity> {
    return await this.childAntigenService.add(newChildAntigen);
  }
  @Patch('/:id')
  async edit(
    @Param('id', ParseIntPipe) id: number,
    @Body() childAntigen: Partial<UpdatechildAntigenDto>,
  ) {
    return await this.childAntigenService.update(id, childAntigen);
  }
  @Delete('/:id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return await this.childAntigenService.delete(id);
  }
}
