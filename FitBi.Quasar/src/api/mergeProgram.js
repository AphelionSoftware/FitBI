/* eslint camelcase: 0 */
import Vue from 'vue'
function mergePlan (payload) {
  Vue.$API.http.post('/merge/Exercise?' + Vue.$API.config.token.mergeExerciseToken, payload).then(
      function (response) {
        debugger
      })
}
function mergeWorkout (payload) {
  Vue.$API.http.post('/merge/Exercise?' + Vue.$API.config.token.mergeExerciseToken, payload).then(
      function (response) {
        debugger
      })
}
function mergeWorkout_Exercise (payload) {
  Vue.$API.http.post('/merge/Exercise?' + Vue.$API.config.token.mergeExerciseToken, payload).then(
      function (response) {
        debugger
      })
}
function mergeWorkoutStage (payload) {
  Vue.$API.http.post('/merge/Exercise?' + Vue.$API.config.token.mergeExerciseToken, payload).then(
      function (response) {
        debugger
      })
}
export {mergePlan, mergeWorkout, mergeWorkout_Exercise, mergeWorkoutStage}
