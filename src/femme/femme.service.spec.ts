import { Test, TestingModule } from '@nestjs/testing';
import { FemmeService } from './femme.service';

describe('FemmeService', () => {
  let service: FemmeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FemmeService],
    }).compile();

    service = module.get<FemmeService>(FemmeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
