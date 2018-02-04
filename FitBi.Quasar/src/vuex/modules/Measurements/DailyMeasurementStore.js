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
    var person = rootGetters['Stats/Get_PersonItem']
    if (typeof (person.PersonID) === 'undefined') {
      Vue.$API.Initialize()
    }
    var weight = rootGetters['Stats/Get_WeightMeasurement_ByLatest_MeasurementDate']
    var tapeNeck = _.chain(rootGetters['Stats/Get_TapeMeasurement_All'])
    .filter(function (item) {
      return item.BodyPartID === BodyPart.NECK.intID
    })
    .sortBy(function (item) { return item.MeasurementDate })
    .last()
    .value()
    if (typeof (tapeNeck) === 'undefined') {
      tapeNeck = {
        BodyPartID: BodyPart.NECK.intID,
        TapeLength: 35,
        PersonID: person.PersonID
      }
    }
    tapeNeck.NeckTapeLength = tapeNeck.TapeLength
    var tapeBelly = _.chain(rootGetters['Stats/Get_TapeMeasurement_All'])
    .filter(function (item) {
      return item.BodyPartID === BodyPart.BELLYBUTTON_CIRC.intID
    })
    .sortBy(function (item) { return item.MeasurementDate })
    .last()
    .value()
    if (typeof (tapeBelly) === 'undefined') {
      tapeBelly = {
        BodyPartID: BodyPart.BELLYBUTTON_CIRC.intID,
        TapeLength: 90,
        PersonID: person.PersonID
      }
    }
    tapeBelly.BellyTapeLength = tapeBelly.TapeLength
    commit('SET_WEIGHTMEASUREMENT', weight)
    commit('SET_NECKTAPEMEASUREMENT', tapeNeck)
    commit('SET_BELLYTAPEMEASUREMENT', tapeBelly)
  },
  Save_DailyMeasurement ({commit, dispatch, getters, rootState, rootGetters, state}, payload) {
  // Save_DailyMeasurement (context, payload) {
    state.BellyTapeMeasurement.TapeLength = +state.BellyTapeMeasurement.BellyTapeLength
    state.NeckTapeMeasurement.TapeLength = +state.NeckTapeMeasurement.NeckTapeLength
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
