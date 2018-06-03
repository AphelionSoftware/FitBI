import Vue from 'vue'
import Vuex from 'vuex'
import { getField, updateField } from 'vuex-map-fields'
// import { getField, updateField } from 'vuex-map-fields'

Vue.use(Vuex)

// Separate Module States
import AppState from './modules/AppState/AppStateStore'
import WeightMeasurement from './modules/weight-measurement'
import Core from './modules/core/CoreStore'
import Exercise from './modules/exercise/ExerciseStore'
import Program from './modules/program/ProgramStore'
import Stats from './modules/stats/StatsStore'
import UserSettings from './modules/UserSettings/UserSettingsStore'
import DailyMeasurement from './modules/Measurements/DailyMeasurementStore'

export default new Vuex.Store({
  modules: {
    AppState: AppState,
    WeightMeasurement: WeightMeasurement,
    Core: Core,
    Exercise: Exercise,
    Program: Program,
    Stats: Stats,
    UserSettings: UserSettings,
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
