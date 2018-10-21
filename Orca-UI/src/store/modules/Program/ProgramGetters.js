import {getField} from 'vuex-map-fields'
import _ from 'underscore'
const getters = {
  Get_Plan_ByRouteID: function (state, getters, rootState) {
    return state.Plan[+rootState.route.params.Planid]
  },
  Get_PlanItem: function (state) {
    return state.PlanItem
  },
  Get_Plan_Select: function (state) {
    return _.chain(state.Plan)
      .map(item => {
        return {
          label: item.Name,
          value: item.PlanID
        }
      })
      .sortBy('Name')
      .value()
  },
  Get_Plan_SelectObject: function (state) {
    return _.mapObject(
      _.indexBy(state.Plan, 'PlanID'),
      item => ({
        label: item.Name,
        value: item.PlanID
      })
    )
  },
  Get_Plan_List: function (state) {
    return _.sortBy(state.Plan, 'Name')
  },
  Get_Plan_Item: function (state) {
    return state.PlanItem
  },
  Get_Workout_ByRouteID: function (state, getters, rootState) {
    return state.Workout[+rootState.route.params.Workoutid]
  },
  Get_WorkoutItem: function (state) {
    return state.WorkoutItem
  },
  Get_Workout_Select: function (state) {
    return _.chain(state.Workout)
      .map(item => {
        return {
          label: item.Name,
          value: item.WorkoutID
        }
      })
      .sortBy('Name')
      .value()
  },
  Get_Workout_SelectObject: function (state) {
    return _.mapObject(
      _.indexBy(state.Workout, 'WorkoutID'),
      item => ({
        label: item.Name,
        value: item.WorkoutID
      })
    )
  },
  Get_Workout_List: function (state) {
    return _.sortBy(state.Workout, 'Name')
  },
  Get_Workout_Item: function (state) {
    return state.WorkoutItem
  },
  Get_Workout_Exercise_ByRouteID: function (state, getters, rootState) {
    return state.Workout_Exercise[+rootState.route.params.Workout_Exerciseid]
  },
  Get_Workout_ExerciseItem: function (state) {
    return state.Workout_ExerciseItem
  },
  Get_Workout_Exercise_Select: function (state) {
    return _.chain(state.Workout_Exercise)
      .map(item => {
        return {
          label: item.Name,
          value: item.Workout_ExerciseID
        }
      })
      .sortBy('Name')
      .value()
  },
  Get_Workout_Exercise_SelectObject: function (state) {
    return _.mapObject(
      _.indexBy(state.Workout_Exercise, 'Workout_ExerciseID'),
      item => ({
        label: item.Name,
        value: item.Workout_ExerciseID
      })
    )
  },
  Get_Workout_Exercise_List: function (state) {
    return _.sortBy(state.Workout_Exercise, 'Name')
  },
  Get_Workout_Exercise_Item: function (state) {
    return state.Workout_ExerciseItem
  },
  Get_WorkoutStage_ByRouteID: function (state, getters, rootState) {
    return state.WorkoutStage[+rootState.route.params.WorkoutStageid]
  },
  Get_WorkoutStageItem: function (state) {
    return state.WorkoutStageItem
  },
  Get_WorkoutStage_Select: function (state) {
    return _.chain(state.WorkoutStage)
      .map(item => {
        return {
          label: item.Name,
          value: item.WorkoutStageID
        }
      })
      .sortBy('Name')
      .value()
  },
  Get_WorkoutStage_SelectObject: function (state) {
    return _.mapObject(
      _.indexBy(state.WorkoutStage, 'WorkoutStageID'),
      item => ({
        label: item.Name,
        value: item.WorkoutStageID
      })
    )
  },
  Get_WorkoutStage_List: function (state) {
    return _.sortBy(state.WorkoutStage, 'Name')
  },
  Get_WorkoutStage_Item: function (state) {
    return state.WorkoutStageItem
  },
  Get_Flags: function (state) {
    return state.Flags
  },
  getField
}

export default getters
