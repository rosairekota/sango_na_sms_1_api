import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  ParseIntPipe,
  Param,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ChildVaccinationEntity } from './child-vaccination.entity';
import { ChildVaccinationService } from './child-vaccination.service';
import { AddChildVaccinationDto } from './dto/add-child-vaccination.dto';
import { UpdateChildVaccinationDto } from './dto/update-child-vaccination.dto';
@ApiTags('vaccination enfant:')
@Controller('vaccination_enfant')
export class ChildVaccinationController {
  constructor(
    private readonly childVaccinationService: ChildVaccinationService,
  ) {}
  @Get()
  async getAll(): Promise<ChildVaccinationEntity[]> {
    return await this.childVaccinationService.findAll();
  }
  @Post()
  async create(
    @Body() newDto: AddChildVaccinationDto,
  ): Promise<ChildVaccinationEntity> {
    return await this.childVaccinationService.add(newDto);
  }
  @Patch()
  async edit(
    @Param('id', ParseIntPipe) id: number,
    @Body() newDto: UpdateChildVaccinationDto,
  ): Promise<ChildVaccinationEntity> {
    return await this.childVaccinationService.Update(id, newDto);
  }
  @Delete()
  async remove(@Param('id', ParseIntPipe) id: number) {
    return await this.childVaccinationService.delete(id);
  }
}
