import { defineStore } from 'pinia'

export const useStatsStore = defineStore('stats', {
  state: () => ({
    metric: {},
    metricList: [],
    metricItem: {},
    person: {},
    personList: [],
    personItem: {},
    skinfoldMeasurement: {},
    skinfoldMeasurementList: [],
    skinfoldMeasurementItem: {},
    tapeMeasurement: {},
    tapeMeasurementList: [],
    tapeMeasurementItem: {},
    weightMeasurement: {},
    weightMeasurementList: [],
    weightMeasurementItem: {}
  }),

  getters: {
    allMetrics: (state) => Object.values(state.metric),
    allPersons: (state) => Object.values(state.person),
    personById: (state) => (id) => state.person[id],
    allWeightMeasurements: (state) => Object.values(state.weightMeasurement)
  },

  actions: {
    setMetricList (fullList) {
      if (fullList) {
        fullList.forEach((element) => {
          this.metric[element.MetricID] = element
          this.metricList.push(element.MetricID)
        })
      }
    },
    setPersonList (fullList) {
      if (fullList) {
        fullList.forEach((element) => {
          this.person[element.PersonID] = element
          this.personList.push(element.PersonID)
        })
      }
    },
    setSkinfoldMeasurementList (fullList) {
      if (fullList) {
        fullList.forEach((element) => {
          this.skinfoldMeasurement[element.SkinfoldMeasurementID] = element
          this.skinfoldMeasurementList.push(element.SkinfoldMeasurementID)
        })
      }
    },
    setTapeMeasurementList (fullList) {
      if (fullList) {
        fullList.forEach((element) => {
          this.tapeMeasurement[element.TapeMeasurementID] = element
          this.tapeMeasurementList.push(element.TapeMeasurementID)
        })
      }
    },
    setWeightMeasurementList (fullList) {
      if (fullList) {
        fullList.forEach((element) => {
          this.weightMeasurement[element.WeightMeasurementID] = element
          this.weightMeasurementList.push(element.WeightMeasurementID)
        })
      }
    }
  }
})
