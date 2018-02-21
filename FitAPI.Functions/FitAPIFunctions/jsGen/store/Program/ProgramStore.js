import Vue from 'vue'
import Vuex from 'vuex'
import {_} from 'vue-underscore'
// Import the `getField` getter and the `updateField`
// mutation function from the `vuex-map-fields` module.
import { getField, updateField } from '../../../helpers/vuex-map-fields/index'
// import { getField, updateField } from 'vuex-map-fields'
import actions from './ProgramActions'

Vue.use(Vuex)
Vue.use(_)

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
// #region Getters
const getters = {
  getField,
  Get_Plan_ByRouteID: function (state, getters, rootState) {
    return state.Plan[+rootState.route.params.planid]
  },
  Get_Plan_ByPlanID: function (state) {
    return function (planID) {
      return state.Plan[planID]
    }
  },
  Get_PlanItem: function () {
    return state.PlanItem
  },
  Get_Plan_All: function () {
    return state.Plan
  },
  Get_Plan_Select: function () {
    return _.map(state.Plan, item => {
      return {
        label: item.Name,
        value: item.PlanID
      }
    })
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
  Get_Workout_ByWorkoutID: function (state) {
    return function (workoutID) {
      return state.Workout[workoutID]
    }
  },
  Get_WorkoutItem: function () {
    return state.WorkoutItem
  },
  Get_Workout_All: function () {
    return state.Workout
  },
  Get_Workout_Select: function () {
    return _.map(state.Workout, item => {
      return {
        label: item.Name,
        value: item.WorkoutID
      }
    })
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
  Get_Workout_Exercise_ByWorkout_ExerciseID: function (state) {
    return function (workoutexerciseID) {
      return state.Workout_Exercise[workoutexerciseID]
    }
  },
  Get_Workout_ExerciseItem: function () {
    return state.Workout_ExerciseItem
  },
  Get_Workout_Exercise_All: function () {
    return state.Workout_Exercise
  },
  Get_Workout_Exercise_Select: function () {
    return _.map(state.Workout_Exercise, item => {
      return {
        label: item.Name,
        value: item.Workout_ExerciseID
      }
    })
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
  Get_WorkoutStage_ByWorkoutStageID: function (state) {
    return function (workoutstageID) {
      return state.WorkoutStage[workoutstageID]
    }
  },
  Get_WorkoutStageItem: function () {
    return state.WorkoutStageItem
  },
  Get_WorkoutStage_All: function () {
    return state.WorkoutStage
  },
  Get_WorkoutStage_Select: function () {
    return _.map(state.WorkoutStage, item => {
      return {
        label: item.Name,
        value: item.WorkoutStageID
      }
    })
  },
  Get_WorkoutStage_List: function () {
    return state.WorkoutStage
  },
  Get_WorkoutStage_Item: function () {
    return state.WorkoutStageItem
  }
}
// #endregion
// #region Mutations
const mutations = {
  updateField,
  GET_PLAN (state, payload) {
    state.PlanItem = state.Plan[payload.PlanID]
  },
  SET_PLAN (state, payload) {
    state.Plan[payload.PlanID] = payload
  },
  SET_PLANITEM (state, payload) {
    state.PlanItem = payload
  },
  SET_PLAN_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.Plan, element.PlanID, element)
        state.PlanList.push(element.PlanID)
      }, this)
    }
  },
  GET_WORKOUT (state, payload) {
    state.WorkoutItem = state.Workout[payload.WorkoutID]
  },
  SET_WORKOUT (state, payload) {
    state.Workout[payload.WorkoutID] = payload
  },
  SET_WORKOUTITEM (state, payload) {
    state.WorkoutItem = payload
  },
  SET_WORKOUT_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.Workout, element.WorkoutID, element)
        state.WorkoutList.push(element.WorkoutID)
      }, this)
    }
  },
  GET_WORKOUT_EXERCISE (state, payload) {
    state.Workout_ExerciseItem = state.Workout_Exercise[payload.Workout_ExerciseID]
  },
  SET_WORKOUT_EXERCISE (state, payload) {
    state.Workout_Exercise[payload.Workout_ExerciseID] = payload
  },
  SET_WORKOUT_EXERCISEITEM (state, payload) {
    state.Workout_ExerciseItem = payload
  },
  SET_WORKOUT_EXERCISE_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.Workout_Exercise, element.Workout_ExerciseID, element)
        state.Workout_ExerciseList.push(element.Workout_ExerciseID)
      }, this)
    }
  },
  GET_WORKOUTSTAGE (state, payload) {
    state.WorkoutStageItem = state.WorkoutStage[payload.WorkoutStageID]
  },
  SET_WORKOUTSTAGE (state, payload) {
    state.WorkoutStage[payload.WorkoutStageID] = payload
  },
  SET_WORKOUTSTAGEITEM (state, payload) {
    state.WorkoutStageItem = payload
  },
  SET_WORKOUTSTAGE_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.WorkoutStage, element.WorkoutStageID, element)
        state.WorkoutStageList.push(element.WorkoutStageID)
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
