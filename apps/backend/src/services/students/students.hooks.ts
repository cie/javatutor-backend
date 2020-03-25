import { HookContext } from '@feathersjs/feathers'
import Joi from '@hapi/joi'
import validate from '@feathers-plus/validate-joi'
import { fastJoin } from 'feathers-hooks-common'
const schema = Joi.object().keys({
  serialNumber: Joi.number(),
  classroom: Joi.string()
})

const schemaOptions = {
  convert: true,
  abortEarly: false
}

const createSerialNumber = async (hook: HookContext) => {
  const [student] = await hook.service.find({
    query: { $sort: { serialNumber: -1 }, $limit: 1 },
    paginate: false
  })
  hook.data.serialNumber = (student?.serialNumber ?? 0) + 1
}

const setClassroom = (hook: HookContext) => {
  hook.data.classroom = 'main'
}

export default {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      createSerialNumber,
      setClassroom
      //validate.form(schema, schemaOptions)
    ],
    update: [validate.form(schema, schemaOptions)],
    patch: [validate.form(schema, schemaOptions)],
    remove: []
  },

  after: {
    all: [
      fastJoin({
        joins: {
          tasks: () => async (student, context) => {
            const classroom = await context.app
              .service('classrooms')
              .get(student.classroom)
            student.tasks = classroom.tasks
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
