import {updateField} from 'vuex-map-fields'
const getters = {
Get_Exercise_ByRouteID: function (state, getters, rootState) {
    return state.Exercise[+rootState.route.params.Exerciseid]
  },
  Get_Exercise_ByExerciseID: function (state) {
    return function (ExerciseID) {
      return state.Exercise[ExerciseID]
    }
  },
  Get_ExerciseItem: function () {
    return state.ExerciseItem
  },
  Get_Exercise_All: function () {
    return state.Exercise
  },
  Get_Exercise_Select: function () {
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
  Get_Exercise_SelectObject: function () {
    return _.mapObject(
      _.indexBy(state.Exercise, 'ExerciseID'),
      item => ({
        label: item.Name,
        value: item.ExerciseID
      })
    )
  },
  Get_Exercise_List: function () {
    return _.sortBy(state.Exercise, 'Name')
  },
  Get_Exercise_Item: function () {
    return state.ExerciseItem
  },
Get_Exercise_Sport_ByRouteID: function (state, getters, rootState) {
    return state.Exercise_Sport[+rootState.route.params.Exercise_Sportid]
  },
  Get_Exercise_Sport_ByExercise_SportID: function (state) {
    return function (Exercise_SportID) {
      return state.Exercise_Sport[Exercise_SportID]
    }
  },
  Get_Exercise_SportItem: function () {
    return state.Exercise_SportItem
  },
  Get_Exercise_Sport_All: function () {
    return state.Exercise_Sport
  },
  Get_Exercise_Sport_Select: function () {
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
  Get_Exercise_Sport_SelectObject: function () {
    return _.mapObject(
      _.indexBy(state.Exercise_Sport, 'Exercise_SportID'),
      item => ({
        label: item.Name,
        value: item.Exercise_SportID
      })
    )
  },
  Get_Exercise_Sport_List: function () {
    return _.sortBy(state.Exercise_Sport, 'Name')
  },
  Get_Exercise_Sport_Item: function () {
    return state.Exercise_SportItem
  },
Get_ExerciseLink_ByRouteID: function (state, getters, rootState) {
    return state.ExerciseLink[+rootState.route.params.ExerciseLinkid]
  },
  Get_ExerciseLink_ByExerciseLinkID: function (state) {
    return function (ExerciseLinkID) {
      return state.ExerciseLink[ExerciseLinkID]
    }
  },
  Get_ExerciseLinkItem: function () {
    return state.ExerciseLinkItem
  },
  Get_ExerciseLink_All: function () {
    return state.ExerciseLink
  },
  Get_ExerciseLink_Select: function () {
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
  Get_ExerciseLink_SelectObject: function () {
    return _.mapObject(
      _.indexBy(state.ExerciseLink, 'ExerciseLinkID'),
      item => ({
        label: item.Name,
        value: item.ExerciseLinkID
      })
    )
  },
  Get_ExerciseLink_List: function () {
    return _.sortBy(state.ExerciseLink, 'Name')
  },
  Get_ExerciseLink_Item: function () {
    return state.ExerciseLinkItem
  },
Get_ExerciseType_ByRouteID: function (state, getters, rootState) {
    return state.ExerciseType[+rootState.route.params.ExerciseTypeid]
  },
  Get_ExerciseType_ByExerciseTypeID: function (state) {
    return function (ExerciseTypeID) {
      return state.ExerciseType[ExerciseTypeID]
    }
  },
  Get_ExerciseTypeItem: function () {
    return state.ExerciseTypeItem
  },
  Get_ExerciseType_All: function () {
    return state.ExerciseType
  },
  Get_ExerciseType_Select: function () {
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
  Get_ExerciseType_SelectObject: function () {
    return _.mapObject(
      _.indexBy(state.ExerciseType, 'ExerciseTypeID'),
      item => ({
        label: item.Name,
        value: item.ExerciseTypeID
      })
    )
  },
  Get_ExerciseType_List: function () {
    return _.sortBy(state.ExerciseType, 'Name')
  },
  Get_ExerciseType_Item: function () {
    return state.ExerciseTypeItem
  },
Get_Sport_ByRouteID: function (state, getters, rootState) {
    return state.Sport[+rootState.route.params.Sportid]
  },
  Get_Sport_BySportID: function (state) {
    return function (SportID) {
      return state.Sport[SportID]
    }
  },
  Get_SportItem: function () {
    return state.SportItem
  },
  Get_Sport_All: function () {
    return state.Sport
  },
  Get_Sport_Select: function () {
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
  Get_Sport_SelectObject: function () {
    return _.mapObject(
      _.indexBy(state.Sport, 'SportID'),
      item => ({
        label: item.Name,
        value: item.SportID
      })
    )
  },
  Get_Sport_List: function () {
    return _.sortBy(state.Sport, 'Name')
  },
  Get_Sport_Item: function () {
    return state.SportItem
  },
  getField
}

export default getters
