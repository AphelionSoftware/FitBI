import Vue from 'vue'
const actions = {
  saveMetric (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.MetricItem
    }
    else {
      item = payload
    }
    if (item.MetricID === null) item.MetricID = 0
    item.UpdateAt = (new Date()).toUTCString()
    item.NeedsSync = true
    context.commit('SET_METRIC', item)
    Vue.$API.mergeStats.mergeMetric(item)
  },
  savePerson (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.PersonItem
    }
    else {
      item = payload
    }
    if (item.PersonID === null) item.PersonID = 0
    item.UpdateAt = (new Date()).toUTCString()
    item.NeedsSync = true
    context.commit('SET_PERSON', item)
    Vue.$API.mergeStats.mergePerson(item)
  },
  saveSkinfoldMeasurement (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.SkinfoldMeasurementItem
    }
    else {
      item = payload
    }
    if (item.SkinfoldMeasurementID === null) item.SkinfoldMeasurementID = 0
    item.UpdateAt = (new Date()).toUTCString()
    item.NeedsSync = true
    context.commit('SET_SKINFOLDMEASUREMENT', item)
    Vue.$API.mergeStats.mergeSkinfoldMeasurement(item)
  },
  saveTapeMeasurement (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.TapeMeasurementItem
    }
    else {
      item = payload
    }
    if (item.TapeMeasurementID === null) item.TapeMeasurementID = 0
    item.UpdateAt = (new Date()).toUTCString()
    item.NeedsSync = true
    context.commit('SET_TAPEMEASUREMENT', item)
    Vue.$API.mergeStats.mergeTapeMeasurement(item)
  },
  saveWeightMeasurement (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.WeightMeasurementItem
    }
    else {
      item = payload
    }
    if (item.WeightMeasurementID === null) item.WeightMeasurementID = 0
    item.UpdateAt = (new Date()).toUTCString()
    item.NeedsSync = true
    context.commit('SET_WEIGHTMEASUREMENT', item)
    Vue.$API.mergeStats.mergeWeightMeasurement(item)
  }
}

export default actions

