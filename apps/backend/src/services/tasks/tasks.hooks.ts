import { HookContext } from '@feathersjs/feathers'
const removeFromClassrooms = async (hook: HookContext) => {
  const classrooms = await hook.app
    .service('classrooms')
    .find({ query: { taskIds: hook.result._id }, paginate: false })
  classrooms.forEach((classroom: any) => {
    hook.app.service('classrooms').patch(classroom._id, {
      taskIds: classroom.taskIds.filter((id: string) => id != hook.result._id)
    })
  })
}
export default {
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [removeFromClassrooms]
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
}
