import { Test, TestingModule } from '@nestjs/testing';
import { ChildPeriodService } from './child-period.service';

describe('ChildPeriodService', () => {
  let service: ChildPeriodService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChildPeriodService],
    }).compile();

    service = module.get<ChildPeriodService>(ChildPeriodService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
