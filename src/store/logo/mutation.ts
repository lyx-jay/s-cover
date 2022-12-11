import * as actionTypes from './mutation-types'
import { LogoNameType } from './types'

export default {
  [actionTypes.setLogoName](state: LogoNameType, name: string) {
    state.logoName = name
  }
}