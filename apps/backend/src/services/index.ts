import { Application } from '../declarations';
import todos from './todos/todos.service';
import todolists from './todolists/todolists.service';
import tasks from './tasks/tasks.service';
import students from './students/students.service';
import events from './events/events.service';
import attempts from './attempts/attempts.service';
import classrooms from './classrooms/classrooms.service';
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application) {
  app.configure(todos);
  app.configure(todolists);
  app.configure(tasks);
  app.configure(students);
  app.configure(events);
  app.configure(attempts);
  app.configure(classrooms);
}
