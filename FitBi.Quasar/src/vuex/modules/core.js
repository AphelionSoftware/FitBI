import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  BodyPart: [],
  BodyPartType: [],
  MeasurementType: [],
  MeasurementTypeCategory: [],
  Unit: [],
  UnitType: []
}

const getters = {
  Get_BodyPart_All: function () {
    return state.BodyPart
  },
  Get_BodyPartType_All: function () {
    return state.BodyPartType
  },
  Get_MeasurementType_All: function () {
    return state.MeasurementType
  },
  Get_MeasurementTypeCategory_All: function () {
    return state.MeasurementTypeCategory
  },
  Get_Unit_All: function () {
    return state.Unit
  },
  Get_UnitType_All: function () {
    return state.UnitType
  }
}

const mutations = {
  Set_BodyPart: function (state, fullList) {
    state.BodyPart = fullList
  },
  Set_BodyPartType: function (state, fullList) {
    state.BodyPartType = fullList
  },
  Set_MeasurementType: function (state, fullList) {
    state.MeasurementType = fullList
  },
  Set_MeasurementTypeCategory: function (state, fullList) {
    state.MeasurementTypeCategory = fullList
  },
  Set_Unit: function (state, fullList) {
    state.Unit = fullList
  },
  Set_UnitType: function (state, fullList) {
    state.UnitType = fullList
  }
}

const core = {
  namespaced: true,
  state,
  getters,
  mutations
}

export default core
