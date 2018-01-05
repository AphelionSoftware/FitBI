import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Separate Module States
import WeightMeasurement from './modules/weight-measurement'
import Core from './modules/core'
import Exercise from './modules/exercise'
import Program from './modules/program'
import Stats from './modules/stats'

export default new Vuex.Store({
  modules: {
    WeightMeasurement: WeightMeasurement,
    Core: Core,
    Exercise: Exercise,
    Program: Program,
    Stats: Stats
  }
})
