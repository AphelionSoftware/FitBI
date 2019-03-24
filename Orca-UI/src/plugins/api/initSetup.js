import store from 'src/store/index'
export default function (initValues) {
  store.commit('AppState/SET_INIT', initValues.Version)
  /* Pasted from SQL */
  store.commit('Exercise/SET_EXERCISE_LIST', initValues.Exercise)
  store.commit('Exercise/SET_EXERCISE_SPORT_LIST', initValues.Exercise_Sport)
  store.commit('Exercise/SET_EXERCISELINK_LIST', initValues.ExerciseLink)
  store.commit('Exercise/SET_EXERCISETYPE_LIST', initValues.ExerciseType)
  store.commit('Exercise/SET_SPORT_LIST', initValues.Sport)
  store.commit('Program/SET_PLAN_LIST', initValues.Plan)
  store.commit('Program/SET_WORKOUT_LIST', initValues.Workout)
  store.commit('Program/SET_WORKOUT_EXERCISE_LIST', initValues.Workout_Exercise)
  store.commit('Program/SET_WORKOUTSTAGE_LIST', initValues.WorkoutStage)
  store.commit('Stats/SET_DAILYMEASUREMENT_LIST', initValues.DailyMeasurement)
  store.commit('Stats/SET_METRIC_LIST', initValues.Metric)
  store.commit('Stats/SET_METRICSET_LIST', initValues.MetricSet)
  store.commit('Stats/SET_METRICSETMETRICDETAIL_LIST', initValues.MetricSetMetricDetail)
  store.commit('Stats/SET_METRICVALUE_LIST', initValues.MetricValue)
  store.commit('Stats/SET_PERSON_LIST', initValues.Person)
  store.commit('Stats/SET_SKINFOLDMEASUREMENT_LIST', initValues.SkinfoldMeasurement)
  store.commit('Stats/SET_TAPEMEASUREMENT_LIST', initValues.TapeMeasurement)
  store.commit('Stats/SET_WEIGHTMEASUREMENT_LIST', initValues.WeightMeasurement)
  /* End generated code */
  // Assuming only a single person value
  store.commit('Stats/SET_PERSON', initValues.Person[0])
}
