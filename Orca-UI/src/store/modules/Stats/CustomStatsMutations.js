import Vue from 'vue'
const mutations = {
  ADD_DAILYMEASUREMENT_PROPERTY (state, payload) {
    let currentItem = state.DailyMeasurement[payload.MeasurementDateID]
    let item = {...currentItem, payload}
    Vue.set(state.DailyMeasurement, payload.MeasurementDateID, item)
    if (typeof currentItem === 'undefined') {
      state.DailyMeasurementList.push(payload.MeasurementDateID)
    }
  }
}
export default mutations
