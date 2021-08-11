import { Test, TestingModule } from '@nestjs/testing';
import { AireService } from './aire.service';

describe('AireService', () => {
  let service: AireService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AireService],
    }).compile();

    service = module.get<AireService>(AireService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
