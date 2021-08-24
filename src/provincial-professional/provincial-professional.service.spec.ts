import { Test, TestingModule } from '@nestjs/testing';
import { ProvincialProfessionalService } from './provincial-professional.service';

describe('ProvincialProfessionalService', () => {
  let service: ProvincialProfessionalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProvincialProfessionalService],
    }).compile();

    service = module.get<ProvincialProfessionalService>(ProvincialProfessionalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
