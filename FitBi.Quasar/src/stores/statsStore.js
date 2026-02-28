import { defineStore } from 'pinia'

export const useStatsStore = defineStore('stats', {
  state: () => ({
    Metric: {},
    MetricList: [],
    MetricItem: {},
    Person: {},
    PersonList: [],
    PersonItem: {},
    SkinfoldMeasurement: {},
    SkinfoldMeasurementList: [],
    SkinfoldMeasurementItem: {},
    TapeMeasurement: {},
    TapeMeasurementList: [],
    TapeMeasurementItem: {},
    WeightMeasurement: {},
    WeightMeasurementList: [],
    WeightMeasurementItem: {}
  }),

  getters: {
    getMetricAll: (state) => Object.values(state.Metric),
    getPersonAll: (state) => Object.values(state.Person),
    getPersonByID: (state) => (id) => state.Person[id],
    getWeightMeasurementAll: (state) => Object.values(state.WeightMeasurement)
  },

  actions: {
    setMetricList (fullList) {
      if (fullList) {
        fullList.forEach((element) => {
          this.Metric[element.MetricID] = element
          this.MetricList.push(element.MetricID)
        })
      }
    },
    setPersonList (fullList) {
      if (fullList) {
        fullList.forEach((element) => {
          this.Person[element.PersonID] = element
          this.PersonList.push(element.PersonID)
        })
      }
    },
    setSkinfoldMeasurementList (fullList) {
      if (fullList) {
        fullList.forEach((element) => {
          this.SkinfoldMeasurement[element.SkinfoldMeasurementID] = element
          this.SkinfoldMeasurementList.push(element.SkinfoldMeasurementID)
        })
      }
    },
    setTapeMeasurementList (fullList) {
      if (fullList) {
        fullList.forEach((element) => {
          this.TapeMeasurement[element.TapeMeasurementID] = element
          this.TapeMeasurementList.push(element.TapeMeasurementID)
        })
      }
    },
    setWeightMeasurementList (fullList) {
      if (fullList) {
        fullList.forEach((element) => {
          this.WeightMeasurement[element.WeightMeasurementID] = element
          this.WeightMeasurementList.push(element.WeightMeasurementID)
        })
      }
    }
  }
})
