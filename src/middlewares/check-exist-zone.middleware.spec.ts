import { CheckExistZoneMiddleware } from './check-exist-zone.middleware';

describe('CheckExistZoneMiddleware', () => {
  it('should be defined', () => {
    expect(new CheckExistZoneMiddleware()).toBeDefined();
  });
});
