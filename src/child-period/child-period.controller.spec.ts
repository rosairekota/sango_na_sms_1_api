import { Test, TestingModule } from '@nestjs/testing';
import { ChildPeriodController } from './child-period.controller';

describe('ChildPeriodController', () => {
  let controller: ChildPeriodController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChildPeriodController],
    }).compile();

    controller = module.get<ChildPeriodController>(ChildPeriodController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
