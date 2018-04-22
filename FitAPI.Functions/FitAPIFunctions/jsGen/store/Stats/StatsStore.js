import baseActions from './StatsActions'
import baseState from './StatsState'
import baseMutations from './StatsMutations'
import baseGetters from './StatsGetters'

import customActions from './CustomStatsActions'
import customState from './CustomStatsState'
import customMutations from './CustomStatsMutations'
import customGetters from './CustomStatsGetters'

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
