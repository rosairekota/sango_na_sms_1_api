import { Test, TestingModule } from '@nestjs/testing';
import { CalendarService } from './calendar.service';

describe('CalendarService', () => {
  let service: CalendarService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CalendarService],
    }).compile();

    service = module.get<CalendarService>(CalendarService);
  });

  it('should be defined', () => {
    expect(service.findAll).toBeDefined();
    expect(service.findById).toBeDefined();
    expect(service.add).toBeDefined();
    expect(service.update).toBeDefined();
    expect(service.delete).toBeDefined();
  });
});
