import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  Plan: [],
  Workout: [],
  Workout_Exercise: [],
  WorkoutStage: []
}

const getters = {
  Get_Plan_All: function () {
    return state.Plan
  },
  Get_Workout_All: function () {
    return state.Workout
  },
  Get_Workout_Exercise_All: function () {
    return state.Workout_Exercise
  },
  Get_WorkoutStage_All: function () {
    return state.WorkoutStage
  }
}

const mutations = {
  Set_Plan: function (state, fullList) {
    state.Plan = fullList
  },
  Set_Workout: function (state, fullList) {
    state.Workout = fullList
  },
  Set_Workout_Exercise: function (state, fullList) {
    state.Workout_Exercise = fullList
  },
  Set_WorkoutStage: function (state, fullList) {
    state.WorkoutStage = fullList
  }
}

const program = {
  namespaced: true,
  state,
  getters,
  mutations
}

export default program
