import Vue from 'vue'
const actions = {
  saveExercise (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.ExerciseItem
    }
    else {
      item = payload
    }
    item.UpdateAt = (new Date()).toUTCString()
    item.NeedsSync = true
    context.commit('SET_EXERCISE', item)
    Vue.$API.mergeExercise.mergeExercise(item)
  },
  saveExercise_Sport (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.Exercise_SportItem
    }
    else {
      item = payload
    }
    item.UpdateAt = (new Date()).toUTCString()
    item.NeedsSync = true
    context.commit('SET_EXERCISE_SPORT', item)
    Vue.$API.mergeExercise.mergeExercise_Sport(item)
  },
  saveExerciseType (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.ExerciseTypeItem
    }
    else {
      item = payload
    }
    item.UpdateAt = (new Date()).toUTCString()
    item.NeedsSync = true
    context.commit('SET_EXERCISETYPE', item)
    Vue.$API.mergeExercise.mergeExerciseType(item)
  },
  saveSport (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.SportItem
    }
    else {
      item = payload
    }
    item.UpdateAt = (new Date()).toUTCString()
    item.NeedsSync = true
    context.commit('SET_SPORT', item)
    Vue.$API.mergeExercise.mergeSport(item)
  }
}

export default actions

