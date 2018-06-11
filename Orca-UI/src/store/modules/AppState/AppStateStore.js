import Vue from 'vue'
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
  RightHandMenu: {},
  TitleText: '',
  Error: false,
  Flags: {
    Loaded: false,
    Saved: false,
    InProgress: false,
    Failed: false
  }
}

// #region Getter
const getters = {
  Save: function (state, getters, rootState) {
    return state.SaveAction
  },
  Add: function (state, getters, rootState) {
    return state.AddAction
  },
  TitleText: function (state, getters, rootState) {
    return state.TitleText
  },
  GetFlags: function (state) {
    return state.Flags
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
  },
  SET_TITLETEXT (state, payload) {
    state.TitleText = payload
  },
  CLEAR_TITLETEXT (state) {
    state.TitleText = ''
  },
  SET_APIFLAG_PROPERTY (state, payload) {
    if (typeof payload.Loaded !== 'undefined') Vue.set(state.Flags, 'Loaded', payload.Loaded)
    if (typeof payload.Saved !== 'undefined') Vue.set(state.Flags, 'Saved', payload.Saved)
    if (typeof payload.InProgress !== 'undefined') Vue.set(state.Flags, 'InProgress', payload.InProgress)
    if (typeof payload.Failed !== 'undefined') Vue.set(state.Flags, 'Failed', payload.Failed)
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
