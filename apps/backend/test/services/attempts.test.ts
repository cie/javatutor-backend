import app from '../../src/app';

describe('\'attempts\' service', () => {
  it('registered the service', () => {
    const service = app.service('attempts');
    expect(service).toBeTruthy();
  });
});
