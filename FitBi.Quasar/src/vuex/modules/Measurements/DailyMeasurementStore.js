import Vue from 'vue'
import Vuex from 'vuex'
import {_} from 'vue-underscore'

// Import the `getField` getter and the `updateField`
// mutation function from the `vuex-map-fields` module.
import { getField } from '../../../helpers/vuex-map-fields/index'
// import { getField, updateField } from 'vuex-map-fields'

Vue.use(Vuex)
Vue.use(_)

const state = {
  WeightMeasurement: {},
  NeckTapeMeasurement: {},
  WaistMeasurement: {}
}

// #region Getters
const getters = {
  getField
}
// #endregion

// #region Mutations
const mutations = {
  SET_WEIGHTMEASUREMENT (state, payload) {
    state.WeightMeasurement = payload
  },
  SET_NECKTAPEMEASUREMENT (state, payload) {
    state.NeckTapeMeasurement = payload
  },
  SET_WAISTMEASUREMENT (state, payload) {
    state.WaistMeasurement = payload
  }
}
// #endregion
// #region
const actions = {
  Set_NewDailyMeasurement ({commit, getters, rootState, rootGetters}, payload) {
    debugger
    var weight = rootGetters['Stats/Get_WeightMeasurement_ByLatest_MeasurementDate']
    var tape = weight = _.chain(rootGetters['Stats/Get_TapeMeasurement_All'])
    .sortBy(function (item) { return item.MeasurementDate })
    .first()
    .value()
    var x = weight
    x = tape
    var y = x
    x = y
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
