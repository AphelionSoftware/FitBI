/* eslint camelcase: 0 */
import Vue from 'vue'
function mergePlan (payload) {
  let postData = {}
  if (payload.Plan) {
    postData = payload
  } else {
    postData.Plan = []
    postData.Plan.push(payload)
  }
  Vue.$API.http.post('/merge/Plan?' + Vue.$API.config.token.mergePlanToken, postData).then(
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
  Vue.$API.http.post('/merge/Workout?' + Vue.$API.config.token.mergeWorkoutToken, postData).then(
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
  Vue.$API.http.post('/merge/Workout_Exercise?' + Vue.$API.config.token.mergeWorkout_ExerciseToken, postData).then(
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
  Vue.$API.http.post('/merge/WorkoutStage?' + Vue.$API.config.token.mergeWorkoutStageToken, postData).then(
    function (response) {
    })
}
export {mergePlan, mergeWorkout, mergeWorkout_Exercise, mergeWorkoutStage}
