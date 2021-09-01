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
import { ChildRegistrationEntity } from './calendar.entity';
import { ChildRegistrationService } from './child-registration.service';
import { AddChildRegistrationDto } from './dto/add-calendar.dto';
import { UpdateChildRegistrationDto } from './dto/update-calendar.dto';

@ApiTags('inscription enfant:')
@Controller('api/enregistrement_enfant')
export class ChildRegistrationController {
  constructor(private childRegistrationService: ChildRegistrationService) {}

  @Post()
  async create(
    @Body() childRegistration: AddChildRegistrationDto,
  ): Promise<ChildRegistrationEntity> {
    return await this.childRegistrationService.add(childRegistration);
  }

  @Patch('/:id')
  async edit(
    @Param('id', ParseIntPipe) id: number,
    @Body() childRegistration: UpdateChildRegistrationDto,
  ): Promise<ChildRegistrationEntity> {
    return await this.childRegistrationService.update(id, childRegistration);
  }

  @Delete('/:id')
  async remove(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<ChildRegistrationEntity> {
    return await this.childRegistrationService.delete(id);
  }

  @Get()
  async getAll(): Promise<ChildRegistrationEntity[]> {
    return await this.childRegistrationService.findAll();
  }
}
