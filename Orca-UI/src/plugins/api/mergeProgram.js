/* eslint camelcase: 0 */
import {APIinstance} from '../api.js'
function mergePlan (payload) {
  let postData = {}
  if (payload.Plan) {
    postData = payload
  } else {
    postData.Plan = []
    postData.Plan.push(payload)
  }
  APIinstance.http.post('/merge/Plan?' + APIinstance.config.mergePlanToken, postData).then(
    function (response) {
    })
}
function mergeWorkout (payload) {
  let postData = {}
  if (payload.Workout) {
    postData = payload
  } else {
    postData.Workout = []
    postData.Workout.push(payload)
  }
  APIinstance.http.post('/merge/Workout?' + APIinstance.config.mergeWorkoutToken, postData).then(
    function (response) {
    })
}
function mergeWorkout_Exercise (payload) {
  let postData = {}
  if (payload.Workout_Exercise) {
    postData = payload
  } else {
    postData.Workout_Exercise = []
    postData.Workout_Exercise.push(payload)
  }
  APIinstance.http.post('/merge/Workout_Exercise?' + APIinstance.config.mergeWorkout_ExerciseToken, postData).then(
    function (response) {
    })
}
function mergeWorkoutStage (payload) {
  let postData = {}
  if (payload.WorkoutStage) {
    postData = payload
  } else {
    postData.WorkoutStage = []
    postData.WorkoutStage.push(payload)
  }
  APIinstance.http.post('/merge/WorkoutStage?' + APIinstance.config.mergeWorkoutStageToken, postData).then(
    function (response) {
    })
}
export {mergePlan, mergeWorkout, mergeWorkout_Exercise, mergeWorkoutStage}
