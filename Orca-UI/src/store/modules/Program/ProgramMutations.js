import {updateField} from 'vuex-map-fields'
import Vue from 'vue'
import localForage from 'localforage'
import _ from 'underscore'
const mutations = {
  SET_PLAN_PROPERTIES (state, payload) {
    if (typeof payload !== 'undefined') {
      Vue.set(state.Plan, payload.PlanID, {...state.Plan[payload.PlanID], ...payload})
      localForage.setItem('Program_Plan', state.Plan)
    }
  },
  SET_PLAN (state, payload) {
    if (typeof payload !== 'undefined') {
      Vue.set(state.Plan, payload.PlanID, payload)
      localForage.setItem('Program_Plan', state.Plan)
    }
  },
  SET_PLAN_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.Plan, element.PlanID, element)
      }, this)
      _.each(state.Plan, (item, idx) => {
        if (item.PlanID >= 1073741824 || item.PlanID === null) {
          let extant = _.find(state.Plan, extItem => {
            return extItem.ID === item.ID && extItem.PlanID !== item.PlanID
          })
          if (typeof extant !== 'undefined') {
            if (item.UpdatedAt >= extant.UpdatedAt) {
              let extId = +extant.PlanID
              let newVal = {...extant, ...item}
              newVal.PlanID = extId
              Vue.set(state.Plan, newVal.PlanID, newVal)
              Vue.delete(state.Plan, item.PlanID)
            } else {
              Vue.delete(state.Plan, item.PlanID)
            }
          }
        }
      })

      localForage.setItem('Program_Plan', state.Plan)
    }
  },
  SET_WORKOUT_PROPERTIES (state, payload) {
    if (typeof payload !== 'undefined') {
      Vue.set(state.Workout, payload.WorkoutID, {...state.Workout[payload.WorkoutID], ...payload})
      localForage.setItem('Program_Workout', state.Workout)
    }
  },
  SET_WORKOUT (state, payload) {
    if (typeof payload !== 'undefined') {
      Vue.set(state.Workout, payload.WorkoutID, payload)
      localForage.setItem('Program_Workout', state.Workout)
    }
  },
  SET_WORKOUT_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.Workout, element.WorkoutID, element)
      }, this)
      _.each(state.Workout, (item, idx) => {
        if (item.WorkoutID >= 1073741824 || item.WorkoutID === null) {
          let extant = _.find(state.Workout, extItem => {
            return extItem.ID === item.ID && extItem.WorkoutID !== item.WorkoutID
          })
          if (typeof extant !== 'undefined') {
            if (item.UpdatedAt >= extant.UpdatedAt) {
              let extId = +extant.WorkoutID
              let newVal = {...extant, ...item}
              newVal.WorkoutID = extId
              Vue.set(state.Workout, newVal.WorkoutID, newVal)
              Vue.delete(state.Workout, item.WorkoutID)
            } else {
              Vue.delete(state.Workout, item.WorkoutID)
            }
          }
        }
      })

      localForage.setItem('Program_Workout', state.Workout)
    }
  },
  SET_WORKOUT_EXERCISE_PROPERTIES (state, payload) {
    if (typeof payload !== 'undefined') {
      Vue.set(state.Workout_Exercise, payload.Workout_ExerciseID, {...state.Workout_Exercise[payload.Workout_ExerciseID], ...payload})
      localForage.setItem('Program_Workout_Exercise', state.Workout_Exercise)
    }
  },
  SET_WORKOUT_EXERCISE (state, payload) {
    if (typeof payload !== 'undefined') {
      Vue.set(state.Workout_Exercise, payload.Workout_ExerciseID, payload)
      localForage.setItem('Program_Workout_Exercise', state.Workout_Exercise)
    }
  },
  SET_WORKOUT_EXERCISE_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.Workout_Exercise, element.Workout_ExerciseID, element)
      }, this)
      _.each(state.Workout_Exercise, (item, idx) => {
        if (item.Workout_ExerciseID >= 1073741824 || item.Workout_ExerciseID === null) {
          let extant = _.find(state.Workout_Exercise, extItem => {
            return extItem.ID === item.ID && extItem.Workout_ExerciseID !== item.Workout_ExerciseID
          })
          if (typeof extant !== 'undefined') {
            if (item.UpdatedAt >= extant.UpdatedAt) {
              let extId = +extant.Workout_ExerciseID
              let newVal = {...extant, ...item}
              newVal.Workout_ExerciseID = extId
              Vue.set(state.Workout_Exercise, newVal.Workout_ExerciseID, newVal)
              Vue.delete(state.Workout_Exercise, item.Workout_ExerciseID)
            } else {
              Vue.delete(state.Workout_Exercise, item.Workout_ExerciseID)
            }
          }
        }
      })

      localForage.setItem('Program_Workout_Exercise', state.Workout_Exercise)
    }
  },
  SET_WORKOUTSTAGE_PROPERTIES (state, payload) {
    if (typeof payload !== 'undefined') {
      Vue.set(state.WorkoutStage, payload.WorkoutStageID, {...state.WorkoutStage[payload.WorkoutStageID], ...payload})
      localForage.setItem('Program_WorkoutStage', state.WorkoutStage)
    }
  },
  SET_WORKOUTSTAGE (state, payload) {
    if (typeof payload !== 'undefined') {
      Vue.set(state.WorkoutStage, payload.WorkoutStageID, payload)
      localForage.setItem('Program_WorkoutStage', state.WorkoutStage)
    }
  },
  SET_WORKOUTSTAGE_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.WorkoutStage, element.WorkoutStageID, element)
      }, this)
      _.each(state.WorkoutStage, (item, idx) => {
        if (item.WorkoutStageID >= 1073741824 || item.WorkoutStageID === null) {
          let extant = _.find(state.WorkoutStage, extItem => {
            return extItem.ID === item.ID && extItem.WorkoutStageID !== item.WorkoutStageID
          })
          if (typeof extant !== 'undefined') {
            if (item.UpdatedAt >= extant.UpdatedAt) {
              let extId = +extant.WorkoutStageID
              let newVal = {...extant, ...item}
              newVal.WorkoutStageID = extId
              Vue.set(state.WorkoutStage, newVal.WorkoutStageID, newVal)
              Vue.delete(state.WorkoutStage, item.WorkoutStageID)
            } else {
              Vue.delete(state.WorkoutStage, item.WorkoutStageID)
            }
          }
        }
      })

      localForage.setItem('Program_WorkoutStage', state.WorkoutStage)
    }
  },
  SET_FLAG (state, payload) {
    if (payload === false) {
      state.Flags.loaded = false
    } else if (payload === true) {
      state.Flags.loaded = true
    } else {
      state.Flags = {...state.Flags, ...payload}
    }
  },
  updateField
}

export default mutations
