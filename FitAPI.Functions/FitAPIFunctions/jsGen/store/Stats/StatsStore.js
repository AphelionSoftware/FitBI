import Vue from 'vue'
import Vuex from 'vuex'
import {_} from 'vue-underscore'
// Import the `getField` getter and the `updateField`
// mutation function from the `vuex-map-fields` module.
import { getField, updateField } from '../../../helpers/vuex-map-fields/index'
// import { getField, updateField } from 'vuex-map-fields'
import actions from './StatsActions'

Vue.use(Vuex)
Vue.use(_)

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
// #region Getters
const getters = {
  getField,
  Get_Metric_ByRouteID: function (state, getters, rootState) {
    return state.Metric[+rootState.route.params.metricid]
  },
  Get_MetricItem: function () {
    return state.MetricItem
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
  Get_PersonItem: function () {
    return state.PersonItem
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
  Get_SkinfoldMeasurementItem: function () {
    return state.SkinfoldMeasurementItem
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
  Get_SkinfoldMeasurement_ByLatest_MeasurementDate: function () {
    if (state.SkinfoldMeasurementList.length === 0) return {}
    return _.chain(state.SkinfoldMeasurement)
      .sortBy(function (item) { return item.MeasurementDate })
      .first()
      .value()
  },
  Get_TapeMeasurement_ByRouteID: function (state, getters, rootState) {
    return state.TapeMeasurement[+rootState.route.params.tapemeasurementid]
  },
  Get_TapeMeasurementItem: function () {
    return state.TapeMeasurementItem
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
  Get_TapeMeasurement_ByLatest_MeasurementDate: function () {
    if (state.TapeMeasurementList.length === 0) return {}
    return _.chain(state.TapeMeasurement)
      .sortBy(function (item) { return item.MeasurementDate })
      .first()
      .value()
  },
  Get_WeightMeasurement_ByRouteID: function (state, getters, rootState) {
    return state.WeightMeasurement[+rootState.route.params.weightmeasurementid]
  },
  Get_WeightMeasurementItem: function () {
    return state.WeightMeasurementItem
  },
  Get_WeightMeasurement_All: function () {
    return state.WeightMeasurement
  },
  Get_WeightMeasurement_List: function () {
    return state.WeightMeasurement
  },
  Get_WeightMeasurement_Item: function () {
    return state.WeightMeasurementItem
  },
  Get_WeightMeasurement_ByLatest_MeasurementDate: function () {
    if (state.WeightMeasurementList.length === 0) return {}
    return _.chain(state.WeightMeasurement)
      .sortBy(function (item) { return item.MeasurementDate })
      .first()
      .value()
  }
}
// #endregion
// #region Mutations
const mutations = {
  updateField,
  GET_METRIC (state, payload) {
    state.MetricItem = state.Metric[payload.metricid]
  },
  SET_METRIC (state, payload) {
    state.Metric[payload.MetricID] = payload
  },
  SET_METRIC_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.Metric, element.MetricID, element)
        state.MetricList.push(element.MetricID)
      }, this)
    }
  },
  GET_PERSON (state, payload) {
    state.PersonItem = state.Person[payload.personid]
  },
  SET_PERSON (state, payload) {
    state.Person[payload.PersonID] = payload
  },
  SET_PERSON_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.Person, element.PersonID, element)
        state.PersonList.push(element.PersonID)
      }, this)
    }
  },
  GET_SKINFOLDMEASUREMENT (state, payload) {
    state.SkinfoldMeasurementItem = state.SkinfoldMeasurement[payload.skinfoldmeasurementid]
  },
  SET_SKINFOLDMEASUREMENT (state, payload) {
    state.SkinfoldMeasurement[payload.SkinfoldMeasurementID] = payload
  },
  SET_SKINFOLDMEASUREMENT_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.SkinfoldMeasurement, element.SkinfoldMeasurementID, element)
        state.SkinfoldMeasurementList.push(element.SkinfoldMeasurementID)
      }, this)
    }
  },
  GET_TAPEMEASUREMENT (state, payload) {
    state.TapeMeasurementItem = state.TapeMeasurement[payload.tapemeasurementid]
  },
  SET_TAPEMEASUREMENT (state, payload) {
    state.TapeMeasurement[payload.TapeMeasurementID] = payload
  },
  SET_TAPEMEASUREMENT_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.TapeMeasurement, element.TapeMeasurementID, element)
        state.TapeMeasurementList.push(element.TapeMeasurementID)
      }, this)
    }
  },
  GET_WEIGHTMEASUREMENT (state, payload) {
    state.WeightMeasurementItem = state.WeightMeasurement[payload.weightmeasurementid]
  },
  SET_WEIGHTMEASUREMENT (state, payload) {
    state.WeightMeasurement[payload.WeightMeasurementID] = payload
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
// #endregion

const store = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

export default store
