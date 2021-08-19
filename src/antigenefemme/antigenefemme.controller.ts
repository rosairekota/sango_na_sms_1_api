/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { Repository } from 'typeorm';
import { AntigenefemmeEntity } from './antigenefemme.entity';
import { AntigenefemmeService } from './antigenefemme.service';
import { ApiTags } from '@nestjs/swagger';
import { FemmeEntity } from 'src/femme/femme.entity';
import { Get } from '@nestjs/common';
import { AddAntigenWifeDto } from './dto/add_antigenWife.dto';
import { UpdateAntigenWifeDto } from './dto/update_anitgenWife.dto';
@ApiTags('antigenefemme:')
@Controller('api/antigenefemme')
@Controller('antigenefemme')
export class AntigenefemmeController {
  constructor(private wifeAntigenService: AntigenefemmeService) {}

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

  @Get()
  async getAll(): Promise<AntigenefemmeEntity[]> {
    return await this.wifeAntigenService.findAntigenes();
  }
}
