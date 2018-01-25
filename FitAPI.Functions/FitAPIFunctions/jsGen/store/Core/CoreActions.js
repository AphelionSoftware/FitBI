const actions = {
  saveActive (context) {
    let item = context.state.ActiveItem
    item.UpdateAt = (new Date()).toUTCString()
    item.NeedsSync = true
    context.commit('Active/SET_ACTIVE', item)
    context.commit('Exercise/GET_ACTIVE', {})
  },
  saveBodyPart (context) {
    let item = context.state.BodyPartItem
    item.UpdateAt = (new Date()).toUTCString()
    item.NeedsSync = true
    context.commit('BodyPart/SET_BODYPART', item)
    context.commit('Exercise/GET_BODYPART', {})
  },
  saveBodyPartType (context) {
    let item = context.state.BodyPartTypeItem
    item.UpdateAt = (new Date()).toUTCString()
    item.NeedsSync = true
    context.commit('BodyPartType/SET_BODYPARTTYPE', item)
    context.commit('Exercise/GET_BODYPARTTYPE', {})
  },
  saveDates (context) {
    let item = context.state.DatesItem
    item.UpdateAt = (new Date()).toUTCString()
    item.NeedsSync = true
    context.commit('Dates/SET_DATES', item)
    context.commit('Exercise/GET_DATES', {})
  },
  saveMeasurementType (context) {
    let item = context.state.MeasurementTypeItem
    item.UpdateAt = (new Date()).toUTCString()
    item.NeedsSync = true
    context.commit('MeasurementType/SET_MEASUREMENTTYPE', item)
    context.commit('Exercise/GET_MEASUREMENTTYPE', {})
  },
  saveMeasurementTypeCategory (context) {
    let item = context.state.MeasurementTypeCategoryItem
    item.UpdateAt = (new Date()).toUTCString()
    item.NeedsSync = true
    context.commit('MeasurementTypeCategory/SET_MEASUREMENTTYPECATEGORY', item)
    context.commit('Exercise/GET_MEASUREMENTTYPECATEGORY', {})
  },
  saveTime (context) {
    let item = context.state.TimeItem
    item.UpdateAt = (new Date()).toUTCString()
    item.NeedsSync = true
    context.commit('Time/SET_TIME', item)
    context.commit('Exercise/GET_TIME', {})
  },
  saveUnit (context) {
    let item = context.state.UnitItem
    item.UpdateAt = (new Date()).toUTCString()
    item.NeedsSync = true
    context.commit('Unit/SET_UNIT', item)
    context.commit('Exercise/GET_UNIT', {})
  },
  saveUnitType (context) {
    let item = context.state.UnitTypeItem
    item.UpdateAt = (new Date()).toUTCString()
    item.NeedsSync = true
    context.commit('UnitType/SET_UNITTYPE', item)
    context.commit('Exercise/GET_UNITTYPE', {})
  }
}

export default actions

