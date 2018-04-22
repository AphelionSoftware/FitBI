import {APIinstance} from '../../../plugins/api.js'
const actions = {
  saveActive (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.ActiveItem
    } else {
      item = payload
    }
    if (item.ActiveID === null) item.ActiveID = 0
    item.UpdateAt = (new Date()).toUTCString()
    item.NeedsSync = true
    context.commit('SET_Active', item)
    APIinstance.mergeStats.mergeActive(item)
  },
  saveBodyPart (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.BodyPartItem
    } else {
      item = payload
    }
    if (item.BodyPartID === null) item.BodyPartID = 0
    item.UpdateAt = (new Date()).toUTCString()
    item.NeedsSync = true
    context.commit('SET_BodyPart', item)
    APIinstance.mergeStats.mergeBodyPart(item)
  },
  saveBodyPartType (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.BodyPartTypeItem
    } else {
      item = payload
    }
    if (item.BodyPartTypeID === null) item.BodyPartTypeID = 0
    item.UpdateAt = (new Date()).toUTCString()
    item.NeedsSync = true
    context.commit('SET_BodyPartType', item)
    APIinstance.mergeStats.mergeBodyPartType(item)
  },
  saveDates (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.DatesItem
    } else {
      item = payload
    }
    if (item.DatesID === null) item.DatesID = 0
    item.UpdateAt = (new Date()).toUTCString()
    item.NeedsSync = true
    context.commit('SET_Dates', item)
    APIinstance.mergeStats.mergeDates(item)
  },
  saveMeasurementType (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.MeasurementTypeItem
    } else {
      item = payload
    }
    if (item.MeasurementTypeID === null) item.MeasurementTypeID = 0
    item.UpdateAt = (new Date()).toUTCString()
    item.NeedsSync = true
    context.commit('SET_MeasurementType', item)
    APIinstance.mergeStats.mergeMeasurementType(item)
  },
  saveMeasurementTypeCategory (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.MeasurementTypeCategoryItem
    } else {
      item = payload
    }
    if (item.MeasurementTypeCategoryID === null) item.MeasurementTypeCategoryID = 0
    item.UpdateAt = (new Date()).toUTCString()
    item.NeedsSync = true
    context.commit('SET_MeasurementTypeCategory', item)
    APIinstance.mergeStats.mergeMeasurementTypeCategory(item)
  },
  saveTime (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.TimeItem
    } else {
      item = payload
    }
    if (item.TimeID === null) item.TimeID = 0
    item.UpdateAt = (new Date()).toUTCString()
    item.NeedsSync = true
    context.commit('SET_Time', item)
    APIinstance.mergeStats.mergeTime(item)
  },
  saveUnit (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.UnitItem
    } else {
      item = payload
    }
    if (item.UnitID === null) item.UnitID = 0
    item.UpdateAt = (new Date()).toUTCString()
    item.NeedsSync = true
    context.commit('SET_Unit', item)
    APIinstance.mergeStats.mergeUnit(item)
  },
  saveUnitType (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.UnitTypeItem
    } else {
      item = payload
    }
    if (item.UnitTypeID === null) item.UnitTypeID = 0
    item.UpdateAt = (new Date()).toUTCString()
    item.NeedsSync = true
    context.commit('SET_UnitType', item)
    APIinstance.mergeStats.mergeUnitType(item)
  },
  stub () {}
}

export default actions
