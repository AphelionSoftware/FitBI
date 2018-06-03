import {APIinstance} from '../../../plugins/api.js'
import uuidv1 from 'uuid/v1'
const actions = {
  savePlan (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.PlanItem
    } else {
      item = payload
    }
    let defaults = {
      PlanID: null,
      Name: null,
      StartDate: new Date(),
      GoalNarrative: null,
      PersonID: context.rootGetters['Stats/Get_Person_List'][0].PersonID,
      PlannerPersonID: null,
      isTemplate: false,
      Active: 1,
      ID: uuidv1(),
      CreatedAt: new Date().toUTCString(),
      UpdatedAt: null,
      Deleted: false,
      Version: null,
      NeedsSync: true
    }
    if (typeof item.StartDate === 'undefined' || item.StartDate === null) item.StartDate = new Date()
    item.StartDate = item.StartDate.toUTCString()
    if (item.PlanID === null) item.PlanID = 0
    item.UpdatedAt = (new Date()).toUTCString()
    item.NeedsSync = true
    item = {...defaults, ...item}
    context.commit('SET_PLAN', item)
    APIinstance.mergeStats.mergePlan(item)
  },
  saveWorkout (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.WorkoutItem
    } else {
      item = payload
    }
    let defaults = {
      WorkoutID: null,
      PlanID: null,
      PersonID: context.rootGetters['Stats/Get_Person_List'][0].PersonID,
      Name: null,
      GoalNarrative: null,
      isTemplate: false,
      Active: 1,
      ID: uuidv1(),
      CreatedAt: new Date().toUTCString(),
      UpdatedAt: null,
      Deleted: false,
      Version: null,
      NeedsSync: true
    }
    if (item.WorkoutID === null) item.WorkoutID = 0
    item.UpdatedAt = (new Date()).toUTCString()
    item.NeedsSync = true
    item = {...defaults, ...item}
    context.commit('SET_WORKOUT', item)
    APIinstance.mergeStats.mergeWorkout(item)
  },
  saveWorkout_Exercise (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.Workout_ExerciseItem
    } else {
      item = payload
    }
    let defaults = {
      Workout_ExerciseID: null,
      WorkoutID: null,
      PersonID: context.rootGetters['Stats/Get_Person_List'][0].PersonID,
      GoalNarrative: null,
      ExerciseID: null,
      Active: 1,
      ID: uuidv1(),
      CreatedAt: new Date().toUTCString(),
      UpdatedAt: null,
      Deleted: false,
      Version: null,
      NeedsSync: true
    }
    if (item.Workout_ExerciseID === null) item.Workout_ExerciseID = 0
    item.UpdatedAt = (new Date()).toUTCString()
    item.NeedsSync = true
    item = {...defaults, ...item}
    context.commit('SET_WORKOUT_EXERCISE', item)
    APIinstance.mergeStats.mergeWorkout_Exercise(item)
  },
  saveWorkoutStage (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.WorkoutStageItem
    } else {
      item = payload
    }
    let defaults = {
      WorkoutStageID: null,
      WorkoutID: null,
      PersonID: context.rootGetters['Stats/Get_Person_List'][0].PersonID,
      GoalNarrative: null,
      isTemplate: false,
      Active: 1,
      ID: uuidv1(),
      CreatedAt: new Date().toUTCString(),
      UpdatedAt: null,
      Deleted: false,
      Version: null,
      NeedsSync: true
    }
    if (item.WorkoutStageID === null) item.WorkoutStageID = 0
    item.UpdatedAt = (new Date()).toUTCString()
    item.NeedsSync = true
    item = {...defaults, ...item}
    context.commit('SET_WORKOUTSTAGE', item)
    APIinstance.mergeStats.mergeWorkoutStage(item)
  },
  stub () {}
}

export default actions
