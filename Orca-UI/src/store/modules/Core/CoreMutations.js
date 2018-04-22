import {updateField} from 'vuex-map-fields'
import Vue from 'vue'
const mutations = {
  GET_ACTIVE (state, payload) {
    if ('' + payload.ActiveID === '0') {
      state.ActiveItem = {
        ActiveID: null,
        Code: null,
        Name: null,
        Id: null,
        Version: null,
        CreatedAt: null,
        UpdatedAt: null,
        Deleted: null,
        NeedsSync: true
      }
    } else {
      state.ActiveItem = state.Active[payload.ActiveID]
    }
  },
  SET_ACTIVE (state, payload) {
    state.Active[payload.ActiveID] = payload
  },
  SET_ACTIVEITEM (state, payload) {
    state.ActiveItem = payload
  },
  SET_ACTIVE_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.Active, element.ActiveID, element)
        state.ActiveList.push(element.ActiveID)
      }, this)
    }
  },
  GET_BODYPART (state, payload) {
    if ('' + payload.BodyPartID === '0') {
      state.BodyPartItem = {
        BodyPartID: null,
        BodyPartTypeID: null,
        Code: null,
        Name: null,
        Description: null,
        ParentBodyPartID: null,
        Active: null,
        ID: null,
        CreatedAt: null,
        UpdatedAt: null,
        Deleted: null,
        Version: null,
        NeedsSync: true
      }
    } else {
      state.BodyPartItem = state.BodyPart[payload.BodyPartID]
    }
  },
  SET_BODYPART (state, payload) {
    state.BodyPart[payload.BodyPartID] = payload
  },
  SET_BODYPARTITEM (state, payload) {
    state.BodyPartItem = payload
  },
  SET_BODYPART_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.BodyPart, element.BodyPartID, element)
        state.BodyPartList.push(element.BodyPartID)
      }, this)
    }
  },
  GET_BODYPARTTYPE (state, payload) {
    if ('' + payload.BodyPartTypeID === '0') {
      state.BodyPartTypeItem = {
        BodyPartTypeID: null,
        Code: null,
        Name: null,
        Active: null,
        ID: null,
        CreatedAt: null,
        UpdatedAt: null,
        Deleted: null,
        Version: null,
        NeedsSync: true
      }
    } else {
      state.BodyPartTypeItem = state.BodyPartType[payload.BodyPartTypeID]
    }
  },
  SET_BODYPARTTYPE (state, payload) {
    state.BodyPartType[payload.BodyPartTypeID] = payload
  },
  SET_BODYPARTTYPEITEM (state, payload) {
    state.BodyPartTypeItem = payload
  },
  SET_BODYPARTTYPE_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.BodyPartType, element.BodyPartTypeID, element)
        state.BodyPartTypeList.push(element.BodyPartTypeID)
      }, this)
    }
  },
  GET_DATES (state, payload) {
    if ('' + payload.DatesID === '0') {
      state.DatesItem = {
        DateID: null,
        FullDate: null,
        Date: null,
        DateCounter: null,
        Day: null,
        DaySuffix: null,
        DayOfWeekNumber: null,
        DayOfWeek: null,
        DayOfYear: null,
        WeekOfMonth: null,
        WeekOfMonthName: null,
        WeekOfYear: null,
        WeekOfYearName: null,
        MonthNumber: null,
        ShortMonthName: null,
        MonthName: null,
        Quarter: null,
        QuarterName: null,
        YearName: null,
        YearNumber: null,
        YearMonth: null,
        YearMonthNumber: null,
        ID: null,
        CreatedAt: null,
        UpdatedAt: null,
        Deleted: null,
        Version: null,
        NeedsSync: true
      }
    } else {
      state.DatesItem = state.Dates[payload.DatesID]
    }
  },
  SET_DATES (state, payload) {
    state.Dates[payload.DatesID] = payload
  },
  SET_DATESITEM (state, payload) {
    state.DatesItem = payload
  },
  SET_DATES_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.Dates, element.DatesID, element)
        state.DatesList.push(element.DatesID)
      }, this)
    }
  },
  GET_MEASUREMENTTYPE (state, payload) {
    if ('' + payload.MeasurementTypeID === '0') {
      state.MeasurementTypeItem = {
        MeasurementTypeID: null,
        MeasurementTypeCategoryID: null,
        Code: null,
        Name: null,
        Description: null,
        Active: null,
        ID: null,
        CreatedAt: null,
        UpdatedAt: null,
        Deleted: null,
        Version: null,
        NeedsSync: true
      }
    } else {
      state.MeasurementTypeItem = state.MeasurementType[payload.MeasurementTypeID]
    }
  },
  SET_MEASUREMENTTYPE (state, payload) {
    state.MeasurementType[payload.MeasurementTypeID] = payload
  },
  SET_MEASUREMENTTYPEITEM (state, payload) {
    state.MeasurementTypeItem = payload
  },
  SET_MEASUREMENTTYPE_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.MeasurementType, element.MeasurementTypeID, element)
        state.MeasurementTypeList.push(element.MeasurementTypeID)
      }, this)
    }
  },
  GET_MEASUREMENTTYPECATEGORY (state, payload) {
    if ('' + payload.MeasurementTypeCategoryID === '0') {
      state.MeasurementTypeCategoryItem = {
        MeasurementTypeCategoryID: null,
        Code: null,
        Name: null,
        Active: null,
        ID: null,
        CreatedAt: null,
        UpdatedAt: null,
        Deleted: null,
        Version: null,
        NeedsSync: true
      }
    } else {
      state.MeasurementTypeCategoryItem = state.MeasurementTypeCategory[payload.MeasurementTypeCategoryID]
    }
  },
  SET_MEASUREMENTTYPECATEGORY (state, payload) {
    state.MeasurementTypeCategory[payload.MeasurementTypeCategoryID] = payload
  },
  SET_MEASUREMENTTYPECATEGORYITEM (state, payload) {
    state.MeasurementTypeCategoryItem = payload
  },
  SET_MEASUREMENTTYPECATEGORY_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.MeasurementTypeCategory, element.MeasurementTypeCategoryID, element)
        state.MeasurementTypeCategoryList.push(element.MeasurementTypeCategoryID)
      }, this)
    }
  },
  GET_TIME (state, payload) {
    if ('' + payload.TimeID === '0') {
      state.TimeItem = {
        TimeID: null,
        TimeInt: null,
        Time: null,
        SecondOfMinute: null,
        MinuteOfHour: null,
        HourOfDay: null,
        SecondOfHour: null,
        SecondOfDay: null,
        MinuteOfDay: null,
        ID: null,
        CreatedAt: null,
        UpdatedAt: null,
        Deleted: null,
        Version: null,
        NeedsSync: true
      }
    } else {
      state.TimeItem = state.Time[payload.TimeID]
    }
  },
  SET_TIME (state, payload) {
    state.Time[payload.TimeID] = payload
  },
  SET_TIMEITEM (state, payload) {
    state.TimeItem = payload
  },
  SET_TIME_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.Time, element.TimeID, element)
        state.TimeList.push(element.TimeID)
      }, this)
    }
  },
  GET_UNIT (state, payload) {
    if ('' + payload.UnitID === '0') {
      state.UnitItem = {
        UnitID: null,
        UnitTypeID: null,
        Code: null,
        Name: null,
        Description: null,
        ParentUnitID: null,
        Active: null,
        ID: null,
        CreatedAt: null,
        UpdatedAt: null,
        Deleted: null,
        Version: null,
        NeedsSync: true
      }
    } else {
      state.UnitItem = state.Unit[payload.UnitID]
    }
  },
  SET_UNIT (state, payload) {
    state.Unit[payload.UnitID] = payload
  },
  SET_UNITITEM (state, payload) {
    state.UnitItem = payload
  },
  SET_UNIT_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.Unit, element.UnitID, element)
        state.UnitList.push(element.UnitID)
      }, this)
    }
  },
  GET_UNITTYPE (state, payload) {
    if ('' + payload.UnitTypeID === '0') {
      state.UnitTypeItem = {
        UnitTypeID: null,
        Code: null,
        Name: null,
        Active: null,
        ID: null,
        CreatedAt: null,
        UpdatedAt: null,
        Deleted: null,
        Version: null,
        NeedsSync: true
      }
    } else {
      state.UnitTypeItem = state.UnitType[payload.UnitTypeID]
    }
  },
  SET_UNITTYPE (state, payload) {
    state.UnitType[payload.UnitTypeID] = payload
  },
  SET_UNITTYPEITEM (state, payload) {
    state.UnitTypeItem = payload
  },
  SET_UNITTYPE_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.UnitType, element.UnitTypeID, element)
        state.UnitTypeList.push(element.UnitTypeID)
      }, this)
    }
  },
  updateField
}

export default mutations
