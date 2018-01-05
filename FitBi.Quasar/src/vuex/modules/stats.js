import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  Metric: [],
  Person: [],
  SkinfoldMeasurement: [],
  TapeMeasurement: [],
  WeightMeasurement: []
}

const getters = {
  Get_Metric: function () {
    return state.Metric
  },
  Get_Person: function () {
    return state.Person
  },
  Get_SkinfoldMeasurement: function () {
    return state.SkinfoldMeasurement
  },
  Get_TapeMeasurement: function () {
    return state.TapeMeasurement
  },
  Get_WeightMeasurement: function () {
    return state.WeightMeasurement
  }
}

const mutations = {
  Set_Metric: function (state, fullList) {
    state.Metric = fullList
  },
  Set_Person: function (state, fullList) {
    state.Person = fullList
  },
  Set_SkinfoldMeasurement: function (state, fullList) {
    state.SkinfoldMeasurement = fullList
  },
  Set_TapeMeasurement: function (state, fullList) {
    state.TapeMeasurement = fullList
  },
  Set_WeightMeasurement: function (state, fullList) {
    state.WeightMeasurement = fullList
  }
}

const stats = {
  namespaced: true,
  state,
  getters,
  mutations
}

export default stats
