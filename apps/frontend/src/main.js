import App from './App.html'

window.addEventListener('unhandledrejection', event => {
  console.log(event.reason)
  if (event.reason.errors) {
    alert(Object.values(event.reason.errors).join('\n'))
  } else if (event.message) {
    alert(`internal error ${event.message}`)
  }
})

export default new App({
  target: document.body,
  props: {
    name: 'world'
  }
})
