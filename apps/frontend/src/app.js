import feathers from '@feathersjs/feathers'
import socketio from '@feathersjs/socketio-client'
import io from 'socket.io-client'
import reactive from 'feathers-reactive'

const app = (window.app = feathers())
app.configure(
  socketio(
    io('http://localhost:4242', {
      transports: ['websocket'] // don't try polling
    })
  )
)
app.configure(reactive({ idField: '_id' }))

export default app
