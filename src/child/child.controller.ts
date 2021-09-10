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
import { ResponsibleEntity } from 'src/responsible/responsible.entity';
import { ChildEntity } from './child.entity';
import { ChildService } from './child.service';
import { AddChildDto } from './dto/add-child.dto';
import { UpdateChildDto } from './dto/update-child.dto';
import { ChildSearchView } from './search/child-search.entity';
import { childSearchInterface } from './search/childSearch.interface';
@ApiTags('Enfant:')
@Controller('api/enfant')
export class ChildController {
  constructor(private readonly childService: ChildService) {}
<<<<<<< HEAD
  @Get('/childrenFromResponsible/:id')
  async getChildrenByResponsable(@Param('id',ParseIntPipe) id : number): Promise<ChildEntity[]> {

    return  await this.childService.findChildrenByResponsable(id);
  }
  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number): Promise<ChildEntity> {
=======
  @Post('flitrer_enfants')
  async filterChilds(
    @Body() newChildSearch: childSearchInterface[],
  ): Promise<ChildSearchView[]> {
    return await this.childService.filterChildByAny(newChildSearch);
  }

  @Get('childrenFromResponsible')
  async getChildrenByResponsable(
    @Body() responsable: ResponsibleEntity,
  ): Promise<ChildEntity[]> {
    return await this.childService.findChildrenByResponsable(responsable);
  }
  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number): Promise<ChildEntity> {
    console.log('childee');
>>>>>>> eea50a0887ddde4bb674ffab1a2211579e65f939
    return await this.childService.findById(id);
  }
  @Post()
  async create(@Body() newChild: AddChildDto): Promise<ChildEntity> {
<<<<<<< HEAD
=======
    console.log('ozozo');
>>>>>>> eea50a0887ddde4bb674ffab1a2211579e65f939
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
    console.log('childeeZZZ');
    return this.childService.findAll();
  }
}
