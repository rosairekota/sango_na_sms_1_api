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
import { ApiTags } from '@nestjs/swagger';
import { ChildSearchView } from 'src/child/search/child-search.entity';
import { SearchInterface } from 'src/helpers/search.interface';
import { AddWifeDto } from './dto/Add-Wife.dto';
import { UpdateWifeDto } from './dto/Update-wife.dto';
import { FemmeEntity } from './femme.entity';
import { FemmeService } from './femme.service';
@ApiTags('femme:')
@Controller('api/femme')
export class FemmeController {
  constructor(private wifeService: FemmeService) {}

  @Get()
  async getAllWives(): Promise<FemmeEntity[]> {
    return await this.wifeService.getWives();
  }
  @Post('flitrer_femmes')
  async filterWifes(
    @Body() newChildSearch: SearchInterface[],
  ): Promise<ChildSearchView[]> {
    return await this.filterWifes(newChildSearch);
  }
  @Post()
  async addWife(@Body() wife: AddWifeDto): Promise<FemmeEntity> {
    console.log(wife);
    return await this.wifeService.addWife(wife);
  }

  @Patch('/:id')
  async updateWife(
    @Param('id', ParseIntPipe) id: number,
    @Body() wife: UpdateWifeDto,
  ): Promise<FemmeEntity> {
    return await this.wifeService.editWife(id, wife);
  }

  @Delete('/:id')
  async deleteWife(@Param('id', ParseIntPipe) id: number) {
    return await this.wifeService.deleteWife(id);
  }
}
