import app from '../../src/app'

describe("'classrooms' service", () => {
  beforeAll(async () => {
    await app.service('classrooms').setup()
  })
  it('creates an element', async () => {
    const [c] = await app.service('classrooms').find({ paginate: false })
    expect(c._id).toEqual('main')
  })
  it('hooks tasks', async () => {
    const [c] = await app.service('classrooms').find({ paginate: false })
    expect(c.tasks).toBeTruthy()
  })
})
