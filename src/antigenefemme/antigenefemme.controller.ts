/* eslint-disable prettier/prettier */
<<<<<<< HEAD
import { Body, Controller, Delete, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { Repository } from 'typeorm';
=======
import {
  Body,
  Controller,
  Delete,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
>>>>>>> 0e5a467738bcee0122a3fc64bcf59a61f73a20da
import { AntigenefemmeEntity } from './antigenefemme.entity';
import { AntigenefemmeService } from './antigenefemme.service';
import { ApiTags } from '@nestjs/swagger';
import { Get } from '@nestjs/common';
import { AddAntigenWifeDto } from './dto/add_antigenWife.dto';
import { UpdateAntigenWifeDto } from './dto/update_anitgenWife.dto';
@ApiTags('antigene femme:')
@Controller('api/antigene_femme')
export class AntigenefemmeController {
  constructor(private wifeAntigenService: AntigenefemmeService) {}

<<<<<<< HEAD
    @Post()
    async addAntigenWife(@Body() antigen:AddAntigenWifeDto) : Promise<AntigenefemmeEntity>{
        return await this.wifeAntigenService.addAntigen(antigen);
    }

    @Delete('/:id')
    async remove(@Param('id',ParseIntPipe) id : number):Promise<AntigenefemmeEntity>{
        return await this.wifeAntigenService.deleteAntigen(id);
    }
    @Patch('/:id')
    async editAntigen(@Param('id',ParseIntPipe) id : number,@Body() editedAntigen : UpdateAntigenWifeDto) : Promise<AntigenefemmeEntity>{ 
        return await  this.wifeAntigenService.updateAntigen(id,editedAntigen);
    }
=======
  @Post()
  async addAntigenWife(
    @Body() antigen: AddAntigenWifeDto,
  ): Promise<AntigenefemmeEntity> {
    return await this.wifeAntigenService.addAntigen(antigen);
  }

  @Delete('/:id')
  async remove(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<AntigenefemmeEntity> {
    return await this.wifeAntigenService.deleteAntigen(id);
  }
  @Patch('/:id')
  async editAntigen(
    @Param('id', ParseIntPipe) id: number,
    @Body() editedAntigen: UpdateAntigenWifeDto,
  ): Promise<AntigenefemmeEntity> {
    return await this.wifeAntigenService.updateAntigen(id, editedAntigen);
  }
>>>>>>> 0e5a467738bcee0122a3fc64bcf59a61f73a20da

  @Get()
  async getAll(): Promise<AntigenefemmeEntity[]> {
    return await this.wifeAntigenService.findAntigenes();
  }
}
