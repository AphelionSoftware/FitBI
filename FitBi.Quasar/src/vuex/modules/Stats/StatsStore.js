import Vue from 'vue'
import Vuex from 'vuex'
// Import the `getField` getter and the `updateField`
// mutation function from the `vuex-map-fields` module.
import { getField, updateField } from '../../../helpers/vuex-map-fields/index'
// import { getField, updateField } from 'vuex-map-fields'

Vue.use(Vuex)

const state = {
  Metric: { },
  MetricList: [],
  MetricItem: {},
  Person: { },
  PersonList: [],
  PersonItem: {},
  SkinfoldMeasurement: { },
  SkinfoldMeasurementList: [],
  SkinfoldMeasurementItem: {},
  TapeMeasurement: { },
  TapeMeasurementList: [],
  TapeMeasurementItem: {},
  WeightMeasurement: { },
  WeightMeasurementList: [],
  WeightMeasurementItem: {}
}

const getters = {
  getField,
  Get_Metric_ByRouteID: function (state, getters, rootState) {
    return state.Metric[+rootState.route.params.metricid]
  },
  Get_Metric_All: function () {
    return state.Metric
  },
  Get_Metric_List: function () {
    return state.Metric
  },
  Get_Metric_Item: function () {
    return state.MetricItem
  },
  Get_Person_ByRouteID: function (state, getters, rootState) {
    return state.Person[+rootState.route.params.personid]
  },
  Get_Person_All: function () {
    return state.Person
  },
  Get_Person_List: function () {
    return state.Person
  },
  Get_Person_Item: function () {
    return state.PersonItem
  },
  Get_SkinfoldMeasurement_ByRouteID: function (state, getters, rootState) {
    return state.SkinfoldMeasurement[+rootState.route.params.skinfoldmeasurementid]
  },
  Get_SkinfoldMeasurement_All: function () {
    return state.SkinfoldMeasurement
  },
  Get_SkinfoldMeasurement_List: function () {
    return state.SkinfoldMeasurement
  },
  Get_SkinfoldMeasurement_Item: function () {
    return state.SkinfoldMeasurementItem
  },
  Get_TapeMeasurement_ByRouteID: function (state, getters, rootState) {
    return state.TapeMeasurement[+rootState.route.params.tapemeasurementid]
  },
  Get_TapeMeasurement_All: function () {
    return state.TapeMeasurement
  },
  Get_TapeMeasurement_List: function () {
    return state.TapeMeasurement
  },
  Get_TapeMeasurement_Item: function () {
    return state.TapeMeasurementItem
  },
  Get_WeightMeasurement_ByRouteID: function (state, getters, rootState) {
    return state.WeightMeasurement[+rootState.route.params.weightmeasurementid]
  },
  Get_WeightMeasurement_All: function () {
    return state.WeightMeasurement
  },
  Get_WeightMeasurement_List: function () {
    return state.WeightMeasurement
  },
  Get_WeightMeasurement_Item: function () {
    return state.WeightMeasurementItem
  }
}

const mutations = {
  updateField,
  SET_METRIC_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.Metric, element.MetricID, element)
        state.MetricList.push(element.MetricID)
      }, this)
    }
  },
  SET_PERSON_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.Person, element.PersonID, element)
        state.PersonList.push(element.PersonID)
      }, this)
    }
  },
  SET_SKINFOLDMEASUREMENT_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.SkinfoldMeasurement, element.SkinfoldMeasurementID, element)
        state.SkinfoldMeasurementList.push(element.SkinfoldMeasurementID)
      }, this)
    }
  },
  SET_TAPEMEASUREMENT_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.TapeMeasurement, element.TapeMeasurementID, element)
        state.TapeMeasurementList.push(element.TapeMeasurementID)
      }, this)
    }
  },
  SET_WEIGHTMEASUREMENT_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.WeightMeasurement, element.WeightMeasurementID, element)
        state.WeightMeasurementList.push(element.WeightMeasurementID)
      }, this)
    }
  }
}

const exercise = {
  namespaced: true,
  state,
  getters,
  mutations
}

export default exercise
