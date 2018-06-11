/* eslint camelcase: 0 */
import {APIinstance} from '../api.js'
import store from '../../store/index'
function mergePlan (payload) {
  let postData = {}
  if (payload.Plan) {
    postData = payload
  } else {
    postData.Plan = []
    postData.Plan.push(payload)
  }
  store.commit('AppState/SET_APIFLAG_PROPERTY', {Saved: false, Failed: false, InProgress: true})
  APIinstance.genericPost('/merge/Plan?' + APIinstance.config.mergePlanToken, postData)
}
function mergeWorkout (payload) {
  let postData = {}
  if (payload.Workout) {
    postData = payload
  } else {
    postData.Workout = []
    postData.Workout.push(payload)
  }
  store.commit('AppState/SET_APIFLAG_PROPERTY', {Saved: false, Failed: false, InProgress: true})
  APIinstance.genericPost('/merge/Workout?' + APIinstance.config.mergeWorkoutToken, postData)
}
function mergeWorkout_Exercise (payload) {
  let postData = {}
  if (payload.Workout_Exercise) {
    postData = payload
  } else {
    postData.Workout_Exercise = []
    postData.Workout_Exercise.push(payload)
  }
  store.commit('AppState/SET_APIFLAG_PROPERTY', {Saved: false, Failed: false, InProgress: true})
  APIinstance.genericPost('/merge/Workout_Exercise?' + APIinstance.config.mergeWorkout_ExerciseToken, postData)
}
function mergeWorkoutStage (payload) {
  let postData = {}
  if (payload.WorkoutStage) {
    postData = payload
  } else {
    postData.WorkoutStage = []
    postData.WorkoutStage.push(payload)
  }
  store.commit('AppState/SET_APIFLAG_PROPERTY', {Saved: false, Failed: false, InProgress: true})
  APIinstance.genericPost('/merge/WorkoutStage?' + APIinstance.config.mergeWorkoutStageToken, postData)
}
export {mergePlan, mergeWorkout, mergeWorkout_Exercise, mergeWorkoutStage}
