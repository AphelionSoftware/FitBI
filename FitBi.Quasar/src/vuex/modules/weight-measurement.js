import Vue from 'vue'
import Vuex from 'vuex'
// import mutations from './mutations';
Vue.use(Vuex)

const state = {
  measurementDetail: {
    measurementTaken: new Date()
  },
  measurementOptions: {
    emptyStomach: true
  },
  weight: {
    model: 85,
    min: 20,
    max: 100,
    unit: 'kg'
  },
  neck: {
    model: 37,
    min: 0,
    max: 50,
    unit: 'cm'
  },
  bellybutton: {
    model: 88,
    min: 0,
    max: 150,
    unit: 'cm'
  },
  height: {
    model: 173,
    min: 0,
    max: 250,
    unit: 'cm'
  },
  bodyfatunit: '%'
}

const getters = {
  weight: state => {
    return state.weight.model
  },
  weightObj: state => {
    return state.weight
  },
  bodyfatpercent: function () {
    return 5 // this.bellybutton.model // Math.round((86.01 * Math.log10((this.bellybutton.model - this.neck.model) / 2.54) - 70.041 * Math.log10(this.height.model / 2.54) + 36.76) * 100) / 100
  },
  bodyfat: function () {
    return 5 //  this.neck.model // (Math.round((86.01 * Math.log10((this.bellybutton.model - this.neck.model) / 2.54) - 70.041 * Math.log10(this.height.model / 2.54) + 36.76) * this.weight.model) / 100)
  }
}

const mutations = {
  increment (state) {
    state.count++
  },
  _setWeight (state, payload) {
    state.weight.model = payload
  }
}

const actions = {
  // setWeight: ({commit}, payload) => commit('setWeight', payload)
  setWeight (context, payload) {
    context.commit('_setWeight', payload)
  }
}
const weightmeasurement = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

export default weightmeasurement
