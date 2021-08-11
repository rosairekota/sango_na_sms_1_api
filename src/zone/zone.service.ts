import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ZoneEntity } from './zone.entity';

@Injectable()
export class ZoneService {
  constructor(
    @InjectRepository(ZoneEntity)
    private readonly zoneRepository: Repository<ZoneEntity>,
  ) {}
}
