import baseActions from './CoreActions'
import baseState from './CoreState'
import baseMutations from './CoreMutations'
import baseGetters from './CoreGetters'

import customActions from './CustomCoreActions'
import customState from './CustomCoreState'
import customMutations from './CustomCoreMutations'
import customGetters from './CustomCoreGetters'

const actions = {...baseActions, ...customActions}
const state = {...baseState, ...customState}
const mutations = {...baseMutations, ...customMutations}
const getters = {...baseGetters, ...customGetters}

const store = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

export default store
