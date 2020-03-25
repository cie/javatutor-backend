import { HookContext } from '@feathersjs/feathers'
import { fastJoin } from 'feathers-hooks-common'

const addTaskIds = (hook: HookContext) => {
  if (!hook.result.taskIds) hook.result.taskIds = []
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
    all: [
      addTaskIds,
      fastJoin({
        joins: {
          tasks: () => async (classroom, context) => {
            const taskIds = classroom.taskIds || []
            classroom.tasks = await context.app
              .service('tasks')
              .find({ query: { id: { $in: taskIds } }, paginate: false })
          }
        }
      })
    ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
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
