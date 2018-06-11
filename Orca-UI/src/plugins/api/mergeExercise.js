/* eslint camelcase: 0 */
import {APIinstance} from '../api.js'
import store from '../../store/index'
function mergeExercise (payload) {
  let postData = {}
  if (payload.Exercise) {
    postData = payload
  } else {
    postData.Exercise = []
    postData.Exercise.push(payload)
  }
  store.commit('AppState/SET_APIFLAG_PROPERTY', {Saved: false, Failed: false, InProgress: true})
  APIinstance.genericPost('/merge/Exercise?' + APIinstance.config.mergeExerciseToken, postData)
}
function mergeExercise_Sport (payload) {
  let postData = {}
  if (payload.Exercise_Sport) {
    postData = payload
  } else {
    postData.Exercise_Sport = []
    postData.Exercise_Sport.push(payload)
  }
  store.commit('AppState/SET_APIFLAG_PROPERTY', {Saved: false, Failed: false, InProgress: true})
  APIinstance.genericPost('/merge/Exercise_Sport?' + APIinstance.config.mergeExercise_SportToken, postData)
}
function mergeExerciseLink (payload) {
  let postData = {}
  if (payload.ExerciseLink) {
    postData = payload
  } else {
    postData.ExerciseLink = []
    postData.ExerciseLink.push(payload)
  }
  store.commit('AppState/SET_APIFLAG_PROPERTY', {Saved: false, Failed: false, InProgress: true})
  APIinstance.genericPost('/merge/ExerciseLink?' + APIinstance.config.mergeExerciseLinkToken, postData)
}
function mergeExerciseType (payload) {
  let postData = {}
  if (payload.ExerciseType) {
    postData = payload
  } else {
    postData.ExerciseType = []
    postData.ExerciseType.push(payload)
  }
  store.commit('AppState/SET_APIFLAG_PROPERTY', {Saved: false, Failed: false, InProgress: true})
  APIinstance.genericPost('/merge/ExerciseType?' + APIinstance.config.mergeExerciseTypeToken, postData)
}
function mergeSport (payload) {
  let postData = {}
  if (payload.Sport) {
    postData = payload
  } else {
    postData.Sport = []
    postData.Sport.push(payload)
  }
  store.commit('AppState/SET_APIFLAG_PROPERTY', {Saved: false, Failed: false, InProgress: true})
  APIinstance.genericPost('/merge/Sport?' + APIinstance.config.mergeSportToken, postData)
}
export {mergeExercise, mergeExercise_Sport, mergeExerciseLink, mergeExerciseType, mergeSport}
