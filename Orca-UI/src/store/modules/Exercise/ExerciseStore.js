import baseActions from './ExerciseActions'
import baseState from './ExerciseState'
import baseMutations from './ExerciseMutations'
import baseGetters from './ExerciseGetters'

import customActions from './CustomExerciseActions'
import customState from './CustomExerciseState'
import customMutations from './CustomExerciseMutations'
import customGetters from './CustomExerciseGetters'

const actions = {...baseActions, ...customActions}
const state = {...baseState, ...customState}
const mutations = {...baseMutations, ...customMutations}
const getters = {...baseGetters, ...customGetters}

const store = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

export default store
