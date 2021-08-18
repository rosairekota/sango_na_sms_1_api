import { Test, TestingModule } from '@nestjs/testing';
import { ChildRegistrationService } from './child-registration.service';

describe('ChildRegistrationService', () => {
  let service: ChildRegistrationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChildRegistrationService],
    }).compile();

    service = module.get<ChildRegistrationService>(ChildRegistrationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
