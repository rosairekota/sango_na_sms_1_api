import { Test, TestingModule } from '@nestjs/testing';
import { CenterProfessionalService } from './center-professional.service';

describe('CenterProfessionalService', () => {
  let service: CenterProfessionalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CenterProfessionalService],
    }).compile();

    service = module.get<CenterProfessionalService>(CenterProfessionalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
