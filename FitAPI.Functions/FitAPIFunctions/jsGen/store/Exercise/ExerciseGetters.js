import {getField} from 'vuex-map-fields'
import _ from 'underscore'
const getters = {
  Get_Exercise_ByRouteID: function (state, getters, rootState) {
    return state.Exercise[+rootState.route.params.Exerciseid]
  },
  Get_Exercise_Select: function (state) {
    return _.chain(state.Exercise)
      .map(item => {
        return {
          label: item.Name,
          value: item.ExerciseID
        }
      })
      .sortBy('Name')
      .value()
  },
  Get_Exercise_SelectObject: function (state) {
    return _.mapObject(
      _.indexBy(state.Exercise, 'ExerciseID'),
      item => ({
        label: item.Name,
        value: item.ExerciseID
      })
    )
  },
  Get_Exercise_List: function (state) {
    return _.sortBy(state.Exercise, 'Name')
  },
  Get_Exercise_Sport_ByRouteID: function (state, getters, rootState) {
    return state.Exercise_Sport[+rootState.route.params.Exercise_Sportid]
  },
  Get_Exercise_Sport_Select: function (state) {
    return _.chain(state.Exercise_Sport)
      .map(item => {
        return {
          label: item.Name,
          value: item.Exercise_SportID
        }
      })
      .sortBy('Name')
      .value()
  },
  Get_Exercise_Sport_SelectObject: function (state) {
    return _.mapObject(
      _.indexBy(state.Exercise_Sport, 'Exercise_SportID'),
      item => ({
        label: item.Name,
        value: item.Exercise_SportID
      })
    )
  },
  Get_Exercise_Sport_List: function (state) {
    return _.sortBy(state.Exercise_Sport, 'Name')
  },
  Get_ExerciseLink_ByRouteID: function (state, getters, rootState) {
    return state.ExerciseLink[+rootState.route.params.ExerciseLinkid]
  },
  Get_ExerciseLink_Select: function (state) {
    return _.chain(state.ExerciseLink)
      .map(item => {
        return {
          label: item.Name,
          value: item.ExerciseLinkID
        }
      })
      .sortBy('Name')
      .value()
  },
  Get_ExerciseLink_SelectObject: function (state) {
    return _.mapObject(
      _.indexBy(state.ExerciseLink, 'ExerciseLinkID'),
      item => ({
        label: item.Name,
        value: item.ExerciseLinkID
      })
    )
  },
  Get_ExerciseLink_List: function (state) {
    return _.sortBy(state.ExerciseLink, 'Name')
  },
  Get_ExerciseType_ByRouteID: function (state, getters, rootState) {
    return state.ExerciseType[+rootState.route.params.ExerciseTypeid]
  },
  Get_ExerciseType_Select: function (state) {
    return _.chain(state.ExerciseType)
      .map(item => {
        return {
          label: item.Name,
          value: item.ExerciseTypeID
        }
      })
      .sortBy('Name')
      .value()
  },
  Get_ExerciseType_SelectObject: function (state) {
    return _.mapObject(
      _.indexBy(state.ExerciseType, 'ExerciseTypeID'),
      item => ({
        label: item.Name,
        value: item.ExerciseTypeID
      })
    )
  },
  Get_ExerciseType_List: function (state) {
    return _.sortBy(state.ExerciseType, 'Name')
  },
  Get_Sport_ByRouteID: function (state, getters, rootState) {
    return state.Sport[+rootState.route.params.Sportid]
  },
  Get_Sport_Select: function (state) {
    return _.chain(state.Sport)
      .map(item => {
        return {
          label: item.Name,
          value: item.SportID
        }
      })
      .sortBy('Name')
      .value()
  },
  Get_Sport_SelectObject: function (state) {
    return _.mapObject(
      _.indexBy(state.Sport, 'SportID'),
      item => ({
        label: item.Name,
        value: item.SportID
      })
    )
  },
  Get_Sport_List: function (state) {
    return _.sortBy(state.Sport, 'Name')
  },
  Get_Flags: function (state) {
    return state.Flags
  },
  getField
}

export default getters
