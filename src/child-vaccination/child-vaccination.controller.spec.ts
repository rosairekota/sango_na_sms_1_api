import { Test, TestingModule } from '@nestjs/testing';
import { ChildVaccinationController } from './child-vaccination.controller';

describe('ChildVaccinationController', () => {
  let controller: ChildVaccinationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChildVaccinationController],
    }).compile();

    controller = module.get<ChildVaccinationController>(ChildVaccinationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
