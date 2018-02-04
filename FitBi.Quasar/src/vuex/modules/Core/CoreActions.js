import Vue from 'vue'
const actions = {
  saveActive (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.ActiveItem
    }
    else {
      item = payload
    }
    item.UpdateAt = (new Date()).toUTCString()
    item.NeedsSync = true
    context.commit('SET_ACTIVE', item)
    Vue.$API.mergeCore.mergeActive(item)
  },
  saveBodyPart (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.BodyPartItem
    }
    else {
      item = payload
    }
    item.UpdateAt = (new Date()).toUTCString()
    item.NeedsSync = true
    context.commit('SET_BODYPART', item)
    Vue.$API.mergeCore.mergeBodyPart(item)
  },
  saveBodyPartType (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.BodyPartTypeItem
    }
    else {
      item = payload
    }
    item.UpdateAt = (new Date()).toUTCString()
    item.NeedsSync = true
    context.commit('SET_BODYPARTTYPE', item)
    Vue.$API.mergeCore.mergeBodyPartType(item)
  },
  saveDates (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.DatesItem
    }
    else {
      item = payload
    }
    item.UpdateAt = (new Date()).toUTCString()
    item.NeedsSync = true
    context.commit('SET_DATES', item)
    Vue.$API.mergeCore.mergeDates(item)
  },
  saveMeasurementType (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.MeasurementTypeItem
    }
    else {
      item = payload
    }
    item.UpdateAt = (new Date()).toUTCString()
    item.NeedsSync = true
    context.commit('SET_MEASUREMENTTYPE', item)
    Vue.$API.mergeCore.mergeMeasurementType(item)
  },
  saveMeasurementTypeCategory (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.MeasurementTypeCategoryItem
    }
    else {
      item = payload
    }
    item.UpdateAt = (new Date()).toUTCString()
    item.NeedsSync = true
    context.commit('SET_MEASUREMENTTYPECATEGORY', item)
    Vue.$API.mergeCore.mergeMeasurementTypeCategory(item)
  },
  saveTime (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.TimeItem
    }
    else {
      item = payload
    }
    item.UpdateAt = (new Date()).toUTCString()
    item.NeedsSync = true
    context.commit('SET_TIME', item)
    Vue.$API.mergeCore.mergeTime(item)
  },
  saveUnit (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.UnitItem
    }
    else {
      item = payload
    }
    item.UpdateAt = (new Date()).toUTCString()
    item.NeedsSync = true
    context.commit('SET_UNIT', item)
    Vue.$API.mergeCore.mergeUnit(item)
  },
  saveUnitType (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.UnitTypeItem
    }
    else {
      item = payload
    }
    item.UpdateAt = (new Date()).toUTCString()
    item.NeedsSync = true
    context.commit('SET_UNITTYPE', item)
    Vue.$API.mergeCore.mergeUnitType(item)
  }
}

export default actions

