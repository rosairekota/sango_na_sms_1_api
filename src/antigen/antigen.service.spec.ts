import { Test, TestingModule } from '@nestjs/testing';
import { AntigenService } from './antigen.service';

describe('AntigenService', () => {
  let service: AntigenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AntigenService],
    }).compile();

    service = module.get<AntigenService>(AntigenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
