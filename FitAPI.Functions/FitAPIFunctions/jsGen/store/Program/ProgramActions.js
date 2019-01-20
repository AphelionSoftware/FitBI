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
      UpdatedAt: new Date(),
      Deleted: false,
      Version: null,
      NeedsSync: true
    }
    if (typeof item.StartDate === 'undefined' || item.StartDate === null) {
      item.StartDate = new Date()
    } else {
      item.StartDate = new Date(item.StartDate)
    }
    item.StartDate = item.StartDate.toUTCString()
    if (typeof item.UpdatedAt === 'undefined' || item.UpdatedAt === null) {
      item.UpdatedAt = new Date()
    } else {
      item.UpdatedAt = new Date(item.UpdatedAt)
    }
    item.UpdatedAt = item.UpdatedAt.toUTCString()
    item.UpdatedAt = (new Date()).toUTCString()
    item.NeedsSync = true
    item = {...defaults, ...item}
    if (item.PlanID === null) item.PlanID = Math.round(Math.random() * 1073741824) + 1073741823 // Gets us a random number above 1073741823 but less than full positive int.
    context.commit('SET_PLAN', item)
    APIinstance.mergeProgram.mergePlan(item)
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
      UpdatedAt: new Date(),
      Deleted: false,
      Version: null,
      NeedsSync: true
    }
    if (typeof item.UpdatedAt === 'undefined' || item.UpdatedAt === null) {
      item.UpdatedAt = new Date()
    } else {
      item.UpdatedAt = new Date(item.UpdatedAt)
    }
    item.UpdatedAt = item.UpdatedAt.toUTCString()
    item.UpdatedAt = (new Date()).toUTCString()
    item.NeedsSync = true
    item = {...defaults, ...item}
    if (item.WorkoutID === null) item.WorkoutID = Math.round(Math.random() * 1073741824) + 1073741823 // Gets us a random number above 1073741823 but less than full positive int.
    context.commit('SET_WORKOUT', item)
    APIinstance.mergeProgram.mergeWorkout(item)
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
      UpdatedAt: new Date(),
      Deleted: false,
      Version: null,
      NeedsSync: true
    }
    if (typeof item.UpdatedAt === 'undefined' || item.UpdatedAt === null) {
      item.UpdatedAt = new Date()
    } else {
      item.UpdatedAt = new Date(item.UpdatedAt)
    }
    item.UpdatedAt = item.UpdatedAt.toUTCString()
    item.UpdatedAt = (new Date()).toUTCString()
    item.NeedsSync = true
    item = {...defaults, ...item}
    if (item.Workout_ExerciseID === null) item.Workout_ExerciseID = Math.round(Math.random() * 1073741824) + 1073741823 // Gets us a random number above 1073741823 but less than full positive int.
    context.commit('SET_WORKOUT_EXERCISE', item)
    APIinstance.mergeProgram.mergeWorkout_Exercise(item)
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
      UpdatedAt: new Date(),
      Deleted: false,
      Version: null,
      NeedsSync: true
    }
    if (typeof item.UpdatedAt === 'undefined' || item.UpdatedAt === null) {
      item.UpdatedAt = new Date()
    } else {
      item.UpdatedAt = new Date(item.UpdatedAt)
    }
    item.UpdatedAt = item.UpdatedAt.toUTCString()
    item.UpdatedAt = (new Date()).toUTCString()
    item.NeedsSync = true
    item = {...defaults, ...item}
    if (item.WorkoutStageID === null) item.WorkoutStageID = Math.round(Math.random() * 1073741824) + 1073741823 // Gets us a random number above 1073741823 but less than full positive int.
    context.commit('SET_WORKOUTSTAGE', item)
    APIinstance.mergeProgram.mergeWorkoutStage(item)
  },
  stub () {}
}

export default actions
