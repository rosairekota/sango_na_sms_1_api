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
import { AddProncialProfessionalDto } from './dto/add-proncial-professional.dto';
import { UpdateProncialProfessionalDto } from './dto/update-proncial-professional.dto';
import { ProvincialProfessionalEntity } from './provincial-professional.entity';
import { ProvincialProfessionalService } from './provincial-professional.service';

@ApiTags('prossionel provincial:')
@Controller('provincial-professional')
export class ProvincialProfessionalController {
  constructor(
    private readonly provProfessionalService: ProvincialProfessionalService,
  ) {}
  @Get()
  async getAll(): Promise<ProvincialProfessionalEntity[]> {
    return await this.provProfessionalService.findAll();
  }
  @Post()
  async create(
    @Body() dto: AddProncialProfessionalDto,
  ): Promise<ProvincialProfessionalEntity> {
    return await this.provProfessionalService.add(dto);
  }

  @Get(':id')
  async getById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<ProvincialProfessionalEntity> {
    return await this.provProfessionalService.findById(id);
  }

  @Get(':id')
  async edit(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: Partial<UpdateProncialProfessionalDto>,
  ): Promise<ProvincialProfessionalEntity> {
    return await this.provProfessionalService.update(id, dto);
  }
  @Get(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return await this.provProfessionalService.delete(id);
  }
}
