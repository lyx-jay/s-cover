import { createStore } from 'vuex'
import logo from './logo'

const store = createStore({
  modules: {
    logo: logo
  }
})

export default store
