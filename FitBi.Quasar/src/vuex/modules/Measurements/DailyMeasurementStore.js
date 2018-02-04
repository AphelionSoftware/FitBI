import Vue from 'vue'
import Vuex from 'vuex'
import {_} from 'vue-underscore'
import {BodyPart} from '../../../helpers/enum/enumCore'
// Import the `getField` getter and the `updateField`
// mutation function from the `vuex-map-fields` module.
import { getField } from '../../../helpers/vuex-map-fields/index'
// import { getField, updateField } from 'vuex-map-fields'

Vue.use(Vuex)
Vue.use(_)

const state = {
  WeightMeasurement: {},
  NeckTapeMeasurement: {},
  BellyTapeMeasurement: {}
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
    state.WeightMeasurement.MeasurementDate = new Date().toUTCString()
  },
  SET_NECKTAPEMEASUREMENT (state, payload) {
    state.NeckTapeMeasurement = payload
    state.NeckTapeMeasurement.MeasurementDate = new Date().toUTCString()
  },
  SET_BELLYTAPEMEASUREMENT (state, payload) {
    state.BellyTapeMeasurement = payload
    state.BellyTapeMeasurement.MeasurementDate = new Date().toUTCString()
  }
}
// #endregion
// #region
const actions = {
  Set_NewDailyMeasurement ({commit, getters, rootState, rootGetters}, payload) {
    var weight = rootGetters['Stats/Get_WeightMeasurement_ByLatest_MeasurementDate']
    var tapeNeck = _.chain(rootGetters['Stats/Get_TapeMeasurement_All'])
    .filter(function (item) {
      return item.BodyPartID === BodyPart.NECK.intID
    })
    .sortBy(function (item) { return item.MeasurementDate })
    .first()
    .value()
    if (typeof (tapeNeck) === 'undefined') tapeNeck = {}
    tapeNeck.NeckTapeLength = tapeNeck.TapeLength
    var tapeBelly = _.chain(rootGetters['Stats/Get_TapeMeasurement_All'])
    .filter(function (item) {
      return item.BodyPartID === BodyPart.BELLYBUTTON_CIRC.intID
    })
    .sortBy(function (item) { return item.MeasurementDate })
    .first()
    .value()
    if (typeof (tapeBelly) === 'undefined') tapeBelly = {}
    tapeBelly.BellyTapeLength = tapeBelly.TapeLength
    commit('SET_WEIGHTMEASUREMENT', weight)
    commit('SET_NECKTAPEMEASUREMENT', tapeNeck)
    commit('SET_BELLYTAPEMEASUREMENT', tapeBelly)
  },
  Save_DailyMeasurement ({commit, dispatch, getters, rootState, rootGetters, state}, payload) {
  // Save_DailyMeasurement (context, payload) {
    dispatch('Stats/saveWeightMeasurement', state.WeightMeasurement, {root: true})
    dispatch('Stats/saveTapeMeasurement', state.BellyTapeMeasurement, {root: true})
    dispatch('Stats/saveTapeMeasurement', state.NeckTapeMeasurement, {root: true})
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
