import { Test, TestingModule } from '@nestjs/testing';
import { ChildAntigenController } from './child-antigen.controller';

describe('ChildAntigenController', () => {
  let controller: ChildAntigenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChildAntigenController],
    }).compile();

    controller = module.get<ChildAntigenController>(ChildAntigenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
