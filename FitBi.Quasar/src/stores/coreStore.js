import { defineStore } from 'pinia'

export const useCoreStore = defineStore('core', {
  state: () => ({
    active: {},
    activeList: [],
    activeItem: {},
    bodyPart: {},
    bodyPartList: [],
    bodyPartItem: {},
    bodyPartType: {},
    bodyPartTypeList: [],
    bodyPartTypeItem: {},
    dates: {},
    datesList: [],
    datesItem: {},
    measurementType: {},
    measurementTypeList: [],
    measurementTypeItem: {},
    measurementTypeCategory: {},
    measurementTypeCategoryList: [],
    measurementTypeCategoryItem: {},
    time: {},
    timeList: [],
    timeItem: {},
    unit: {},
    unitList: [],
    unitItem: {},
    unitType: {},
    unitTypeList: [],
    unitTypeItem: {}
  }),

  getters: {
    allActive: (state) => Object.values(state.active),
    allBodyParts: (state) => Object.values(state.bodyPart),
    bodyPartById: (state) => (id) => state.bodyPart[id],
    allBodyPartTypes: (state) => Object.values(state.bodyPartType),
    allMeasurementTypes: (state) => Object.values(state.measurementType),
    allMeasurementTypeCategories: (state) => Object.values(state.measurementTypeCategory),
    allUnits: (state) => Object.values(state.unit),
    unitById: (state) => (id) => state.unit[id],
    allUnitTypes: (state) => Object.values(state.unitType)
  },

  actions: {
    setActiveList (fullList) {
      this.active = {}
      this.activeList = []
      if (fullList) {
        fullList.forEach((element) => {
          this.active[element.ActiveID] = element
          this.activeList.push(element.ActiveID)
        })
      }
    },
    setBodyPartList (fullList) {
      this.bodyPart = {}
      this.bodyPartList = []
      if (fullList) {
        fullList.forEach((element) => {
          this.bodyPart[element.BodyPartID] = element
          this.bodyPartList.push(element.BodyPartID)
        })
      }
    },
    setBodyPartTypeList (fullList) {
      this.bodyPartType = {}
      this.bodyPartTypeList = []
      if (fullList) {
        fullList.forEach((element) => {
          this.bodyPartType[element.BodyPartTypeID] = element
          this.bodyPartTypeList.push(element.BodyPartTypeID)
        })
      }
    },
    setDatesList (fullList) {
      this.dates = {}
      this.datesList = []
      if (fullList) {
        fullList.forEach((element) => {
          this.dates[element.DatesID] = element
          this.datesList.push(element.DatesID)
        })
      }
    },
    setMeasurementTypeList (fullList) {
      this.measurementType = {}
      this.measurementTypeList = []
      if (fullList) {
        fullList.forEach((element) => {
          this.measurementType[element.MeasurementTypeID] = element
          this.measurementTypeList.push(element.MeasurementTypeID)
        })
      }
    },
    setMeasurementTypeCategoryList (fullList) {
      this.measurementTypeCategory = {}
      this.measurementTypeCategoryList = []
      if (fullList) {
        fullList.forEach((element) => {
          this.measurementTypeCategory[element.MeasurementTypeCategoryID] = element
          this.measurementTypeCategoryList.push(element.MeasurementTypeCategoryID)
        })
      }
    },
    setTimeList (fullList) {
      this.time = {}
      this.timeList = []
      if (fullList) {
        fullList.forEach((element) => {
          this.time[element.TimeID] = element
          this.timeList.push(element.TimeID)
        })
      }
    },
    setUnitList (fullList) {
      this.unit = {}
      this.unitList = []
      if (fullList) {
        fullList.forEach((element) => {
          this.unit[element.UnitID] = element
          this.unitList.push(element.UnitID)
        })
      }
    },
    setUnitTypeList (fullList) {
      this.unitType = {}
      this.unitTypeList = []
      if (fullList) {
        fullList.forEach((element) => {
          this.unitType[element.UnitTypeID] = element
          this.unitTypeList.push(element.UnitTypeID)
        })
      }
    }
  }
})
