import { Test, TestingModule } from '@nestjs/testing';
import { ProvincialProfessionalController } from './provincial-professional.controller';

describe('ProvincialProfessionalController', () => {
  let controller: ProvincialProfessionalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProvincialProfessionalController],
    }).compile();

    controller = module.get<ProvincialProfessionalController>(ProvincialProfessionalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
