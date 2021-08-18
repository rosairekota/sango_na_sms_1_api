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
import { ProfessionalEntity } from './professional.entity';
import { ProfessionalService } from './professional.service';
import { UpdateProfessionalDto } from './dto/update-professional.dto';
import { AddProfessionalDto } from './dto/add-professional.dto';

@ApiTags('professionel de santé:')
@Controller('api/professionel')
export class ProfessionalController {
  constructor(private readonly professionalService: ProfessionalService) {}

  @Get()
  async getAll(): Promise<ProfessionalEntity[]> {
    return await this.professionalService.findAll();
  }

  @Post()
  async create(
    @Body() newProfessional: AddProfessionalDto,
  ): Promise<ProfessionalEntity> {
    return await this.professionalService.add(newProfessional);
  }

  @Get(':id')
  async getById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<ProfessionalEntity> {
    return await this.professionalService.findById(id);
  }

  @Patch(':id')
  async edit(
    @Param('id', ParseIntPipe) id: number,
    @Body() professional: UpdateProfessionalDto,
  ): Promise<ProfessionalEntity> {
    return await this.professionalService.update(id, professional);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return await this.professionalService.delete(id);
  }
}
