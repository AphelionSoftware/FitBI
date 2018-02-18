// import Vue from 'vue'
// import Vuex from 'vuex'
// import {_} from 'vue-underscore'
// Import the `getField` getter and the `updateField`
// mutation function from the `vuex-map-fields` module.
// import { getField, updateField } from '../../../helpers/vuex-map-fields/index'
// import { getField, updateField } from 'vuex-map-fields'

// Vue.use(Vuex)
// Vue.use(_)

const state = {
  SaveAction: {},
  RightHandMenu: {}
}

// #region Getter
const getters = {
  Save: function (state, getters, rootState) {
    return state.SaveAction
  }
}
// #endregion

// #region Mutations
const mutations = {
  SET_SAVE (state, payload) {
    state.SaveAction = payload
  },
  CLEAR_SAVE (state) {
    state.SaveAction = {}
  }
}
// #endregion

const store = {
  namespaced: true,
  state,
  getters,
  mutations
}

export default store
