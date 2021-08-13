/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { AireEntity } from './aire.entity';
import { AireService } from './aire.service';
import { AddAireDto } from './dto/add-aire.dto';
import { ApiTags } from '@nestjs/swagger';
import { pipeline } from 'stream';
import { UpdateAireDto } from './dto/update-aire.dto';

@ApiTags('aires:')
@Controller('api/aire')
export class AireController {
  constructor(private aireService: AireService) {}

  @Get()
  async getAllAires(): Promise<AireEntity[]> {
    return await this.aireService.getAires();
  }

  @Post()
  async addAire(@Body() addAireDto: AddAireDto) {
    return await this.aireService.addAire(addAireDto);
  }

  @Patch('/:id')
  async editAire( @Param('id',ParseIntPipe) id : number, @Body() editedAire : UpdateAireDto) : Promise<AireEntity>{
    return await this.aireService.updateAire(id,editedAire);
  }
  
  @Delete('/:id')
  async deleteAire(@Param('id',ParseIntPipe) id : number) : Promise<AireEntity>{
    return await this.aireService.deleteAire(id)
  }
}
