import * as actionTypes from './mutation-types'
import type { Commit } from 'vuex'


export const setLogoName = ({ commit }: { commit: Commit }, name: string) => {
  commit(actionTypes.setLogoName, name)
}
