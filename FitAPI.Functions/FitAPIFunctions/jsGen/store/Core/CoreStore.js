import Vue from 'vue'
import Vuex from 'vuex'
// Import the `getField` getter and the `updateField`
// mutation function from the `vuex-map-fields` module.
import { getField, updateField } from '../../../helpers/vuex-map-fields/index'
// import { getField, updateField } from 'vuex-map-fields'

Vue.use(Vuex)

const state = {
  Active: { },
  ActiveList: [],
  ActiveItem: {},
  BodyPart: { },
  BodyPartList: [],
  BodyPartItem: {},
  BodyPartType: { },
  BodyPartTypeList: [],
  BodyPartTypeItem: {},
  Dates: { },
  DatesList: [],
  DatesItem: {},
  MeasurementType: { },
  MeasurementTypeList: [],
  MeasurementTypeItem: {},
  MeasurementTypeCategory: { },
  MeasurementTypeCategoryList: [],
  MeasurementTypeCategoryItem: {},
  Time: { },
  TimeList: [],
  TimeItem: {},
  Unit: { },
  UnitList: [],
  UnitItem: {},
  UnitType: { },
  UnitTypeList: [],
  UnitTypeItem: {}
}

const getters = {
  getField,
  Get_Active_ByRouteID: function (state, getters, rootState) {
    return state.Active[+rootState.route.params.activeid]
  },
  Get_Active_All: function () {
    return state.Active
  },
  Get_Active_List: function () {
    return state.Active
  },
  Get_Active_Item: function () {
    return state.ActiveItem
  },
  Get_BodyPart_ByRouteID: function (state, getters, rootState) {
    return state.BodyPart[+rootState.route.params.bodypartid]
  },
  Get_BodyPart_All: function () {
    return state.BodyPart
  },
  Get_BodyPart_List: function () {
    return state.BodyPart
  },
  Get_BodyPart_Item: function () {
    return state.BodyPartItem
  },
  Get_BodyPartType_ByRouteID: function (state, getters, rootState) {
    return state.BodyPartType[+rootState.route.params.bodyparttypeid]
  },
  Get_BodyPartType_All: function () {
    return state.BodyPartType
  },
  Get_BodyPartType_List: function () {
    return state.BodyPartType
  },
  Get_BodyPartType_Item: function () {
    return state.BodyPartTypeItem
  },
  Get_Dates_ByRouteID: function (state, getters, rootState) {
    return state.Dates[+rootState.route.params.datesid]
  },
  Get_Dates_All: function () {
    return state.Dates
  },
  Get_Dates_List: function () {
    return state.Dates
  },
  Get_Dates_Item: function () {
    return state.DatesItem
  },
  Get_MeasurementType_ByRouteID: function (state, getters, rootState) {
    return state.MeasurementType[+rootState.route.params.measurementtypeid]
  },
  Get_MeasurementType_All: function () {
    return state.MeasurementType
  },
  Get_MeasurementType_List: function () {
    return state.MeasurementType
  },
  Get_MeasurementType_Item: function () {
    return state.MeasurementTypeItem
  },
  Get_MeasurementTypeCategory_ByRouteID: function (state, getters, rootState) {
    return state.MeasurementTypeCategory[+rootState.route.params.measurementtypecategoryid]
  },
  Get_MeasurementTypeCategory_All: function () {
    return state.MeasurementTypeCategory
  },
  Get_MeasurementTypeCategory_List: function () {
    return state.MeasurementTypeCategory
  },
  Get_MeasurementTypeCategory_Item: function () {
    return state.MeasurementTypeCategoryItem
  },
  Get_Time_ByRouteID: function (state, getters, rootState) {
    return state.Time[+rootState.route.params.timeid]
  },
  Get_Time_All: function () {
    return state.Time
  },
  Get_Time_List: function () {
    return state.Time
  },
  Get_Time_Item: function () {
    return state.TimeItem
  },
  Get_Unit_ByRouteID: function (state, getters, rootState) {
    return state.Unit[+rootState.route.params.unitid]
  },
  Get_Unit_All: function () {
    return state.Unit
  },
  Get_Unit_List: function () {
    return state.Unit
  },
  Get_Unit_Item: function () {
    return state.UnitItem
  },
  Get_UnitType_ByRouteID: function (state, getters, rootState) {
    return state.UnitType[+rootState.route.params.unittypeid]
  },
  Get_UnitType_All: function () {
    return state.UnitType
  },
  Get_UnitType_List: function () {
    return state.UnitType
  },
  Get_UnitType_Item: function () {
    return state.UnitTypeItem
  }
}

const mutations = {
  updateField,
  SET_ACTIVE_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.Active, element.ActiveID, element)
        state.ActiveList.push(element.ActiveID)
      }, this)
    }
  },
  SET_BODYPART_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.BodyPart, element.BodyPartID, element)
        state.BodyPartList.push(element.BodyPartID)
      }, this)
    }
  },
  SET_BODYPARTTYPE_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.BodyPartType, element.BodyPartTypeID, element)
        state.BodyPartTypeList.push(element.BodyPartTypeID)
      }, this)
    }
  },
  SET_DATES_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.Dates, element.DatesID, element)
        state.DatesList.push(element.DatesID)
      }, this)
    }
  },
  SET_MEASUREMENTTYPE_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.MeasurementType, element.MeasurementTypeID, element)
        state.MeasurementTypeList.push(element.MeasurementTypeID)
      }, this)
    }
  },
  SET_MEASUREMENTTYPECATEGORY_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.MeasurementTypeCategory, element.MeasurementTypeCategoryID, element)
        state.MeasurementTypeCategoryList.push(element.MeasurementTypeCategoryID)
      }, this)
    }
  },
  SET_TIME_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.Time, element.TimeID, element)
        state.TimeList.push(element.TimeID)
      }, this)
    }
  },
  SET_UNIT_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.Unit, element.UnitID, element)
        state.UnitList.push(element.UnitID)
      }, this)
    }
  },
  SET_UNITTYPE_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.UnitType, element.UnitTypeID, element)
        state.UnitTypeList.push(element.UnitTypeID)
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
