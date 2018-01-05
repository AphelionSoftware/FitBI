import store from 'vuex/store'
export default function (initValues) {
  store.commit('Exercise/Set_Exercise', initValues.Exercise)
  store.commit('Exercise/Set_Exercise_Sport', initValues.Exercise_Sport)
  store.commit('Exercise/Set_ExerciseType', initValues.ExerciseType)
  store.commit('Exercise/Set_Sport', initValues.Sport)
  store.commit('Program/Set_Plan', initValues.Plan)
  store.commit('Program/Set_Workout', initValues.Workout)
  store.commit('Program/Set_Workout_Exercise', initValues.Workout_Exercise)
  store.commit('Program/Set_WorkoutStage', initValues.WorkoutStage)
  store.commit('Stats/Set_Metric', initValues.Metric)
  store.commit('Stats/Set_Person', initValues.Person)
  store.commit('Stats/Set_SkinfoldMeasurement', initValues.SkinfoldMeasurement)
  store.commit('Stats/Set_TapeMeasurement', initValues.TapeMeasurement)
  store.commit('Stats/Set_WeightMeasurement', initValues.WeightMeasurement)
}
