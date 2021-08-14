/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { WifeperiodController } from './wifeperiod.controller';

describe('WifeperiodController', () => {
  let controller: WifeperiodController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WifeperiodController],
    }).compile();

    controller = module.get<WifeperiodController>(WifeperiodController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
