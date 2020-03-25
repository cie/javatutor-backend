// Initializes the `attempts` service on path `/attempts`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Attempts } from './attempts.class';
import createModel from '../../models/attempts.model';
import hooks from './attempts.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'attempts': Attempts & ServiceAddons<any>;
  }
}

export default function (app: Application) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/attempts', new Attempts(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('attempts');

  service.hooks(hooks);
}
