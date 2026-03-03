import { defineStore } from 'pinia'

export const useWeightMeasurementStore = defineStore('weightMeasurement', {
  state: () => ({
    measurementDetail: {
      measurementTaken: new Date()
    },
    measurementOptions: {
      emptyStomach: true
    },
    weight: {
      model: 85,
      min: 20,
      max: 100,
      unit: 'kg'
    },
    neck: {
      model: 37,
      min: 0,
      max: 50,
      unit: 'cm'
    },
    bellybutton: {
      model: 88,
      min: 0,
      max: 150,
      unit: 'cm'
    },
    height: {
      model: 173,
      min: 0,
      max: 250,
      unit: 'cm'
    },
    bodyfatunit: '%'
  }),

  getters: {
    weightValue: (state) => state.weight.model,
    weightObj: (state) => state.weight,
    bodyfatpercent: () => 5,
    bodyfat: () => 5
  },

  actions: {
    setWeight (value) {
      this.weight.model = value
    }
  }
})
