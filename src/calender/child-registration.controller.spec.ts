import { Test, TestingModule } from '@nestjs/testing';
import { ChildRegistrationController } from './child-registration.controller';

describe('ChildRegistrationController', () => {
  let controller: ChildRegistrationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChildRegistrationController],
    }).compile();

    controller = module.get<ChildRegistrationController>(ChildRegistrationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
