import { Test, TestingModule } from '@nestjs/testing';
import { AireController } from './aire.controller';

describe('AireController', () => {
  let controller: AireController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AireController],
    }).compile();

    controller = module.get<AireController>(AireController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
