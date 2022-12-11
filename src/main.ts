import 'uno.css'
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import './style.css'

const app = createApp(App)
app.provide('$canvas', null)
app.use(store)
  .mount('#app')
