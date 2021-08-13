import { Test, TestingModule } from '@nestjs/testing';
import { AntigenefemmeService } from './antigenefemme.service';

describe('AntigenefemmeService', () => {
  let service: AntigenefemmeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AntigenefemmeService],
    }).compile();

    service = module.get<AntigenefemmeService>(AntigenefemmeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
