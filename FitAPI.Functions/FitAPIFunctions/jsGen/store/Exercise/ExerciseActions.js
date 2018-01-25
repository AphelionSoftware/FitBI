const actions = {
  saveExercise (context) {
    let item = context.state.ExerciseItem
    item.UpdateAt = (new Date()).toUTCString()
    item.NeedsSync = true
    context.commit('Exercise/SET_EXERCISE', item)
    context.commit('Exercise/GET_EXERCISE', {})
  },
  saveExercise_Sport (context) {
    let item = context.state.Exercise_SportItem
    item.UpdateAt = (new Date()).toUTCString()
    item.NeedsSync = true
    context.commit('Exercise_Sport/SET_EXERCISE_SPORT', item)
    context.commit('Exercise/GET_EXERCISE_SPORT', {})
  },
  saveExerciseType (context) {
    let item = context.state.ExerciseTypeItem
    item.UpdateAt = (new Date()).toUTCString()
    item.NeedsSync = true
    context.commit('ExerciseType/SET_EXERCISETYPE', item)
    context.commit('Exercise/GET_EXERCISETYPE', {})
  },
  saveSport (context) {
    let item = context.state.SportItem
    item.UpdateAt = (new Date()).toUTCString()
    item.NeedsSync = true
    context.commit('Sport/SET_SPORT', item)
    context.commit('Exercise/GET_SPORT', {})
  }
}

export default actions

