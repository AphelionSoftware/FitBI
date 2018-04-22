import Vue from 'vue'
import Vuex from 'vuex'
import {_} from 'vue-underscore'
import enumCore from '../../../plugins/libraries/enumCore'
// Import the `getField` getter and the `updateField`
// mutation function from the `vuex-map-fields` module.
import { getField, updateField } from 'vuex-map-fields'
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
  getField,
  getLatestNeckTapeMeasurement: function (state, getters, rootState, rootGetters) {
    return _.chain(rootGetters['Stats/Get_TapeMeasurement_All'])
      .filter(function (item) {
        return item.BodyPartID === enumCore.BodyPart.NECK.intID
      })
      .sortBy(function (item) { return item.MeasurementDate })
      .last()
      .value()
  },
  getLatestBellyTapeMeasurement: function (state, getters, rootState, rootGetters) {
    return _.chain(rootGetters['Stats/Get_TapeMeasurement_All'])
      .filter(function (item) {
        return item.BodyPartID === enumCore.BodyPart.BELLYBUTTON_CIRC.intID
      })
      .sortBy(function (item) { return item.MeasurementDate })
      .last()
      .value()
  },
  getLatestWeightMeasurement: function (state, getters, rootState, rootGetters) {
    return rootGetters['Stats/Get_WeightMeasurement_ByLatest_MeasurementDate']
  }
}
// #endregion

// #region Mutations
const mutations = {
  updateField,
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
    var person = rootGetters['Stats/Get_PersonItem']
    if (typeof (person.PersonID) === 'undefined') {
      return
    }
    var weight = getters['getLatestWeightMeasurement']
    var tapeNeck = getters['getLatestNeckTapeMeasurement']
    if (typeof (tapeNeck) === 'undefined') {
      tapeNeck = {
        BodyPartID: enumCore.BodyPart.NECK.intID,
        TapeLength: 35,
        PersonID: person.PersonID
      }
    }
    tapeNeck.min = tapeNeck.min || tapeNeck.TapeLength - 10
    tapeNeck.max = tapeNeck.max || tapeNeck.TapeLength + 10
    var tapeBelly = getters['getLatestBellyTapeMeasurement']
    if (typeof (tapeBelly) === 'undefined') {
      tapeBelly = {
        BodyPartID: enumCore.BodyPart.BELLYBUTTON_CIRC.intID,
        TapeLength: 90,
        PersonID: person.PersonID
      }
    }
    tapeBelly.min = tapeBelly.min || tapeBelly.TapeLength - 10
    tapeBelly.max = tapeBelly.max || tapeBelly.TapeLength + 10
    commit('SET_WEIGHTMEASUREMENT', weight)
    commit('SET_NECKTAPEMEASUREMENT', tapeNeck)
    commit('SET_BELLYTAPEMEASUREMENT', tapeBelly)
  },
  Save_DailyMeasurement ({commit, dispatch, getters, rootState, rootGetters, state}, payload) {
  // Save_DailyMeasurement (context, payload) {
    // state.BellyTapeMeasurement.TapeLength = +state.BellyTapeMeasurement.TapeLength
    // state.NeckTapeMeasurement.TapeLength = +state.NeckTapeMeasurement.TapeLength
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
