import { Service, NedbServiceOptions } from 'feathers-nedb'
import { Application } from '../../declarations'

export class Classrooms extends Service {
  constructor (options: Partial<NedbServiceOptions>, app: Application) {
    super(options)
  }
  async setup () {
    const [classroom] = (await this.find({ paginate: false })) as any[]
    if (!classroom) {
      const c = await this.create({ _id: 'main' })
    }
  }
}
