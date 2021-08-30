/* eslint-disable prettier/prettier */
import {
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AddWomanInscriptionDto } from './dto/add-woman-inscription.dto';
import { UpdateWomanInscriptionDto } from './dto/update-woman-inscription.dto copy';
import { WomanInscriptionEntity } from './woman-inscription.entity';
import { WomanInscriptionService } from './woman-inscription.service';

@ApiTags('inscription femmes:')
@Controller('api/inscription_femme')
export class WomanInscriptionController {
  constructor(private womanInscriptionService: WomanInscriptionService) {}

  @Post()
  async create(
    inscription: AddWomanInscriptionDto,
  ): Promise<WomanInscriptionEntity> {
    return await this.womanInscriptionService.add(inscription);
  }

  @Delete('/:id')
  async remove(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<WomanInscriptionEntity> {
    return await this.womanInscriptionService.delete(id);
  }
  @Patch('/:id')
  async edit(
    @Param('id', ParseIntPipe) id: number,
    inscription: UpdateWomanInscriptionDto,
  ): Promise<WomanInscriptionEntity> {
    return await this.womanInscriptionService.update(id, inscription);
  }

  @Get()
  async getAll(): Promise<WomanInscriptionEntity[]> {
    return await this.womanInscriptionService.findAll();
  }
}
