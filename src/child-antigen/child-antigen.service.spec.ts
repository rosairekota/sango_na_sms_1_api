import { Test, TestingModule } from '@nestjs/testing';
import { ChildAntigenService } from './child-antigen.service';

describe('ChildAntigenService', () => {
  let service: ChildAntigenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChildAntigenService],
    }).compile();

    service = module.get<ChildAntigenService>(ChildAntigenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
