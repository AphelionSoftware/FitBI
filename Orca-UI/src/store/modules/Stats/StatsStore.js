import Vue from 'vue'
import Vuex from 'vuex'
import {_} from 'vue-underscore'
// Import the `getField` getter and the `updateField`
// mutation function from the `vuex-map-fields` module.
import { getField, updateField } from 'vuex-map-fields'
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
  Get_Metric_ByMetricID: function (state) {
    return function (metricID) {
      return state.Metric[metricID]
    }
  },
  Get_MetricItem: function () {
    return state.MetricItem
  },
  Get_Metric_All: function () {
    return state.Metric
  },
  Get_Metric_Select: function () {
    return _.map(state.Metric, item => {
      return {
        label: item.Name,
        value: item.MetricID
      }
    })
  },
  Get_Metric_SelectObject: function () {
    return _.mapObject(
      _.indexBy(state.Metric, 'MetricID'),
      item => ({
        label: item.Name,
        value: item.MetricID
      })
    )
  },
  Get_Metric_List: function () {
    return _.sortBy(state.Metric, 'Name')
  },
  Get_Metric_Item: function () {
    return state.MetricItem
  },
  Get_Person_ByRouteID: function (state, getters, rootState) {
    return state.Person[+rootState.route.params.personid]
  },
  Get_Person_ByPersonID: function (state) {
    return function (personID) {
      return state.Person[personID]
    }
  },
  Get_PersonItem: function () {
    return state.PersonItem
  },
  Get_Person_All: function () {
    return state.Person
  },
  Get_Person_Select: function () {
    return _.map(state.Person, item => {
      return {
        label: item.Name,
        value: item.PersonID
      }
    })
  },
  Get_Person_SelectObject: function () {
    return _.mapObject(
      _.indexBy(state.Person, 'PersonID'),
      item => ({
        label: item.Name,
        value: item.PersonID
      })
    )
  },
  Get_Person_List: function () {
    return _.sortBy(state.Person, 'Name')
  },
  Get_Person_Item: function () {
    return state.PersonItem
  },
  Get_SkinfoldMeasurement_ByRouteID: function (state, getters, rootState) {
    return state.SkinfoldMeasurement[+rootState.route.params.skinfoldmeasurementid]
  },
  Get_SkinfoldMeasurement_BySkinfoldMeasurementID: function (state) {
    return function (skinfoldmeasurementID) {
      return state.SkinfoldMeasurement[skinfoldmeasurementID]
    }
  },
  Get_SkinfoldMeasurementItem: function () {
    return state.SkinfoldMeasurementItem
  },
  Get_SkinfoldMeasurement_All: function () {
    return state.SkinfoldMeasurement
  },
  Get_SkinfoldMeasurement_Select: function () {
    return _.map(state.SkinfoldMeasurement, item => {
      return {
        label: item.Name,
        value: item.SkinfoldMeasurementID
      }
    })
  },
  Get_SkinfoldMeasurement_SelectObject: function () {
    return _.mapObject(
      _.indexBy(state.SkinfoldMeasurement, 'SkinfoldMeasurementID'),
      item => ({
        label: item.Name,
        value: item.SkinfoldMeasurementID
      })
    )
  },
  Get_SkinfoldMeasurement_List: function () {
    return _.sortBy(state.SkinfoldMeasurement, 'Name')
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
  Get_TapeMeasurement_ByTapeMeasurementID: function (state) {
    return function (tapemeasurementID) {
      return state.TapeMeasurement[tapemeasurementID]
    }
  },
  Get_TapeMeasurementItem: function () {
    return state.TapeMeasurementItem
  },
  Get_TapeMeasurement_All: function () {
    return state.TapeMeasurement
  },
  Get_TapeMeasurement_Select: function () {
    return _.map(state.TapeMeasurement, item => {
      return {
        label: item.Name,
        value: item.TapeMeasurementID
      }
    })
  },
  Get_TapeMeasurement_SelectObject: function () {
    return _.mapObject(
      _.indexBy(state.TapeMeasurement, 'TapeMeasurementID'),
      item => ({
        label: item.Name,
        value: item.TapeMeasurementID
      })
    )
  },
  Get_TapeMeasurement_List: function () {
    return _.sortBy(state.TapeMeasurement, 'Name')
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
  Get_WeightMeasurement_ByWeightMeasurementID: function (state) {
    return function (weightmeasurementID) {
      return state.WeightMeasurement[weightmeasurementID]
    }
  },
  Get_WeightMeasurementItem: function () {
    return state.WeightMeasurementItem
  },
  Get_WeightMeasurement_All: function () {
    return state.WeightMeasurement
  },
  Get_WeightMeasurement_Select: function () {
    return _.map(state.WeightMeasurement, item => {
      return {
        label: item.Name,
        value: item.WeightMeasurementID
      }
    })
  },
  Get_WeightMeasurement_SelectObject: function () {
    return _.mapObject(
      _.indexBy(state.WeightMeasurement, 'WeightMeasurementID'),
      item => ({
        label: item.Name,
        value: item.WeightMeasurementID
      })
    )
  },
  Get_WeightMeasurement_List: function () {
    return _.sortBy(state.WeightMeasurement, 'Name')
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
    if ('' + payload.MetricID === '0') {
      state.MetricItem = {
        MetricID: null,
        PersonID: null,
        Weight: null,
        BodyFatPercentage: null,
        MusclePercentage: null,
        WaterPercentage: null,
        BonePercentage: null,
        PercentMeasurementTypeID: null,
        Active: null,
        ID: null,
        CreatedAt: null,
        UpdatedAt: null,
        Deleted: null,
        Version: null
      }
    } else {
      state.MetricItem = state.Metric[payload.MetricID]
    }
  },
  SET_METRIC (state, payload) {
    state.Metric[payload.MetricID] = payload
  },
  SET_METRICITEM (state, payload) {
    state.MetricItem = payload
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
    if ('' + payload.PersonID === '0') {
      state.PersonItem = {
        PersonID: null,
        FirstName: null,
        Surname: null,
        DateOfBirth: null,
        DateOfBirthID: null,
        Height: null,
        Active: null,
        ID: null,
        CreatedAt: null,
        UpdatedAt: null,
        Deleted: null,
        Version: null
      }
    } else {
      state.PersonItem = state.Person[payload.PersonID]
    }
  },
  SET_PERSON (state, payload) {
    state.Person[payload.PersonID] = payload
  },
  SET_PERSONITEM (state, payload) {
    state.PersonItem = payload
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
    if ('' + payload.SkinfoldMeasurementID === '0') {
      state.SkinfoldMeasurementItem = {
        SkinfoldMeasurementID: null,
        PersonID: null,
        SkinfoldThickness: null,
        SideMeasurementTypeID: null,
        BodyPartID: null,
        MeasurementDate: null,
        Active: null,
        ID: null,
        CreatedAt: null,
        UpdatedAt: null,
        Deleted: null,
        Version: null
      }
    } else {
      state.SkinfoldMeasurementItem = state.SkinfoldMeasurement[payload.SkinfoldMeasurementID]
    }
  },
  SET_SKINFOLDMEASUREMENT (state, payload) {
    state.SkinfoldMeasurement[payload.SkinfoldMeasurementID] = payload
  },
  SET_SKINFOLDMEASUREMENTITEM (state, payload) {
    state.SkinfoldMeasurementItem = payload
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
    if ('' + payload.TapeMeasurementID === '0') {
      state.TapeMeasurementItem = {
        TapeMeasurementID: null,
        PersonID: null,
        TapeLength: null,
        SideMeasurementTypeID: null,
        BodyPartID: null,
        MeasurementDate: null,
        Active: null,
        ID: null,
        CreatedAt: null,
        UpdatedAt: null,
        Deleted: null,
        Version: null
      }
    } else {
      state.TapeMeasurementItem = state.TapeMeasurement[payload.TapeMeasurementID]
    }
  },
  SET_TAPEMEASUREMENT (state, payload) {
    state.TapeMeasurement[payload.TapeMeasurementID] = payload
  },
  SET_TAPEMEASUREMENTITEM (state, payload) {
    state.TapeMeasurementItem = payload
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
    if ('' + payload.WeightMeasurementID === '0') {
      state.WeightMeasurementItem = {
        WeightMeasurementID: null,
        PersonID: null,
        Weight: null,
        BodyFatPercentage: null,
        MusclePercentage: null,
        WaterPercentage: null,
        BonePercentage: null,
        PercentMeasurementTypeID: null,
        UnitID: null,
        MeasurementDate: null,
        Active: null,
        ID: null,
        CreatedAt: null,
        UpdatedAt: null,
        Deleted: null,
        Version: null
      }
    } else {
      state.WeightMeasurementItem = state.WeightMeasurement[payload.WeightMeasurementID]
    }
  },
  SET_WEIGHTMEASUREMENT (state, payload) {
    state.WeightMeasurement[payload.WeightMeasurementID] = payload
  },
  SET_WEIGHTMEASUREMENTITEM (state, payload) {
    state.WeightMeasurementItem = payload
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
