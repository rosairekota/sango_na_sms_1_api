/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CentreEntity } from './centre.entity';
import { CentreService } from './centre.service';
import { AddCentreDto } from './dto/add-centre.dto';
import { ApiTags } from '@nestjs/swagger';
import { UpdateCentreDto } from './dto/update-centre.dto';

@ApiTags('Centres:')
@Controller('api/centre')
export class CentreController {
  constructor(private centreService: CentreService) {}

  @Post()
  async AddCentre(@Body() centre: AddCentreDto): Promise<CentreEntity> {
    return await this.centreService.addCentre(centre);
  }

  @Get()
  async getCentres(): Promise<CentreEntity[]> {
    return await this.centreService.getAllCenters();
  }

  @Patch('/:id')
  async edit(
    @Param('id', ParseIntPipe) id: number,
    @Body() editedCentre: UpdateCentreDto,
  ): Promise<CentreEntity> {
    return await this.centreService.update(id, editedCentre);
  }

  @Delete('/:id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<CentreEntity> {
    return await this.centreService.remove(id);
  }
}
