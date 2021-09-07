/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  ParseIntPipe,
  Patch,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AddResponsibleDto } from 'src/responsible/dto/add-responsible.dto';
import { ResponsibleEntity } from 'src/responsible/responsible.entity';
import { ChildEntity } from './child.entity';
import { ChildService } from './child.service';
import { AddChildDto } from './dto/add-child.dto';
import { UpdateChildDto } from './dto/update-child.dto';
@ApiTags('Enfant:')
@Controller('api/enfant')
export class ChildController {
  constructor(private readonly childService: ChildService) {}
  @Get('childrenFromResponsible')
  async getChildrenByResponsable(@Body() responsable :ResponsibleEntity): Promise<ChildEntity[]> {
    console.log("heheheheh")
    return  await this.childService.findChildrenByResponsable(responsable);
  }
  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number): Promise<ChildEntity> {
    console.log("childee")
    return await this.childService.findById(id);
  }
  @Post()
  async create(@Body() newChild: AddChildDto): Promise<ChildEntity> {
    console.log("ozozo")
    return await this.childService.add(newChild);
  }

  @Patch()
  async edit(
    @Param('id', ParseIntPipe) id: number,
    @Body() partialChild: Partial<UpdateChildDto>,
  ): Promise<ChildEntity> {
    return await this.childService.update(id, partialChild);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return await this.childService.delete(id);
  }
  @Get()
  async getAll(): Promise<ChildEntity[]> {
    console.log("childeeZZZ")
    return this.childService.findAll();
  }
  
}
