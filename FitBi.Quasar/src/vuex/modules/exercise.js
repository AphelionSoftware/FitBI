import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  Exercise: [],
  Exercise_Sport: [],
  ExerciseType: [],
  Sport: []
}

const getters = {
  Get_Exercise: function () {
    return state.Exercise
  },
  Get_Exercise_Sport: function () {
    return state.Exercise_Sport
  },
  Get_ExerciseType: function () {
    return state.ExerciseType
  },
  Get_Sport: function () {
    return state.Sport
  }
}

const mutations = {
  Set_Exercise: function (state, fullList) {
    state.Exercise = fullList
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
