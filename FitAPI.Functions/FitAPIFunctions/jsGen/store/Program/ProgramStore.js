import baseActions from './ProgramActions'
import baseState from './ProgramState'
import baseMutations from './ProgramMutations'
import baseGetters from './ProgramGetters'

import customActions from './CustomProgramActions'
import customState from './CustomProgramState'
import customMutations from './CustomProgramMutations'
import customGetters from './CustomProgramGetters'

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
