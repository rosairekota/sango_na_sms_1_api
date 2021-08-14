import { Test, TestingModule } from '@nestjs/testing';
import { WifeperiodService } from './wifeperiod.service';

describe('WifeperiodService', () => {
  let service: WifeperiodService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WifeperiodService],
    }).compile();

    service = module.get<WifeperiodService>(WifeperiodService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
