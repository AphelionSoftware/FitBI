import {updateField} from 'vuex-map-fields'
import Vue from 'vue'
import localForage from 'localforage'
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
    if (typeof payload !== 'undefined') {
      Vue.set(state.Active, payload.ActiveID, payload)
      localForage.setItem('Core_Active', state.Active)
    }
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
      localForage.setItem('Core_Active', state.Active)
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
    if (typeof payload !== 'undefined') {
      Vue.set(state.BodyPart, payload.BodyPartID, payload)
      localForage.setItem('Core_BodyPart', state.BodyPart)
    }
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
      localForage.setItem('Core_BodyPart', state.BodyPart)
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
    if (typeof payload !== 'undefined') {
      Vue.set(state.BodyPartType, payload.BodyPartTypeID, payload)
      localForage.setItem('Core_BodyPartType', state.BodyPartType)
    }
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
      localForage.setItem('Core_BodyPartType', state.BodyPartType)
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
    if (typeof payload !== 'undefined') {
      Vue.set(state.Dates, payload.DatesID, payload)
      localForage.setItem('Core_Dates', state.Dates)
    }
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
      localForage.setItem('Core_Dates', state.Dates)
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
    if (typeof payload !== 'undefined') {
      Vue.set(state.MeasurementType, payload.MeasurementTypeID, payload)
      localForage.setItem('Core_MeasurementType', state.MeasurementType)
    }
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
      localForage.setItem('Core_MeasurementType', state.MeasurementType)
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
    if (typeof payload !== 'undefined') {
      Vue.set(state.MeasurementTypeCategory, payload.MeasurementTypeCategoryID, payload)
      localForage.setItem('Core_MeasurementTypeCategory', state.MeasurementTypeCategory)
    }
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
      localForage.setItem('Core_MeasurementTypeCategory', state.MeasurementTypeCategory)
    }
  },
  GET_STATTYPE (state, payload) {
    if ('' + payload.StatTypeID === '0') {
      state.StatTypeItem = {
        StatTypeID: null,
        Code: null,
        Name: null,
        Description: null,
        TableName: null,
        ColumnName: null,
        MeasurementTypeCategoryID: null,
        Active: null,
        ID: null,
        CreatedAt: null,
        UpdatedAt: null,
        Deleted: null,
        Version: null,
        NeedsSync: true
      }
    } else {
      state.StatTypeItem = state.StatType[payload.StatTypeID]
    }
  },
  SET_STATTYPE (state, payload) {
    if (typeof payload !== 'undefined') {
      Vue.set(state.StatType, payload.StatTypeID, payload)
      localForage.setItem('Core_StatType', state.StatType)
    }
  },
  SET_STATTYPEITEM (state, payload) {
    state.StatTypeItem = payload
  },
  SET_STATTYPE_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.StatType, element.StatTypeID, element)
        state.StatTypeList.push(element.StatTypeID)
      }, this)
      localForage.setItem('Core_StatType', state.StatType)
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
    if (typeof payload !== 'undefined') {
      Vue.set(state.Time, payload.TimeID, payload)
      localForage.setItem('Core_Time', state.Time)
    }
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
      localForage.setItem('Core_Time', state.Time)
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
    if (typeof payload !== 'undefined') {
      Vue.set(state.Unit, payload.UnitID, payload)
      localForage.setItem('Core_Unit', state.Unit)
    }
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
      localForage.setItem('Core_Unit', state.Unit)
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
    if (typeof payload !== 'undefined') {
      Vue.set(state.UnitType, payload.UnitTypeID, payload)
      localForage.setItem('Core_UnitType', state.UnitType)
    }
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
      localForage.setItem('Core_UnitType', state.UnitType)
    }
  },
  SET_FLAG (state, payload) {
    if (payload === false) {
      state.Flags.loaded = false
    } else if (payload === true) {
      state.Flags.loaded = true
    } else {
      state.Flags = {...state.Flags, ...payload}
    }
  },
  updateField
}

export default mutations
