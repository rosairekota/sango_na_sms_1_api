import { Test, TestingModule } from '@nestjs/testing';
import { CenterProfessionalController } from './center-professional.controller';

describe('CenterProfessionalController', () => {
  let controller: CenterProfessionalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CenterProfessionalController],
    }).compile();

    controller = module.get<CenterProfessionalController>(CenterProfessionalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
