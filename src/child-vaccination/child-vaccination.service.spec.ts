import { Test, TestingModule } from '@nestjs/testing';
import { ChildVaccinationService } from './child-vaccination.service';

describe('ChildVaccinationService', () => {
  let service: ChildVaccinationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChildVaccinationService],
    }).compile();

    service = module.get<ChildVaccinationService>(ChildVaccinationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
