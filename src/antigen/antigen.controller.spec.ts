import { Test, TestingModule } from '@nestjs/testing';
import { AntigenController } from './antigen.controller';

describe('AntigenController', () => {
  let controller: AntigenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AntigenController],
    }).compile();

    controller = module.get<AntigenController>(AntigenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
