import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CalendarEntity } from './calendar.entity';
import { AddCalenderDto } from './dto/add-calendar.dto';
import { UpdateCalenderDto } from './dto/update-calendar.dto';

@Injectable()
export class CalendarService {
  constructor(
    @InjectRepository(CalendarEntity)
    private calendarRepository: Repository<CalendarEntity>,
  ) {}

  async findAll(): Promise<CalendarEntity[]> {
    return await this.calendarRepository.find({relations:["period"]});
  }
  async add(calendar: AddCalenderDto): Promise<CalendarEntity> {
    return await this.calendarRepository.save(calendar);
  }

  async findById(id: number): Promise<CalendarEntity> {
    const calendar = await this.calendarRepository.findOne(id);
    if (calendar) return calendar;
    throw new NotFoundException("Ce calendrier n'existe pas !");
  }
  async update(
    id: number,
    calendar: Partial<UpdateCalenderDto>,
  ): Promise<CalendarEntity> {
    const entity = await this.calendarRepository.preload({
      id,
      ...calendar,
    });
    return await this.calendarRepository.save(entity);
  }
  async delete(id: number): Promise<CalendarEntity> {
    const calendar = await this.findById(id);
    return await this.calendarRepository.remove(calendar);
  }
}
