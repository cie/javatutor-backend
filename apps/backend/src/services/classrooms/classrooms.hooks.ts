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
            const tasks = await context.app.service('tasks').find({
              query: { _id: { $in: taskIds } },
              paginate: false
            })
            classroom.tasks = taskIds.map((id: string) =>
              tasks.find((t: any) => t._id == id)
            )
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
