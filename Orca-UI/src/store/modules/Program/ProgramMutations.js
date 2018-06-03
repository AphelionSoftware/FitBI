import {updateField} from 'vuex-map-fields'
import Vue from 'vue'
const mutations = {
  GET_PLAN (state, payload) {
    if ('' + payload.PlanID === '0') {
      state.PlanItem = {
        PlanID: null,
        Name: null,
        StartDate: null,
        GoalNarrative: null,
        PersonID: null,
        PlannerPersonID: null,
        isTemplate: null,
        Active: null,
        ID: null,
        CreatedAt: null,
        UpdatedAt: null,
        Deleted: null,
        Version: null,
        NeedsSync: true
      }
    } else {
      state.PlanItem = state.Plan[payload.PlanID]
    }
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
    if ('' + payload.WorkoutID === '0') {
      state.WorkoutItem = {
        WorkoutID: null,
        PlanID: null,
        PersonID: null,
        Name: null,
        GoalNarrative: null,
        isTemplate: null,
        Active: null,
        ID: null,
        CreatedAt: null,
        UpdatedAt: null,
        Deleted: null,
        Version: null,
        NeedsSync: true
      }
    } else {
      state.WorkoutItem = state.Workout[payload.WorkoutID]
    }
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
    if ('' + payload.Workout_ExerciseID === '0') {
      state.Workout_ExerciseItem = {
        Workout_ExerciseID: null,
        WorkoutID: null,
        PersonID: null,
        GoalNarrative: null,
        ExerciseID: null,
        Active: null,
        ID: null,
        CreatedAt: null,
        UpdatedAt: null,
        Deleted: null,
        Version: null,
        NeedsSync: true
      }
    } else {
      state.Workout_ExerciseItem = state.Workout_Exercise[payload.Workout_ExerciseID]
    }
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
    if ('' + payload.WorkoutStageID === '0') {
      state.WorkoutStageItem = {
        WorkoutStageID: null,
        WorkoutID: null,
        PersonID: null,
        GoalNarrative: null,
        isTemplate: null,
        Active: null,
        ID: null,
        CreatedAt: null,
        UpdatedAt: null,
        Deleted: null,
        Version: null,
        NeedsSync: true
      }
    } else {
      state.WorkoutStageItem = state.WorkoutStage[payload.WorkoutStageID]
    }
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
  },
  SET_FLAG (state, payload) {
    if (payload === false) {
      state.Flags.loaded = false
    } else if (payload === true) {
      state.Flags.loaded = true
    } else {
      state.Flags = {...state.Flags, ...payload}
    }
  },
  updateField
}

export default mutations
