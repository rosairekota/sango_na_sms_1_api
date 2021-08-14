import {
  Controller,
  Get,
  Post,
  Delete,
  Patch,
  Body,
  ParseIntPipe,
  Param,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ChildPeriodEntity } from './child-perio.entity';
import { ChildPeriodService } from './child-period.service';
import { AddChildPeriodDto } from './dto/add-child-period.dto';
import { UpdateChildPeriodDto } from './dto/update-child.dto';

@ApiTags('periodes_enfant:')
@Controller('api/period_enfant')
export class ChildPeriodController {
  constructor(private readonly childPeriodService: ChildPeriodService) {}
  @Get()
  async getAllChildPeriods(): Promise<ChildPeriodEntity[]> {
    return await this.childPeriodService.findAll();
  }

  @Get('/:id')
  async getChildPeriodById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<ChildPeriodEntity> {
    return await this.childPeriodService.findById(id);
  }
  @Post()
  async addChildPeriod(
    @Body() newChildPeriod: AddChildPeriodDto,
  ): Promise<ChildPeriodEntity> {
    return await this.childPeriodService.add(newChildPeriod);
  }

  @Patch('/:id')
  async updateChildPeriod(
    @Param('id', ParseIntPipe) id: number,
    @Body() childPeriod: Partial<UpdateChildPeriodDto>,
  ): Promise<ChildPeriodEntity> {
    return await this.childPeriodService.update(id, childPeriod);
  }
  @Delete(':id')
  async deleteChildPeriod(@Param('id', ParseIntPipe) id: number) {
    return await this.childPeriodService.delete(id);
  }
}
