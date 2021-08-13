import { Test, TestingModule } from '@nestjs/testing';
import { AntigenefemmeController } from './antigenefemme.controller';

describe('AntigenefemmeController', () => {
  let controller: AntigenefemmeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AntigenefemmeController],
    }).compile();

    controller = module.get<AntigenefemmeController>(AntigenefemmeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
