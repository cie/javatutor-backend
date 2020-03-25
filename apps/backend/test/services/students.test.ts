import app from '../../src/app'

describe("'students' service", () => {
  it('adds tasks', async () => {
    const s = await app.service('students').create({})
    console.log(s.tasks)
    expect(s.tasks).toBeTruthy()
  })
})
