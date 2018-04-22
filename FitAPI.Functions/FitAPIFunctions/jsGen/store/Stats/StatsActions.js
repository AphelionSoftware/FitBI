import {APIinstance} from '../../../plugins/api.js'
const actions = {
  saveMetric (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.MetricItem
    } else {
      item = payload
    }
    if (item.MetricID === null) item.MetricID = 0
    item.UpdateAt = (new Date()).toUTCString()
    item.NeedsSync = true
    context.commit('SET_Metric', item)
    APIinstance.mergeStats.mergeMetric(item)
  },
  savePerson (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.PersonItem
    } else {
      item = payload
    }
    if (item.PersonID === null) item.PersonID = 0
    item.UpdateAt = (new Date()).toUTCString()
    item.NeedsSync = true
    context.commit('SET_Person', item)
    APIinstance.mergeStats.mergePerson(item)
  },
  saveSkinfoldMeasurement (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.SkinfoldMeasurementItem
    } else {
      item = payload
    }
    if (item.SkinfoldMeasurementID === null) item.SkinfoldMeasurementID = 0
    item.UpdateAt = (new Date()).toUTCString()
    item.NeedsSync = true
    context.commit('SET_SkinfoldMeasurement', item)
    APIinstance.mergeStats.mergeSkinfoldMeasurement(item)
  },
  saveTapeMeasurement (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.TapeMeasurementItem
    } else {
      item = payload
    }
    if (item.TapeMeasurementID === null) item.TapeMeasurementID = 0
    item.UpdateAt = (new Date()).toUTCString()
    item.NeedsSync = true
    context.commit('SET_TapeMeasurement', item)
    APIinstance.mergeStats.mergeTapeMeasurement(item)
  },
  saveWeightMeasurement (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.WeightMeasurementItem
    } else {
      item = payload
    }
    if (item.WeightMeasurementID === null) item.WeightMeasurementID = 0
    item.UpdateAt = (new Date()).toUTCString()
    item.NeedsSync = true
    context.commit('SET_WeightMeasurement', item)
    APIinstance.mergeStats.mergeWeightMeasurement(item)
  },
  stub () {}
}

export default actions
