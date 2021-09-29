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
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SearchInterface } from 'src/helpers/search.interface';
import { ChildEntity } from './child.entity';
import { ChildService } from './child.service';
import { AddChildDto } from './dto/add-child.dto';
import { UpdateChildDto } from './dto/update-child.dto';
import { ChildSearchView } from './search/child-search.entity';
import { JwtAuthGuard } from 'src/auth/guard/jwt.guard';
import { User } from 'src/auth/decorator/user.decorator';

@ApiTags('Enfant:')
@Controller('api/enfant')
export class ChildController {
  constructor(private readonly childService: ChildService) {}
  @Post('flitrer_enfants')
  async filterChilds(
    @Body()
    newChildSearch: SearchInterface[],
  ): Promise<ChildSearchView[]> {
    return await this.childService.filterChildByAny(newChildSearch);
  }

  @Get('/childrenFromResponsible/:id')
  async getChildrenByResponsable(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<ChildEntity[]> {
    return await this.childService.findChildrenByResponsable(id);
  }
  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number): Promise<ChildEntity> {
    return await this.childService.findById(id);
  }
  @Post('enregistrer')
  async create(@Body() newChild: AddChildDto): Promise<ChildEntity> {
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
