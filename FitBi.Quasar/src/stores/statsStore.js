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
      this.metric = {}
      this.metricList = []
      if (fullList) {
        fullList.forEach((element) => {
          this.metric[element.MetricID] = element
          this.metricList.push(element.MetricID)
        })
      }
    },
    setPersonList (fullList) {
      this.person = {}
      this.personList = []
      if (fullList) {
        fullList.forEach((element) => {
          this.person[element.PersonID] = element
          this.personList.push(element.PersonID)
        })
      }
    },
    setSkinfoldMeasurementList (fullList) {
      this.skinfoldMeasurement = {}
      this.skinfoldMeasurementList = []
      if (fullList) {
        fullList.forEach((element) => {
          this.skinfoldMeasurement[element.SkinfoldMeasurementID] = element
          this.skinfoldMeasurementList.push(element.SkinfoldMeasurementID)
        })
      }
    },
    setTapeMeasurementList (fullList) {
      this.tapeMeasurement = {}
      this.tapeMeasurementList = []
      if (fullList) {
        fullList.forEach((element) => {
          this.tapeMeasurement[element.TapeMeasurementID] = element
          this.tapeMeasurementList.push(element.TapeMeasurementID)
        })
      }
    },
    setWeightMeasurementList (fullList) {
      this.weightMeasurement = {}
      this.weightMeasurementList = []
      if (fullList) {
        fullList.forEach((element) => {
          this.weightMeasurement[element.WeightMeasurementID] = element
          this.weightMeasurementList.push(element.WeightMeasurementID)
        })
      }
    }
  }
})
