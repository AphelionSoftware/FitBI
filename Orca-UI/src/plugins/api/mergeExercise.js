/* eslint camelcase: 0 */
import {APIinstance} from '../api.js'
function mergeExercise (payload) {
  let postData = {}
  if (payload.Exercise) {
    postData = payload
  } else {
    postData.Exercise = []
    postData.Exercise.push(payload)
  }
  APIinstance.http.post('/merge/Exercise?' + APIinstance.config.mergeExerciseToken, postData).then(
    function (response) {
    })
}
function mergeExercise_Sport (payload) {
  let postData = {}
  if (payload.Exercise_Sport) {
    postData = payload
  } else {
    postData.Exercise_Sport = []
    postData.Exercise_Sport.push(payload)
  }
  APIinstance.http.post('/merge/Exercise_Sport?' + APIinstance.config.mergeExercise_SportToken, postData).then(
    function (response) {
    })
}
function mergeExerciseLink (payload) {
  let postData = {}
  if (payload.ExerciseLink) {
    postData = payload
  } else {
    postData.ExerciseLink = []
    postData.ExerciseLink.push(payload)
  }
  APIinstance.http.post('/merge/ExerciseLink?' + APIinstance.config.mergeExerciseLinkToken, postData).then(
    function (response) {
    })
}
function mergeExerciseType (payload) {
  let postData = {}
  if (payload.ExerciseType) {
    postData = payload
  } else {
    postData.ExerciseType = []
    postData.ExerciseType.push(payload)
  }
  APIinstance.http.post('/merge/ExerciseType?' + APIinstance.config.mergeExerciseTypeToken, postData).then(
    function (response) {
    })
}
function mergeSport (payload) {
  let postData = {}
  if (payload.Sport) {
    postData = payload
  } else {
    postData.Sport = []
    postData.Sport.push(payload)
  }
  APIinstance.http.post('/merge/Sport?' + APIinstance.config.mergeSportToken, postData).then(
    function (response) {
    })
}
export {mergeExercise, mergeExercise_Sport, mergeExerciseLink, mergeExerciseType, mergeSport}
