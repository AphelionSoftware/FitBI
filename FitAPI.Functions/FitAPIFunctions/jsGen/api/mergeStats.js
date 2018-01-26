/* eslint camelcase: 0 */
import Vue from 'vue'
function mergeMetric (payload) {
  Vue.$API.http.post('/merge/Exercise?' + Vue.$API.config.token.mergeExerciseToken, payload).then(
      function (response) {
        debugger
      })
}
function mergePerson (payload) {
  Vue.$API.http.post('/merge/Exercise?' + Vue.$API.config.token.mergeExerciseToken, payload).then(
      function (response) {
        debugger
      })
}
function mergeSkinfoldMeasurement (payload) {
  Vue.$API.http.post('/merge/Exercise?' + Vue.$API.config.token.mergeExerciseToken, payload).then(
      function (response) {
        debugger
      })
}
function mergeTapeMeasurement (payload) {
  Vue.$API.http.post('/merge/Exercise?' + Vue.$API.config.token.mergeExerciseToken, payload).then(
      function (response) {
        debugger
      })
}
function mergeWeightMeasurement (payload) {
  Vue.$API.http.post('/merge/Exercise?' + Vue.$API.config.token.mergeExerciseToken, payload).then(
      function (response) {
        debugger
      })
}
export {mergeMetric, mergePerson, mergeSkinfoldMeasurement, mergeTapeMeasurement, mergeWeightMeasurement}
