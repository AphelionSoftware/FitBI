const actions = {
  saveMetric (context) {
    let item = context.state.MetricItem
    item.UpdateAt = (new Date()).toUTCString()
    item.NeedsSync = true
    context.commit('Metric/SET_METRIC', item)
    context.commit('Exercise/GET_METRIC', {})
  },
  savePerson (context) {
    let item = context.state.PersonItem
    item.UpdateAt = (new Date()).toUTCString()
    item.NeedsSync = true
    context.commit('Person/SET_PERSON', item)
    context.commit('Exercise/GET_PERSON', {})
  },
  saveSkinfoldMeasurement (context) {
    let item = context.state.SkinfoldMeasurementItem
    item.UpdateAt = (new Date()).toUTCString()
    item.NeedsSync = true
    context.commit('SkinfoldMeasurement/SET_SKINFOLDMEASUREMENT', item)
    context.commit('Exercise/GET_SKINFOLDMEASUREMENT', {})
  },
  saveTapeMeasurement (context) {
    let item = context.state.TapeMeasurementItem
    item.UpdateAt = (new Date()).toUTCString()
    item.NeedsSync = true
    context.commit('TapeMeasurement/SET_TAPEMEASUREMENT', item)
    context.commit('Exercise/GET_TAPEMEASUREMENT', {})
  },
  saveWeightMeasurement (context) {
    let item = context.state.WeightMeasurementItem
    item.UpdateAt = (new Date()).toUTCString()
    item.NeedsSync = true
    context.commit('WeightMeasurement/SET_WEIGHTMEASUREMENT', item)
    context.commit('Exercise/GET_WEIGHTMEASUREMENT', {})
  }
}

export default actions

