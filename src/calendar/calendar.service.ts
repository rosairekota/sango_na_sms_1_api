/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AntigenEntity } from 'src/antigen/antigen.entity';
import { PeriodEntity } from 'src/period/period.entity';
import { Repository } from 'typeorm';
import { CalendarEntity } from './calendar.entity';
import { AddCalenderDto } from './dto/add-calendar.dto';
import { UpdateCalenderDto } from './dto/update-calendar.dto';

@Injectable()
export class CalendarService {
  constructor(
    @InjectRepository(CalendarEntity)
    private calendarRepository: Repository<CalendarEntity>,

    @InjectRepository(AntigenEntity)
    private antigeRepository: Repository<AntigenEntity>,

    @InjectRepository(PeriodEntity)
    private periodeRepository: Repository<PeriodEntity>,
  ) {}

  async filterByAntigenAndPeriod() {
    const findCalendar = await this.calendarRepository
      .createQueryBuilder('calendar')
      .innerJoinAndSelect(PeriodEntity, 'period', 'calendar.period=period.id')
      .innerJoinAndSelect(
        AntigenEntity,
        'antigen',
        'calendar.antigen=antigen.id',
      )
      .getRawMany();

    return findCalendar;
  }


  async findAll(): Promise<CalendarEntity[]> {
    return await this.calendarRepository.find({relations:["period","antigen"]});
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
