import Vue from 'vue'
const actions = {
  savePlan (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.PlanItem
    }
    else {
      item = payload
    }
    item.UpdateAt = (new Date()).toUTCString()
    item.NeedsSync = true
    context.commit('SET_PLAN', item)
    Vue.$API.mergeProgram.mergePlan(item)
  },
  saveWorkout (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.WorkoutItem
    }
    else {
      item = payload
    }
    item.UpdateAt = (new Date()).toUTCString()
    item.NeedsSync = true
    context.commit('SET_WORKOUT', item)
    Vue.$API.mergeProgram.mergeWorkout(item)
  },
  saveWorkout_Exercise (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.Workout_ExerciseItem
    }
    else {
      item = payload
    }
    item.UpdateAt = (new Date()).toUTCString()
    item.NeedsSync = true
    context.commit('SET_WORKOUT_EXERCISE', item)
    Vue.$API.mergeProgram.mergeWorkout_Exercise(item)
  },
  saveWorkoutStage (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.WorkoutStageItem
    }
    else {
      item = payload
    }
    item.UpdateAt = (new Date()).toUTCString()
    item.NeedsSync = true
    context.commit('SET_WORKOUTSTAGE', item)
    Vue.$API.mergeProgram.mergeWorkoutStage(item)
  }
}

export default actions

