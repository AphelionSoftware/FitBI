import Vue from 'vue'
import Vuex from 'vuex'
// Import the `getField` getter and the `updateField`
// mutation function from the `vuex-map-fields` module.
import { getField, updateField } from '../../../helpers/vuex-map-fields/index'
// import { getField, updateField } from 'vuex-map-fields'

Vue.use(Vuex)

const state = {
  Exercise: { },
  ExerciseList: [],
  ExerciseItem: {},
  Exercise_Sport: { },
  Exercise_SportList: [],
  Exercise_SportItem: {},
  ExerciseType: { },
  ExerciseTypeList: [],
  ExerciseTypeItem: {},
  Sport: { },
  SportList: [],
  SportItem: {}
}

const getters = {
  getField,
  Get_Exercise_ByRouteID: function (state, getters, rootState) {
    return state.Exercise[+rootState.route.params.exerciseid]
  },
  Get_Exercise_All: function () {
    return state.Exercise
  },
  Get_Exercise_List: function () {
    return state.Exercise
  },
  Get_Exercise_Item: function () {
    return state.ExerciseItem
  },
  Get_Exercise_Sport_ByRouteID: function (state, getters, rootState) {
    return state.Exercise_Sport[+rootState.route.params.exercise_sportid]
  },
  Get_Exercise_Sport_All: function () {
    return state.Exercise_Sport
  },
  Get_Exercise_Sport_List: function () {
    return state.Exercise_Sport
  },
  Get_Exercise_Sport_Item: function () {
    return state.Exercise_SportItem
  },
  Get_ExerciseType_ByRouteID: function (state, getters, rootState) {
    return state.ExerciseType[+rootState.route.params.exercisetypeid]
  },
  Get_ExerciseType_All: function () {
    return state.ExerciseType
  },
  Get_ExerciseType_List: function () {
    return state.ExerciseType
  },
  Get_ExerciseType_Item: function () {
    return state.ExerciseTypeItem
  },
  Get_Sport_ByRouteID: function (state, getters, rootState) {
    return state.Sport[+rootState.route.params.sportid]
  },
  Get_Sport_All: function () {
    return state.Sport
  },
  Get_Sport_List: function () {
    return state.Sport
  },
  Get_Sport_Item: function () {
    return state.SportItem
  }
}

const mutations = {
  updateField,
  SET_EXERCISE_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.Exercise, element.ExerciseID, element)
        state.ExerciseList.push(element.ExerciseID)
      }, this)
    }
  },
  SET_EXERCISE_SPORT_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.Exercise_Sport, element.Exercise_SportID, element)
        state.Exercise_SportList.push(element.Exercise_SportID)
      }, this)
    }
  },
  SET_EXERCISETYPE_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.ExerciseType, element.ExerciseTypeID, element)
        state.ExerciseTypeList.push(element.ExerciseTypeID)
      }, this)
    }
  },
  SET_SPORT_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.Sport, element.SportID, element)
        state.SportList.push(element.SportID)
      }, this)
    }
  }
}

const exercise = {
  namespaced: true,
  state,
  getters,
  mutations
}

export default exercise
