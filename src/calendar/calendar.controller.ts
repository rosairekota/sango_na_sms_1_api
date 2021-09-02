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
import { CalendarEntity } from './calendar.entity';
import { CalendarService } from './calendar.service';
import { AddCalenderDto } from './dto/add-calendar.dto';
import { UpdateCalenderDto } from './dto/update-calendar.dto';

@ApiTags('Calendier')
@Controller('api/calendar')
export class CalendarController {
  constructor(private readonly calendarService: CalendarService) {}

  @Get()
  async getAll(): Promise<CalendarEntity[]> {
    return this.calendarService.findAll();
  }

  @Post()
  async create(@Body() newCalendar: AddCalenderDto): Promise<CalendarEntity> {
    return await this.calendarService.add(newCalendar);
  }
  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number) {
    return await this.calendarService.findById(id);
  }

  @Patch(':id')
  async edit(
    @Param('id', ParseIntPipe) id: number,
    @Body() caledar: UpdateCalenderDto,
  ): Promise<CalendarEntity> {
    return await this.calendarService.update(id, caledar);
  }
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return await this.calendarService.delete(id);
  }
}
