import app from '../../src/app';

describe('\'classrooms\' service', () => {
  it('registered the service', () => {
    const service = app.service('classrooms');
    expect(service).toBeTruthy();
  });
});
