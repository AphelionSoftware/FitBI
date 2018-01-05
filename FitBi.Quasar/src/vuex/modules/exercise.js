import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  Exercise: [],
  ExerciseType: []
}

const exercise = {
  namespaced: true,
  state
}

export default exercise
