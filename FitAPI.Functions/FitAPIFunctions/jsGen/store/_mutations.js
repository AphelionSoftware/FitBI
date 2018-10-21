import {updateField} from 'vuex-map-fields'
import Vue from 'vue'
import localForage from 'localforage'
const mutations = {
  SET_FLAG (state, payload) {
    if (payload === false) {
      state.Flags.loaded = false
    } else if (payload === true) {
      state.Flags.loaded = true
    } else {
      state.Flags = {...state.Flags, ...payload}
    }
  },
  updateField
}

export default mutations
