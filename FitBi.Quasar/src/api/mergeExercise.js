/* eslint camelcase: 0 */
import Vue from 'vue'
function mergeExercise (payload) {
  let postData = {}
  if (payload.Exercise) {
    postData = payload
  }
  else {
    postData.Exercise = []
    postData.Exercise.push(payload)
  }
  this.$API.http.post('/merge/Exercise?' + this.$API.config.token.mergeExerciseToken, postData).then(
      function (response) {
      })
}
function mergeExercise_Sport (payload) {
  let postData = {}
  if (payload.Exercise_Sport) {
    postData = payload
  }
  else {
    postData.Exercise_Sport = []
    postData.Exercise_Sport.push(payload)
  }
  this.$API.http.post('/merge/Exercise_Sport?' + this.$API.config.token.mergeExercise_SportToken, postData).then(
      function (response) {
      })
}
function mergeExerciseLink (payload) {
  let postData = {}
  if (payload.ExerciseLink) {
    postData = payload
  }
  else {
    postData.ExerciseLink = []
    postData.ExerciseLink.push(payload)
  }
  this.$API.http.post('/merge/ExerciseLink?' + this.$API.config.token.mergeExerciseLinkToken, postData).then(
      function (response) {
      })
}
function mergeExerciseType (payload) {
  let postData = {}
  if (payload.ExerciseType) {
    postData = payload
  }
  else {
    postData.ExerciseType = []
    postData.ExerciseType.push(payload)
  }
  this.$API.http.post('/merge/ExerciseType?' + this.$API.config.token.mergeExerciseTypeToken, postData).then(
      function (response) {
      })
}
function mergeSport (payload) {
  let postData = {}
  if (payload.Sport) {
    postData = payload
  }
  else {
    postData.Sport = []
    postData.Sport.push(payload)
  }
  this.$API.http.post('/merge/Sport?' + this.$API.config.token.mergeSportToken, postData).then(
      function (response) {
      })
}
export {mergeExercise, mergeExercise_Sport, mergeExerciseLink, mergeExerciseType, mergeSport}
