import Vue from 'vue'
import Vuex from 'vuex'
// Import the `getField` getter and the `updateField`
// mutation function from the `vuex-map-fields` module.
import { getField, updateField } from '../../../helpers/vuex-map-fields/index'
// import { getField, updateField } from 'vuex-map-fields'

Vue.use(Vuex)

const state = {
  Plan: { },
  PlanList: [],
  PlanItem: {},
  Workout: { },
  WorkoutList: [],
  WorkoutItem: {},
  Workout_Exercise: { },
  Workout_ExerciseList: [],
  Workout_ExerciseItem: {},
  WorkoutStage: { },
  WorkoutStageList: [],
  WorkoutStageItem: {}
}

const getters = {
  getField,
  Get_Plan_ByRouteID: function (state, getters, rootState) {
    return state.Plan[+rootState.route.params.planid]
  },
  Get_Plan_All: function () {
    return state.Plan
  },
  Get_Plan_List: function () {
    return state.Plan
  },
  Get_Plan_Item: function () {
    return state.PlanItem
  },
  Get_Workout_ByRouteID: function (state, getters, rootState) {
    return state.Workout[+rootState.route.params.workoutid]
  },
  Get_Workout_All: function () {
    return state.Workout
  },
  Get_Workout_List: function () {
    return state.Workout
  },
  Get_Workout_Item: function () {
    return state.WorkoutItem
  },
  Get_Workout_Exercise_ByRouteID: function (state, getters, rootState) {
    return state.Workout_Exercise[+rootState.route.params.workout_exerciseid]
  },
  Get_Workout_Exercise_All: function () {
    return state.Workout_Exercise
  },
  Get_Workout_Exercise_List: function () {
    return state.Workout_Exercise
  },
  Get_Workout_Exercise_Item: function () {
    return state.Workout_ExerciseItem
  },
  Get_WorkoutStage_ByRouteID: function (state, getters, rootState) {
    return state.WorkoutStage[+rootState.route.params.workoutstageid]
  },
  Get_WorkoutStage_All: function () {
    return state.WorkoutStage
  },
  Get_WorkoutStage_List: function () {
    return state.WorkoutStage
  },
  Get_WorkoutStage_Item: function () {
    return state.WorkoutStageItem
  }
}

const mutations = {
  updateField,
  SET_PLAN_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        state.Plan[element.PlanID] = element
        state.PlanList.push(element.PlanID)
      }, this)
    }
  },
  SET_WORKOUT_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        state.Workout[element.WorkoutID] = element
        state.WorkoutList.push(element.WorkoutID)
      }, this)
    }
  },
  SET_WORKOUT_EXERCISE_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        state.Workout_Exercise[element.Workout_ExerciseID] = element
        state.Workout_ExerciseList.push(element.Workout_ExerciseID)
      }, this)
    }
  },
  SET_WORKOUTSTAGE_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        state.WorkoutStage[element.WorkoutStageID] = element
        state.WorkoutStageList.push(element.WorkoutStageID)
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
