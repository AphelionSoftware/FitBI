import Vue from 'vue'
import Vuex from 'vuex'
// Import the `getField` getter and the `updateField`
// mutation function from the `vuex-map-fields` module.
import { getField, updateField } from '../../../helpers/vuex-map-fields/index'
// import { getField, updateField } from 'vuex-map-fields'
import actions from './ExerciseActions'

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
// #region Getters
const getters = {
  getField,
  Get_Exercise_ByRouteID: function (state, getters, rootState) {
    return state.Exercise[+rootState.route.params.exerciseid]
  },
  Get_ExerciseItem: function () {
    return state.ExerciseItem
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
  Get_Exercise_SportItem: function () {
    return state.Exercise_SportItem
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
  Get_ExerciseTypeItem: function () {
    return state.ExerciseTypeItem
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
  Get_SportItem: function () {
    return state.SportItem
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
// #endregion
// #region Mutations
const mutations = {
  updateField,
  GET_EXERCISE (state, payload) {
    state.ExerciseItem = { ...state.Exercise[payload.exerciseid] }
  },
  SET_EXERCISE (state, payload) {
    state.Exercise[payload.ExerciseID] = payload
  },
  SET_EXERCISE_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.Exercise, element.ExerciseID, element)
        state.ExerciseList.push(element.ExerciseID)
      }, this)
    }
  },
  GET_EXERCISE_SPORT (state, payload) {
    state.Exercise_SportItem = state.Exercise_Sport[payload.exercise_sportid]
  },
  SET_EXERCISE_SPORT (state, payload) {
    state.Exercise_Sport[payload.Exercise_SportID] = payload
  },
  SET_EXERCISE_SPORT_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.Exercise_Sport, element.Exercise_SportID, element)
        state.Exercise_SportList.push(element.Exercise_SportID)
      }, this)
    }
  },
  GET_EXERCISETYPE (state, payload) {
    state.ExerciseTypeItem = state.ExerciseType[payload.exercisetypeid]
  },
  SET_EXERCISETYPE (state, payload) {
    state.ExerciseType[payload.ExerciseTypeID] = payload
  },
  SET_EXERCISETYPE_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.ExerciseType, element.ExerciseTypeID, element)
        state.ExerciseTypeList.push(element.ExerciseTypeID)
      }, this)
    }
  },
  GET_SPORT (state, payload) {
    state.SportItem = state.Sport[payload.sportid]
  },
  SET_SPORT (state, payload) {
    state.Sport[payload.SportID] = payload
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
// #endregion

const store = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

export default store
