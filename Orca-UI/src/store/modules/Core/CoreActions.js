import Vue from 'vue'
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
    context.commit('SET_ACTIVE', item)
    Vue.$API.mergeCore.mergeActive(item)
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
    context.commit('SET_BODYPART', item)
    Vue.$API.mergeCore.mergeBodyPart(item)
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
    context.commit('SET_BODYPARTTYPE', item)
    Vue.$API.mergeCore.mergeBodyPartType(item)
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
    context.commit('SET_DATES', item)
    Vue.$API.mergeCore.mergeDates(item)
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
    context.commit('SET_MEASUREMENTTYPE', item)
    Vue.$API.mergeCore.mergeMeasurementType(item)
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
    context.commit('SET_MEASUREMENTTYPECATEGORY', item)
    Vue.$API.mergeCore.mergeMeasurementTypeCategory(item)
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
    context.commit('SET_TIME', item)
    Vue.$API.mergeCore.mergeTime(item)
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
    context.commit('SET_UNIT', item)
    Vue.$API.mergeCore.mergeUnit(item)
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
    context.commit('SET_UNITTYPE', item)
    Vue.$API.mergeCore.mergeUnitType(item)
  }
}

export default actions
