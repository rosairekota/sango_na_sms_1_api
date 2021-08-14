import { Test, TestingModule } from '@nestjs/testing';
import { FemmeController } from './femme.controller';

describe('FemmeController', () => {
  let controller: FemmeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FemmeController],
    }).compile();

    controller = module.get<FemmeController>(FemmeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
