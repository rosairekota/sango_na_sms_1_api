import { Test, TestingModule } from '@nestjs/testing';
import { WomanVaccinationController } from './woman-vaccination.controller';

describe('WomanVaccinationController', () => {
  let controller: WomanVaccinationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WomanVaccinationController],
    }).compile();

    controller = module.get<WomanVaccinationController>(WomanVaccinationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
