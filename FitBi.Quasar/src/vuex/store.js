import Vue from 'vue'
import Vuex from 'vuex'
import { getField, updateField } from '../helpers/vuex-map-fields/index'
// import { getField, updateField } from 'vuex-map-fields'

Vue.use(Vuex)

// Separate Module States
import WeightMeasurement from './modules/weight-measurement'
import Core from './modules/core/coreStore'
import Exercise from './modules/exercise/exerciseStore'
import Program from './modules/program/programStore'
import Stats from './modules/stats/statsStore'

export default new Vuex.Store({
  modules: {
    WeightMeasurement: WeightMeasurement,
    Core: Core,
    Exercise: Exercise,
    Program: Program,
    Stats: Stats
  },
  getters: {
    // Add the `getField` getter to the
    // `getters` of your Vuex store instance.
    getField
  },
  mutations: {
    updateField
  }
})
