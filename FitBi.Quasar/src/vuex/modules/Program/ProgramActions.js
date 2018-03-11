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
    if (item.PlanID === null) item.PlanID = 0
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
    if (item.WorkoutID === null) item.WorkoutID = 0
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
    if (item.Workout_ExerciseID === null) item.Workout_ExerciseID = 0
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
    if (item.WorkoutStageID === null) item.WorkoutStageID = 0
    item.UpdateAt = (new Date()).toUTCString()
    item.NeedsSync = true
    context.commit('SET_WORKOUTSTAGE', item)
    Vue.$API.mergeProgram.mergeWorkoutStage(item)
  }
}

export default actions

