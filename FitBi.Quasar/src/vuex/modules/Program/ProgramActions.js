const actions = {
  savePlan (context) {
    let item = context.state.PlanItem
    item.UpdateAt = (new Date()).toUTCString()
    item.NeedsSync = true
    context.commit('Plan/SET_PLAN', item)
    context.commit('Exercise/GET_PLAN', {})
  },
  saveWorkout (context) {
    let item = context.state.WorkoutItem
    item.UpdateAt = (new Date()).toUTCString()
    item.NeedsSync = true
    context.commit('Workout/SET_WORKOUT', item)
    context.commit('Exercise/GET_WORKOUT', {})
  },
  saveWorkout_Exercise (context) {
    let item = context.state.Workout_ExerciseItem
    item.UpdateAt = (new Date()).toUTCString()
    item.NeedsSync = true
    context.commit('Workout_Exercise/SET_WORKOUT_EXERCISE', item)
    context.commit('Exercise/GET_WORKOUT_EXERCISE', {})
  },
  saveWorkoutStage (context) {
    let item = context.state.WorkoutStageItem
    item.UpdateAt = (new Date()).toUTCString()
    item.NeedsSync = true
    context.commit('WorkoutStage/SET_WORKOUTSTAGE', item)
    context.commit('Exercise/GET_WORKOUTSTAGE', {})
  }
}

export default actions

