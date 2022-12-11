import { LogoNameType } from './types'
import * as actions from './action'
import mutations from './mutation'

const state: LogoNameType = {
  logoName: ''
}


export default {
  state,
  mutations,
  actions
}