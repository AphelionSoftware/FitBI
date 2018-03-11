import Vue from 'vue'
import Vuex from 'vuex'
import { getField, updateField } from 'vuex-map-fields'
// import { getField, updateField } from 'vuex-map-fields'

Vue.use(Vuex)

// Separate Module States
import AppState from './modules/AppState/AppStateStore'
import WeightMeasurement from './modules/weight-measurement'
import Core from './modules/core/coreStore'
import Exercise from './modules/exercise/exerciseStore'
import Program from './modules/program/programStore'
import Stats from './modules/stats/statsStore'
import DailyMeasurement from './modules/Measurements/DailyMeasurementStore'

export default new Vuex.Store({
  modules: {
    AppState: AppState,
    WeightMeasurement: WeightMeasurement,
    Core: Core,
    Exercise: Exercise,
    Program: Program,
    Stats: Stats,
    DailyMeasurement: DailyMeasurement
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
