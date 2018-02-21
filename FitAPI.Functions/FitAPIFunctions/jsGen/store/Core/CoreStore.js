﻿import Vue from 'vue'
import Vuex from 'vuex'
import {_} from 'vue-underscore'
// Import the `getField` getter and the `updateField`
// mutation function from the `vuex-map-fields` module.
import { getField, updateField } from '../../../helpers/vuex-map-fields/index'
// import { getField, updateField } from 'vuex-map-fields'
import actions from './CoreActions'

Vue.use(Vuex)
Vue.use(_)

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
// #region Getters
const getters = {
  getField,
  Get_Active_ByRouteID: function (state, getters, rootState) {
    return state.Active[+rootState.route.params.activeid]
  },
  Get_Active_ByActiveID: function (state) {
    return function (activeID) {
      return state.Active[activeID]
    }
  },
  Get_ActiveItem: function () {
    return state.ActiveItem
  },
  Get_Active_All: function () {
    return state.Active
  },
  Get_Active_Select: function () {
    return _.map(state.Active, item => {
      return {
        label: item.Name,
        value: item.ActiveID
      }
    })
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
  Get_BodyPart_ByBodyPartID: function (state) {
    return function (bodypartID) {
      return state.BodyPart[bodypartID]
    }
  },
  Get_BodyPartItem: function () {
    return state.BodyPartItem
  },
  Get_BodyPart_All: function () {
    return state.BodyPart
  },
  Get_BodyPart_Select: function () {
    return _.map(state.BodyPart, item => {
      return {
        label: item.Name,
        value: item.BodyPartID
      }
    })
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
  Get_BodyPartType_ByBodyPartTypeID: function (state) {
    return function (bodyparttypeID) {
      return state.BodyPartType[bodyparttypeID]
    }
  },
  Get_BodyPartTypeItem: function () {
    return state.BodyPartTypeItem
  },
  Get_BodyPartType_All: function () {
    return state.BodyPartType
  },
  Get_BodyPartType_Select: function () {
    return _.map(state.BodyPartType, item => {
      return {
        label: item.Name,
        value: item.BodyPartTypeID
      }
    })
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
  Get_Dates_ByDatesID: function (state) {
    return function (datesID) {
      return state.Dates[datesID]
    }
  },
  Get_DatesItem: function () {
    return state.DatesItem
  },
  Get_Dates_All: function () {
    return state.Dates
  },
  Get_Dates_Select: function () {
    return _.map(state.Dates, item => {
      return {
        label: item.Name,
        value: item.DatesID
      }
    })
  },
  Get_Dates_List: function () {
    return state.Dates
  },
  Get_Dates_Item: function () {
    return state.DatesItem
  },
  Get_Dates_ByLatest_FullDate: function () {
    if (state.DatesList.length === 0) return {}
    return _.chain(state.Dates)
      .sortBy(function (item) { return item.FullDate })
      .first()
      .value()
  },
  Get_MeasurementType_ByRouteID: function (state, getters, rootState) {
    return state.MeasurementType[+rootState.route.params.measurementtypeid]
  },
  Get_MeasurementType_ByMeasurementTypeID: function (state) {
    return function (measurementtypeID) {
      return state.MeasurementType[measurementtypeID]
    }
  },
  Get_MeasurementTypeItem: function () {
    return state.MeasurementTypeItem
  },
  Get_MeasurementType_All: function () {
    return state.MeasurementType
  },
  Get_MeasurementType_Select: function () {
    return _.map(state.MeasurementType, item => {
      return {
        label: item.Name,
        value: item.MeasurementTypeID
      }
    })
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
  Get_MeasurementTypeCategory_ByMeasurementTypeCategoryID: function (state) {
    return function (measurementtypecategoryID) {
      return state.MeasurementTypeCategory[measurementtypecategoryID]
    }
  },
  Get_MeasurementTypeCategoryItem: function () {
    return state.MeasurementTypeCategoryItem
  },
  Get_MeasurementTypeCategory_All: function () {
    return state.MeasurementTypeCategory
  },
  Get_MeasurementTypeCategory_Select: function () {
    return _.map(state.MeasurementTypeCategory, item => {
      return {
        label: item.Name,
        value: item.MeasurementTypeCategoryID
      }
    })
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
  Get_Time_ByTimeID: function (state) {
    return function (timeID) {
      return state.Time[timeID]
    }
  },
  Get_TimeItem: function () {
    return state.TimeItem
  },
  Get_Time_All: function () {
    return state.Time
  },
  Get_Time_Select: function () {
    return _.map(state.Time, item => {
      return {
        label: item.Name,
        value: item.TimeID
      }
    })
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
  Get_Unit_ByUnitID: function (state) {
    return function (unitID) {
      return state.Unit[unitID]
    }
  },
  Get_UnitItem: function () {
    return state.UnitItem
  },
  Get_Unit_All: function () {
    return state.Unit
  },
  Get_Unit_Select: function () {
    return _.map(state.Unit, item => {
      return {
        label: item.Name,
        value: item.UnitID
      }
    })
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
  Get_UnitType_ByUnitTypeID: function (state) {
    return function (unittypeID) {
      return state.UnitType[unittypeID]
    }
  },
  Get_UnitTypeItem: function () {
    return state.UnitTypeItem
  },
  Get_UnitType_All: function () {
    return state.UnitType
  },
  Get_UnitType_Select: function () {
    return _.map(state.UnitType, item => {
      return {
        label: item.Name,
        value: item.UnitTypeID
      }
    })
  },
  Get_UnitType_List: function () {
    return state.UnitType
  },
  Get_UnitType_Item: function () {
    return state.UnitTypeItem
  }
}
// #endregion
// #region Mutations
const mutations = {
  updateField,
  GET_ACTIVE (state, payload) {
    state.ActiveItem = state.Active[payload.ActiveID]
  },
  SET_ACTIVE (state, payload) {
    state.Active[payload.ActiveID] = payload
  },
  SET_ACTIVEITEM (state, payload) {
    state.ActiveItem = payload
  },
  SET_ACTIVE_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.Active, element.ActiveID, element)
        state.ActiveList.push(element.ActiveID)
      }, this)
    }
  },
  GET_BODYPART (state, payload) {
    state.BodyPartItem = state.BodyPart[payload.BodyPartID]
  },
  SET_BODYPART (state, payload) {
    state.BodyPart[payload.BodyPartID] = payload
  },
  SET_BODYPARTITEM (state, payload) {
    state.BodyPartItem = payload
  },
  SET_BODYPART_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.BodyPart, element.BodyPartID, element)
        state.BodyPartList.push(element.BodyPartID)
      }, this)
    }
  },
  GET_BODYPARTTYPE (state, payload) {
    state.BodyPartTypeItem = state.BodyPartType[payload.BodyPartTypeID]
  },
  SET_BODYPARTTYPE (state, payload) {
    state.BodyPartType[payload.BodyPartTypeID] = payload
  },
  SET_BODYPARTTYPEITEM (state, payload) {
    state.BodyPartTypeItem = payload
  },
  SET_BODYPARTTYPE_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.BodyPartType, element.BodyPartTypeID, element)
        state.BodyPartTypeList.push(element.BodyPartTypeID)
      }, this)
    }
  },
  GET_DATES (state, payload) {
    state.DatesItem = state.Dates[payload.DatesID]
  },
  SET_DATES (state, payload) {
    state.Dates[payload.DatesID] = payload
  },
  SET_DATESITEM (state, payload) {
    state.DatesItem = payload
  },
  SET_DATES_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.Dates, element.DatesID, element)
        state.DatesList.push(element.DatesID)
      }, this)
    }
  },
  GET_MEASUREMENTTYPE (state, payload) {
    state.MeasurementTypeItem = state.MeasurementType[payload.MeasurementTypeID]
  },
  SET_MEASUREMENTTYPE (state, payload) {
    state.MeasurementType[payload.MeasurementTypeID] = payload
  },
  SET_MEASUREMENTTYPEITEM (state, payload) {
    state.MeasurementTypeItem = payload
  },
  SET_MEASUREMENTTYPE_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.MeasurementType, element.MeasurementTypeID, element)
        state.MeasurementTypeList.push(element.MeasurementTypeID)
      }, this)
    }
  },
  GET_MEASUREMENTTYPECATEGORY (state, payload) {
    state.MeasurementTypeCategoryItem = state.MeasurementTypeCategory[payload.MeasurementTypeCategoryID]
  },
  SET_MEASUREMENTTYPECATEGORY (state, payload) {
    state.MeasurementTypeCategory[payload.MeasurementTypeCategoryID] = payload
  },
  SET_MEASUREMENTTYPECATEGORYITEM (state, payload) {
    state.MeasurementTypeCategoryItem = payload
  },
  SET_MEASUREMENTTYPECATEGORY_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.MeasurementTypeCategory, element.MeasurementTypeCategoryID, element)
        state.MeasurementTypeCategoryList.push(element.MeasurementTypeCategoryID)
      }, this)
    }
  },
  GET_TIME (state, payload) {
    state.TimeItem = state.Time[payload.TimeID]
  },
  SET_TIME (state, payload) {
    state.Time[payload.TimeID] = payload
  },
  SET_TIMEITEM (state, payload) {
    state.TimeItem = payload
  },
  SET_TIME_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.Time, element.TimeID, element)
        state.TimeList.push(element.TimeID)
      }, this)
    }
  },
  GET_UNIT (state, payload) {
    state.UnitItem = state.Unit[payload.UnitID]
  },
  SET_UNIT (state, payload) {
    state.Unit[payload.UnitID] = payload
  },
  SET_UNITITEM (state, payload) {
    state.UnitItem = payload
  },
  SET_UNIT_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.Unit, element.UnitID, element)
        state.UnitList.push(element.UnitID)
      }, this)
    }
  },
  GET_UNITTYPE (state, payload) {
    state.UnitTypeItem = state.UnitType[payload.UnitTypeID]
  },
  SET_UNITTYPE (state, payload) {
    state.UnitType[payload.UnitTypeID] = payload
  },
  SET_UNITTYPEITEM (state, payload) {
    state.UnitTypeItem = payload
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
// #endregion

const store = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

export default store
