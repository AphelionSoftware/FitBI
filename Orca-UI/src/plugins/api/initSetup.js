import store from 'src/store/index'
export default function (initValues) {
  debugger
  store.commit('AppState/SET_INIT', initValues.Version)
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
  store.commit('Stats/SET_PERSON_LIST', initValues.Person)
  store.commit('Stats/SET_SKINFOLDMEASUREMENT_LIST', initValues.SkinfoldMeasurement)
  store.commit('Stats/SET_TAPEMEASUREMENT_LIST', initValues.TapeMeasurement)
  store.commit('Stats/SET_WEIGHTMEASUREMENT_LIST', initValues.WeightMeasurement)
  store.commit('UserSettings/SET_COLUMNCHOICE_LIST', initValues.ColumnChoice)
  store.commit('UserSettings/SET_GENERALSETTINGS_LIST', initValues.GeneralSettings)
  store.commit('UserSettings/SET_STATSCHOICE_LIST', initValues.StatsChoice)
  // Assuming only a single person value
  store.commit('Stats/GET_PERSON', initValues.Person[0])
}
