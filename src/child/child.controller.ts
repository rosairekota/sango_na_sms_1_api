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
import { ChildEntity } from './child.entity';
import { ChildService } from './child.service';
import { AddChildDto } from './dto/add-child.dto';
import { UpdateChildDto } from './dto/update-child.dto';
@ApiTags('Enfant:')
@Controller('api/enfant')
export class ChildController {
  constructor(private readonly childService: ChildService) {}
  @Get()
  async getAll(): Promise<ChildEntity[]> {
    return this.childService.findAll();
  }
  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number): Promise<ChildEntity> {
    return await this.childService.findById(id);
  }
  @Post()
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
}
