import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'uno.css'
import store from './store'

createApp(App)
  .use(store)
  .mount('#app')
