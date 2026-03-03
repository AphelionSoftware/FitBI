import { defineStore } from 'pinia'

export const useCoreStore = defineStore('core', {
  state: () => ({
    Active: {},
    ActiveList: [],
    ActiveItem: {},
    BodyPart: {},
    BodyPartList: [],
    BodyPartItem: {},
    BodyPartType: {},
    BodyPartTypeList: [],
    BodyPartTypeItem: {},
    Dates: {},
    DatesList: [],
    DatesItem: {},
    MeasurementType: {},
    MeasurementTypeList: [],
    MeasurementTypeItem: {},
    MeasurementTypeCategory: {},
    MeasurementTypeCategoryList: [],
    MeasurementTypeCategoryItem: {},
    Time: {},
    TimeList: [],
    TimeItem: {},
    Unit: {},
    UnitList: [],
    UnitItem: {},
    UnitType: {},
    UnitTypeList: [],
    UnitTypeItem: {}
  }),

  getters: {
    getActiveAll: (state) => Object.values(state.Active),
    getBodyPartAll: (state) => Object.values(state.BodyPart),
    getBodyPartByID: (state) => (id) => state.BodyPart[id],
    getBodyPartTypeAll: (state) => Object.values(state.BodyPartType),
    getMeasurementTypeAll: (state) => Object.values(state.MeasurementType),
    getMeasurementTypeCategoryAll: (state) => Object.values(state.MeasurementTypeCategory),
    getUnitAll: (state) => Object.values(state.Unit),
    getUnitByID: (state) => (id) => state.Unit[id],
    getUnitTypeAll: (state) => Object.values(state.UnitType)
  },

  actions: {
    setActiveList (fullList) {
      if (fullList) {
        fullList.forEach((element) => {
          this.Active[element.ActiveID] = element
          this.ActiveList.push(element.ActiveID)
        })
      }
    },
    setBodyPartList (fullList) {
      if (fullList) {
        fullList.forEach((element) => {
          this.BodyPart[element.BodyPartID] = element
          this.BodyPartList.push(element.BodyPartID)
        })
      }
    },
    setBodyPartTypeList (fullList) {
      if (fullList) {
        fullList.forEach((element) => {
          this.BodyPartType[element.BodyPartTypeID] = element
          this.BodyPartTypeList.push(element.BodyPartTypeID)
        })
      }
    },
    setDatesList (fullList) {
      if (fullList) {
        fullList.forEach((element) => {
          this.Dates[element.DatesID] = element
          this.DatesList.push(element.DatesID)
        })
      }
    },
    setMeasurementTypeList (fullList) {
      if (fullList) {
        fullList.forEach((element) => {
          this.MeasurementType[element.MeasurementTypeID] = element
          this.MeasurementTypeList.push(element.MeasurementTypeID)
        })
      }
    },
    setMeasurementTypeCategoryList (fullList) {
      if (fullList) {
        fullList.forEach((element) => {
          this.MeasurementTypeCategory[element.MeasurementTypeCategoryID] = element
          this.MeasurementTypeCategoryList.push(element.MeasurementTypeCategoryID)
        })
      }
    },
    setTimeList (fullList) {
      if (fullList) {
        fullList.forEach((element) => {
          this.Time[element.TimeID] = element
          this.TimeList.push(element.TimeID)
        })
      }
    },
    setUnitList (fullList) {
      if (fullList) {
        fullList.forEach((element) => {
          this.Unit[element.UnitID] = element
          this.UnitList.push(element.UnitID)
        })
      }
    },
    setUnitTypeList (fullList) {
      if (fullList) {
        fullList.forEach((element) => {
          this.UnitType[element.UnitTypeID] = element
          this.UnitTypeList.push(element.UnitTypeID)
        })
      }
    }
  }
})
