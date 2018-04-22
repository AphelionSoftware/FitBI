import {APIinstance} from '../../../plugins/api.js'
const actions = {
  saveExercise (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.ExerciseItem
    } else {
      item = payload
    }
    if (item.ExerciseID === null) item.ExerciseID = 0
    item.UpdateAt = (new Date()).toUTCString()
    item.NeedsSync = true
    context.commit('SET_Exercise', item)
    APIinstance.mergeStats.mergeExercise(item)
  },
  saveExercise_Sport (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.Exercise_SportItem
    } else {
      item = payload
    }
    if (item.Exercise_SportID === null) item.Exercise_SportID = 0
    item.UpdateAt = (new Date()).toUTCString()
    item.NeedsSync = true
    context.commit('SET_Exercise_Sport', item)
    APIinstance.mergeStats.mergeExercise_Sport(item)
  },
  saveExerciseLink (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.ExerciseLinkItem
    } else {
      item = payload
    }
    if (item.ExerciseLinkID === null) item.ExerciseLinkID = 0
    item.UpdateAt = (new Date()).toUTCString()
    item.NeedsSync = true
    context.commit('SET_ExerciseLink', item)
    APIinstance.mergeStats.mergeExerciseLink(item)
  },
  saveExerciseType (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.ExerciseTypeItem
    } else {
      item = payload
    }
    if (item.ExerciseTypeID === null) item.ExerciseTypeID = 0
    item.UpdateAt = (new Date()).toUTCString()
    item.NeedsSync = true
    context.commit('SET_ExerciseType', item)
    APIinstance.mergeStats.mergeExerciseType(item)
  },
  saveSport (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.SportItem
    } else {
      item = payload
    }
    if (item.SportID === null) item.SportID = 0
    item.UpdateAt = (new Date()).toUTCString()
    item.NeedsSync = true
    context.commit('SET_Sport', item)
    APIinstance.mergeStats.mergeSport(item)
  },
  stub () {}
}

export default actions
