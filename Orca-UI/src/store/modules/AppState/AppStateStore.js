import Vue from 'vue'
import localForage from 'localforage'
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
  TitleAction: function () {},
  Error: false,
  Flags: {
    Loaded: false,
    Saved: false,
    InProgress: false,
    Failed: false
  },
  initTimeStamp: 0x0000000000000000,
  initExpiry: new Date('1 Jan 2000'),
  coreTimeStamp: 0x0000000000000000,
  coreExpiry: new Date('1 Jan 2000'),
  user: '',
  config: {}
}

// #region Getter
const getters = {
  Get_Config: function (state, getters, rootState) {
    return state.config
  },
  Get_User: function (state, getters, rootState) {
    return state.user
  },
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
  },
  GetCoreExpiry: function (state) {
    return state.coreExpiry
  },
  GetInitExpiry: function (state) {
    return state.initExpiry
  }
}
// #endregion
// #region Mutations
const mutations = {
  SET_CONFIG (state, payload) {
    if (typeof payload !== 'undefined') {
      state.config = payload
    }
  },
  SET_USER (state, payload) {
    if (typeof payload !== 'undefined') {
      state.user = payload
    }
  },
  SET_INIT (state, payload) {
    if (typeof payload !== 'undefined') {
      if (typeof payload.Version !== 'undefined') {
        state.initTimeStamp = payload.Version
        state.initExpiry = payload.CacheExpiry
      } else if (typeof payload[0] !== 'undefined') {
        state.initTimeStamp = payload[0].Version
        state.initExpiry = payload[0].CacheExpiry
      }
      let forage = [{
        Version: state.initTimeStamp,
        CacheExpiry: state.initExpiry
      }]
      localForage.setItem('AppState_Init', forage)
    }
  },
  SET_INIT_LIST (state, payload) {
    if (typeof payload !== 'undefined') {
      if (typeof payload.Version !== 'undefined') {
        state.initTimeStamp = payload.Version
        state.initExpiry = payload.CacheExpiry
      } else if (typeof payload[0] !== 'undefined') {
        state.initTimeStamp = payload[0].Version
        state.initExpiry = payload[0].CacheExpiry
      }
      let forage = [{
        Version: state.initTimeStamp,
        CacheExpiry: state.initExpiry
      }]
      localForage.setItem('AppState_Init', forage)
    }
  },
  SET_CORE (state, payload) {
    if (typeof payload !== 'undefined') {
      if (typeof payload.Version !== 'undefined') {
        state.coreTimeStamp = payload.Version
        state.coreExpiry = payload.CacheExpiry
      } else if (typeof payload[0] !== 'undefined') {
        state.coreTimeStamp = payload[0].Version
        state.coreExpiry = payload[0].CacheExpiry
      }
      let forage = [{
        Version: state.coreTimeStamp,
        CacheExpiry: state.coreExpiry
      }]
      localForage.setItem('AppState_Core', forage)
    }
  },
  SET_CORE_LIST (state, payload) {
    if (typeof payload !== 'undefined') {
      if (typeof payload.Version !== 'undefined') {
        state.coreTimeStamp = payload.Version
        state.coreExpiry = payload.CacheExpiry
      } else if (typeof payload[0] !== 'undefined') {
        state.coreTimeStamp = payload[0].Version
        state.coreExpiry = payload[0].CacheExpiry
      }
      let forage = [{
        Version: state.coreTimeStamp,
        CacheExpiry: state.coreExpiry
      }]
      localForage.setItem('AppState_Core', forage)
    }
  },
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
    state.TitleAction = function () {}
  },
  SET_TITLEACTION (state, payload) {
    state.TitleAction = payload
  },
  CLEAR_TITLEACTION (state) {
    state.TitleAction = function () {}
  },
  SET_APIFLAG_PROPERTY (state, payload) {
    if (typeof payload.Loaded !== 'undefined') Vue.set(state.Flags, 'Loaded', payload.Loaded)
    if (typeof payload.Saved !== 'undefined') Vue.set(state.Flags, 'Saved', payload.Saved)
    if (typeof payload.InProgress !== 'undefined') Vue.set(state.Flags, 'InProgress', payload.InProgress)
    if (typeof payload.Failed !== 'undefined') Vue.set(state.Flags, 'Failed', payload.Failed)
  },
  SET_FLAG (state, payload) {
    if (payload === false) {
      state.Flags.loaded = false
    } else if (payload === true) {
      state.Flags.loaded = true
    } else {
      state.Flags = {...state.Flags, ...payload}
    }
  }
}
// #endregion
// #region Actions
const actions = {
  Clear_LocalForage: function () {
    localForage.clear()
  }
}

// #endregion
const store = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

export default store
