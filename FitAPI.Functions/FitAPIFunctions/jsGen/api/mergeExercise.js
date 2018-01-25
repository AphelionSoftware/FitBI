/* eslint camelcase: 0 */
import Vue from 'vue'
function mergeExercise (payload) {
  Vue.$API.http.post('/merge/Exercise?' + Vue.$API.config.token.mergeExerciseToken, payload).then(
      function (response) {
        debugger
      })
}
function mergeExercise_Sport (payload) {
  Vue.$API.http.post('/merge/Exercise?' + Vue.$API.config.token.mergeExerciseToken, payload).then(
      function (response) {
        debugger
      })
}
function mergeExerciseType (payload) {
  Vue.$API.http.post('/merge/Exercise?' + Vue.$API.config.token.mergeExerciseToken, payload).then(
      function (response) {
        debugger
      })
}
function mergeSport (payload) {
  Vue.$API.http.post('/merge/Exercise?' + Vue.$API.config.token.mergeExerciseToken, payload).then(
      function (response) {
        debugger
      })
}
export {mergeExercise, mergeExercise_Sport, mergeExerciseType, mergeSport}
