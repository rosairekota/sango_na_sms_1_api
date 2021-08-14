import { Test, TestingModule } from '@nestjs/testing';
import { WomanInscriptionService } from './woman-inscription.service';

describe('WomanInscriptionService', () => {
  let service: WomanInscriptionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WomanInscriptionService],
    }).compile();

    service = module.get<WomanInscriptionService>(WomanInscriptionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
