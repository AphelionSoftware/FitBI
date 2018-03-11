// import Vue from 'vue'
// import Vuex from 'vuex'
// import {_} from 'vue-underscore'
// Import the `getField` getter and the `updateField`
// mutation function from the `vuex-map-fields` module.
// import { getField, updateField } from 'vuex-map-fields'
// import { getField, updateField } from 'vuex-map-fields'

// Vue.use(Vuex)
// Vue.use(_)

const state = {
  AddAction: {},
  SaveAction: {},
  RightHandMenu: {}
}

// #region Getter
const getters = {
  Save: function (state, getters, rootState) {
    return state.SaveAction
  },
  Add: function (state, getters, rootState) {
    return state.AddAction
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
  },
  SET_ADD (state, payload) {
    state.AddAction = payload
  },
  CLEAR_ADD (state) {
    state.AddAction = {}
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
