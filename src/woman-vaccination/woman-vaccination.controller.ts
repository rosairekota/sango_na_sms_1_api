/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AddWomanVaccinationDto } from './dto/add-woman-vaccination.dto';
import { UpdateWomanVaccinationDto } from './dto/update-woman-vaccination.dto';
import { WomanVaccinationEntity } from './woman-vaccination.entity';
import { WomanVaccinationService } from './woman-vaccination.service';

@ApiTags('woman-vaccinations')
@Controller('api/Woman-vaccinations')
export class WomanVaccinationController {
    constructor(
        private womanVaccinationService:WomanVaccinationService
    ){}

    @Post()
    async create(@Body() womanVaccination:AddWomanVaccinationDto):Promise<WomanVaccinationEntity>{
        return await this.womanVaccinationService.add(womanVaccination)
    }

    @Delete('/:id')
    async remove(@Param('id',ParseIntPipe) id:number) : Promise<WomanVaccinationEntity> {
        return await this.womanVaccinationService.delete(id);
    }   
    @Patch('/:id')
<<<<<<< HEAD
    async edit(@Param('id',ParseIntPipe) id:number, womanVaccination : UpdateWomanVaccinationDto) : Promise<WomanVaccinationEntity> {
=======
    async edit(@Param('id',ParseIntPipe) id:number,@Body() womanVaccination : UpdateWomanVaccinationDto) : Promise<WomanVaccinationEntity> {
>>>>>>> feature/inscription_femme
        return await this.womanVaccinationService.update(id,womanVaccination);
    }   

    @Get()
    async getAll():Promise<WomanVaccinationEntity[]>{
        return await this.womanVaccinationService.findAll()
    }
}
