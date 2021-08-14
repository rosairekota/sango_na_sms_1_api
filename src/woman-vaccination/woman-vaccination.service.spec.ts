import { Test, TestingModule } from '@nestjs/testing';
import { WomanVaccinationService } from './woman-vaccination.service';

describe('WomanVaccinationService', () => {
  let service: WomanVaccinationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WomanVaccinationService],
    }).compile();

    service = module.get<WomanVaccinationService>(WomanVaccinationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
