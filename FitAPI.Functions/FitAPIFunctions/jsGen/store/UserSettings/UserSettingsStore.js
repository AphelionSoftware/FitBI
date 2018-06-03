import baseActions from './UserSettingsActions'
import baseState from './UserSettingsState'
import baseMutations from './UserSettingsMutations'
import baseGetters from './UserSettingsGetters'

import customActions from './CustomUserSettingsActions'
import customState from './CustomUserSettingsState'
import customMutations from './CustomUserSettingsMutations'
import customGetters from './CustomUserSettingsGetters'

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
