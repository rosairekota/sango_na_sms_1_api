import { Test, TestingModule } from '@nestjs/testing';
import { WomanInscriptionController } from './woman-inscription.controller';

describe('WomanInscriptionController', () => {
  let controller: WomanInscriptionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WomanInscriptionController],
    }).compile();

    controller = module.get<WomanInscriptionController>(WomanInscriptionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
