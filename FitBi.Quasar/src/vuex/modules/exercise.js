import Vue from 'vue'
import Vuex from 'vuex'
// Import the `getField` getter and the `updateField`
// mutation function from the `vuex-map-fields` module.
import { getField, updateField } from '../../helpers/vuex-map-fields/index'
// import { getField, updateField } from 'vuex-map-fields'

Vue.use(Vuex)

const state = {
  Exercise: {},
  ExerciseList: [],
  Exercise_Sport: {},
  Exercise_SportList: [],
  ExerciseType: {},
  ExerciseTypeList: [],
  Sport: {},
  SportList: []
}

const getters = {
  getField,
  Get_Exercise_Current: function (state, getters, rootState) {
    return state.Exercise[+rootState.route.params.exerciseid]
  },
  Get_Exercise_All: function () {
    return state.Exercise
  },
  Get_Exercise_Sport_All: function () {
    return state.Exercise_Sport
  },
  Get_ExerciseType_All: function () {
    return state.ExerciseType
  },
  Get_Sport_All: function () {
    return state.Sport
  }
}

const mutations = {
  updateField,
  Set_Exercise: function (state, fullList) {
    fullList.forEach(function (element) {
      state.Exercise[element.ExerciseID] = element
      state.ExerciseList.push(element.ExerciseID)
    }, this)
  },
  Set_Exercise_Sport: function (state, fullList) {
    state.Exercise_Sport = fullList
  },
  Set_ExerciseType: function (state, fullList) {
    state.ExerciseType = fullList
  },
  Set_Sport: function (state, fullList) {
    state.Sport = fullList
  }
}

const exercise = {
  namespaced: true,
  state,
  getters,
  mutations
}

export default exercise
