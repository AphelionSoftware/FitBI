import store from 'src/store/index'
import localForage from 'localforage'
export default async function () {
  let arrGet = []
  arrGet.push(localForage.getItem('AppState_Init'))
  arrGet.push(localForage.getItem('Exercise_Exercise'))
  arrGet.push(localForage.getItem('Exercise_Exercise_Sport'))
  arrGet.push(localForage.getItem('Exercise_ExerciseLink'))
  arrGet.push(localForage.getItem('Exercise_ExerciseType'))
  arrGet.push(localForage.getItem('Exercise_Sport'))
  arrGet.push(localForage.getItem('Program_Plan'))
  arrGet.push(localForage.getItem('Program_Workout'))
  arrGet.push(localForage.getItem('Program_Workout_Exercise'))
  arrGet.push(localForage.getItem('Program_WorkoutStage'))
  arrGet.push(localForage.getItem('Stats_DailyMeasurement'))
  arrGet.push(localForage.getItem('Stats_Metric'))
  arrGet.push(localForage.getItem('Stats_Person'))
  arrGet.push(localForage.getItem('Stats_SkinfoldMeasurement'))
  arrGet.push(localForage.getItem('Stats_TapeMeasurement'))
  arrGet.push(localForage.getItem('Stats_WeightMeasurement'))
  arrGet.push(localForage.getItem('UserSettings_ColumnChoice'))
  arrGet.push(localForage.getItem('UserSettings_GeneralSettings'))
  arrGet.push(localForage.getItem('UserSettings_StatsChoice'))
  // Assuming only a single person value
  arrGet.push(localForage.getItem('Stats_Person'))
  await Promise.all(arrGet)
    .then(function (results) {
      if (results[0] !== null) {
        store.commit('AppState/SET_INIT', results[0])
      }
      if (results[1] !== null) {
        store.commit('Exercise/SET_EXERCISE', results[1])
      }
      if (results[2] !== null) {
        store.commit('Exercise/SET_EXERCISE_SPORT', results[2])
      }
      if (results[3] !== null) {
        store.commit('Exercise/SET_EXERCISELINK', results[3])
      }
      if (results[4] !== null) {
        store.commit('Exercise/SET_EXERCISETYPE', results[4])
      }
      if (results[5] !== null) {
        store.commit('Exercise/SET_SPORT', results[5])
      }
      if (results[7] !== null) {
        store.commit('Program/SET_PLAN', results[7])
      }
      if (results[8] !== null) {
        store.commit('Program/SET_WORKOUT', results[8])
      }
      if (results[9] !== null) {
        store.commit('Program/SET_WORKOUT_EXERCISE', results[9])
      }
      if (results[10] !== null) {
        store.commit('Program/SET_WORKOUTSTAGE', results[10])
      }
      if (results[12] !== null) {
        store.commit('Stats/SET_DAILYMEASUREMENT', results[12])
      }
      if (results[13] !== null) {
        store.commit('Stats/SET_METRIC', results[13])
      }
      if (results[14] !== null) {
        store.commit('Stats/SET_PERSON', results[14])
      }
      if (results[15] !== null) {
        store.commit('Stats/SET_SKINFOLDMEASUREMENT', results[15])
      }
      if (results[16] !== null) {
        store.commit('Stats/SET_TAPEMEASUREMENT', results[16])
      }
      if (results[17] !== null) {
        store.commit('Stats/SET_WEIGHTMEASUREMENT', results[17])
      }
      if (results[19] !== null) {
        store.commit('UserSettings/SET_COLUMNCHOICE', results[19])
      }
      if (results[20] !== null) {
        store.commit('UserSettings/SET_GENERALSETTINGS', results[20])
      }
      if (results[21] !== null) {
        store.commit('UserSettings/SET_STATSCHOICE', results[21])
      }
      if (results[22] !== null) {
        store.commit('AppState/SET_INIT', results[22])
      }
    })
}
