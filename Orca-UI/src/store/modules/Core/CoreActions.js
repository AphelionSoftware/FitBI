import {APIinstance} from '../../../plugins/api.js'
import uuidv1 from 'uuid/v1'
const actions = {
  saveActive (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.ActiveItem
    } else {
      item = payload
    }
    let defaults = {
      ActiveID: null,
      Code: null,
      Name: null,
      Id: uuidv1(),
      Version: null,
      CreatedAt: new Date().toUTCString(),
      UpdatedAt: null,
      Deleted: false,
      NeedsSync: true
    }
    if (item.ActiveID === null) item.ActiveID = 0
    item.UpdatedAt = (new Date()).toUTCString()
    item.NeedsSync = true
    item = {...defaults, ...item}
    context.commit('SET_ACTIVE', item)
    APIinstance.mergeStats.mergeActive(item)
  },
  saveBodyPart (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.BodyPartItem
    } else {
      item = payload
    }
    let defaults = {
      BodyPartID: null,
      BodyPartTypeID: null,
      Code: null,
      Name: null,
      Description: null,
      ParentBodyPartID: null,
      Active: 1,
      ID: uuidv1(),
      CreatedAt: new Date().toUTCString(),
      UpdatedAt: null,
      Deleted: false,
      Version: null,
      NeedsSync: true
    }
    if (item.BodyPartID === null) item.BodyPartID = 0
    item.UpdatedAt = (new Date()).toUTCString()
    item.NeedsSync = true
    item = {...defaults, ...item}
    context.commit('SET_BODYPART', item)
    APIinstance.mergeStats.mergeBodyPart(item)
  },
  saveBodyPartType (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.BodyPartTypeItem
    } else {
      item = payload
    }
    let defaults = {
      BodyPartTypeID: null,
      Code: null,
      Name: null,
      Active: 1,
      ID: uuidv1(),
      CreatedAt: new Date().toUTCString(),
      UpdatedAt: null,
      Deleted: false,
      Version: null,
      NeedsSync: true
    }
    if (item.BodyPartTypeID === null) item.BodyPartTypeID = 0
    item.UpdatedAt = (new Date()).toUTCString()
    item.NeedsSync = true
    item = {...defaults, ...item}
    context.commit('SET_BODYPARTTYPE', item)
    APIinstance.mergeStats.mergeBodyPartType(item)
  },
  saveDates (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.DatesItem
    } else {
      item = payload
    }
    let defaults = {
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
      ID: uuidv1(),
      CreatedAt: new Date().toUTCString(),
      UpdatedAt: null,
      Deleted: false,
      Version: null,
      NeedsSync: true
    }
    if (typeof item.FullDate === 'undefined' || item.FullDate === null) item.FullDate = new Date()
    item.FullDate = item.FullDate.toUTCString()
    if (typeof item.Date === 'undefined' || item.Date === null) item.Date = new Date()
    item.Date = item.Date.toUTCString()
    if (item.DatesID === null) item.DatesID = 0
    item.UpdatedAt = (new Date()).toUTCString()
    item.NeedsSync = true
    item = {...defaults, ...item}
    context.commit('SET_DATES', item)
    APIinstance.mergeStats.mergeDates(item)
  },
  saveMeasurementType (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.MeasurementTypeItem
    } else {
      item = payload
    }
    let defaults = {
      MeasurementTypeID: null,
      MeasurementTypeCategoryID: null,
      Code: null,
      Name: null,
      Description: null,
      Active: 1,
      ID: uuidv1(),
      CreatedAt: new Date().toUTCString(),
      UpdatedAt: null,
      Deleted: false,
      Version: null,
      NeedsSync: true
    }
    if (item.MeasurementTypeID === null) item.MeasurementTypeID = 0
    item.UpdatedAt = (new Date()).toUTCString()
    item.NeedsSync = true
    item = {...defaults, ...item}
    context.commit('SET_MEASUREMENTTYPE', item)
    APIinstance.mergeStats.mergeMeasurementType(item)
  },
  saveMeasurementTypeCategory (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.MeasurementTypeCategoryItem
    } else {
      item = payload
    }
    let defaults = {
      MeasurementTypeCategoryID: null,
      Code: null,
      Name: null,
      Active: 1,
      ID: uuidv1(),
      CreatedAt: new Date().toUTCString(),
      UpdatedAt: null,
      Deleted: false,
      Version: null,
      NeedsSync: true
    }
    if (item.MeasurementTypeCategoryID === null) item.MeasurementTypeCategoryID = 0
    item.UpdatedAt = (new Date()).toUTCString()
    item.NeedsSync = true
    item = {...defaults, ...item}
    context.commit('SET_MEASUREMENTTYPECATEGORY', item)
    APIinstance.mergeStats.mergeMeasurementTypeCategory(item)
  },
  saveStatType (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.StatTypeItem
    } else {
      item = payload
    }
    let defaults = {
      StatTypeID: null,
      Code: null,
      Name: null,
      Description: null,
      TableName: null,
      ColumnName: null,
      MeasurementTypeCategoryID: null,
      Active: 1,
      ID: uuidv1(),
      CreatedAt: new Date().toUTCString(),
      UpdatedAt: null,
      Deleted: false,
      Version: null,
      NeedsSync: true
    }
    if (item.StatTypeID === null) item.StatTypeID = 0
    item.UpdatedAt = (new Date()).toUTCString()
    item.NeedsSync = true
    item = {...defaults, ...item}
    context.commit('SET_STATTYPE', item)
    APIinstance.mergeStats.mergeStatType(item)
  },
  saveTime (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.TimeItem
    } else {
      item = payload
    }
    let defaults = {
      TimeID: null,
      TimeInt: null,
      Time: null,
      SecondOfMinute: null,
      MinuteOfHour: null,
      HourOfDay: null,
      SecondOfHour: null,
      SecondOfDay: null,
      MinuteOfDay: null,
      ID: uuidv1(),
      CreatedAt: new Date().toUTCString(),
      UpdatedAt: null,
      Deleted: false,
      Version: null,
      NeedsSync: true
    }
    if (item.TimeID === null) item.TimeID = 0
    item.UpdatedAt = (new Date()).toUTCString()
    item.NeedsSync = true
    item = {...defaults, ...item}
    context.commit('SET_TIME', item)
    APIinstance.mergeStats.mergeTime(item)
  },
  saveUnit (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.UnitItem
    } else {
      item = payload
    }
    let defaults = {
      UnitID: null,
      UnitTypeID: null,
      Code: null,
      Name: null,
      Description: null,
      ParentUnitID: null,
      Active: 1,
      ID: uuidv1(),
      CreatedAt: new Date().toUTCString(),
      UpdatedAt: null,
      Deleted: false,
      Version: null,
      NeedsSync: true
    }
    if (item.UnitID === null) item.UnitID = 0
    item.UpdatedAt = (new Date()).toUTCString()
    item.NeedsSync = true
    item = {...defaults, ...item}
    context.commit('SET_UNIT', item)
    APIinstance.mergeStats.mergeUnit(item)
  },
  saveUnitType (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.UnitTypeItem
    } else {
      item = payload
    }
    let defaults = {
      UnitTypeID: null,
      Code: null,
      Name: null,
      Active: 1,
      ID: uuidv1(),
      CreatedAt: new Date().toUTCString(),
      UpdatedAt: null,
      Deleted: false,
      Version: null,
      NeedsSync: true
    }
    if (item.UnitTypeID === null) item.UnitTypeID = 0
    item.UpdatedAt = (new Date()).toUTCString()
    item.NeedsSync = true
    item = {...defaults, ...item}
    context.commit('SET_UNITTYPE', item)
    APIinstance.mergeStats.mergeUnitType(item)
  },
  stub () {}
}

export default actions
