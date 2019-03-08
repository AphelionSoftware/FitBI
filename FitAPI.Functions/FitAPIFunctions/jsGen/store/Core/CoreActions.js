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
      UpdatedAt: new Date(),
      Deleted: false,
      NeedsSync: true
    }
    if (typeof item.UpdatedAt === 'undefined' || item.UpdatedAt === null) {
      item.UpdatedAt = new Date()
    } else {
      item.UpdatedAt = new Date(item.UpdatedAt)
    }
    item.UpdatedAt = item.UpdatedAt.toUTCString()
    item.UpdatedAt = (new Date()).toUTCString()
    item.NeedsSync = true
    item = {...defaults, ...item}
    if (item.ActiveID === null) item.ActiveID = Math.round(Math.random() * 1073741824) + 1073741823 // Gets us a random number above 1073741823 but less than full positive int.
    context.commit('SET_ACTIVE', item)
    APIinstance.mergeCore.mergeActive(item)
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
      Bilateral: true,
      Active: 1,
      ID: uuidv1(),
      CreatedAt: new Date().toUTCString(),
      UpdatedAt: new Date(),
      Deleted: false,
      Version: null,
      NeedsSync: true
    }
    if (typeof item.UpdatedAt === 'undefined' || item.UpdatedAt === null) {
      item.UpdatedAt = new Date()
    } else {
      item.UpdatedAt = new Date(item.UpdatedAt)
    }
    item.UpdatedAt = item.UpdatedAt.toUTCString()
    item.UpdatedAt = (new Date()).toUTCString()
    item.NeedsSync = true
    item = {...defaults, ...item}
    if (item.BodyPartID === null) item.BodyPartID = Math.round(Math.random() * 1073741824) + 1073741823 // Gets us a random number above 1073741823 but less than full positive int.
    context.commit('SET_BODYPART', item)
    APIinstance.mergeCore.mergeBodyPart(item)
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
      UpdatedAt: new Date(),
      Deleted: false,
      Version: null,
      NeedsSync: true
    }
    if (typeof item.UpdatedAt === 'undefined' || item.UpdatedAt === null) {
      item.UpdatedAt = new Date()
    } else {
      item.UpdatedAt = new Date(item.UpdatedAt)
    }
    item.UpdatedAt = item.UpdatedAt.toUTCString()
    item.UpdatedAt = (new Date()).toUTCString()
    item.NeedsSync = true
    item = {...defaults, ...item}
    if (item.BodyPartTypeID === null) item.BodyPartTypeID = Math.round(Math.random() * 1073741824) + 1073741823 // Gets us a random number above 1073741823 but less than full positive int.
    context.commit('SET_BODYPARTTYPE', item)
    APIinstance.mergeCore.mergeBodyPartType(item)
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
      UpdatedAt: new Date(),
      Deleted: false,
      Version: null,
      NeedsSync: true
    }
    if (typeof item.FullDate === 'undefined' || item.FullDate === null) {
      item.FullDate = new Date()
    } else {
      item.FullDate = new Date(item.FullDate)
    }
    item.FullDate = item.FullDate.toUTCString()
    if (typeof item.Date === 'undefined' || item.Date === null) {
      item.Date = new Date()
    } else {
      item.Date = new Date(item.Date)
    }
    item.Date = item.Date.toUTCString()
    if (typeof item.UpdatedAt === 'undefined' || item.UpdatedAt === null) {
      item.UpdatedAt = new Date()
    } else {
      item.UpdatedAt = new Date(item.UpdatedAt)
    }
    item.UpdatedAt = item.UpdatedAt.toUTCString()
    item.UpdatedAt = (new Date()).toUTCString()
    item.NeedsSync = true
    item = {...defaults, ...item}
    if (item.DatesID === null) item.DatesID = Math.round(Math.random() * 1073741824) + 1073741823 // Gets us a random number above 1073741823 but less than full positive int.
    context.commit('SET_DATES', item)
    APIinstance.mergeCore.mergeDates(item)
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
      UpdatedAt: new Date(),
      Deleted: false,
      Version: null,
      NeedsSync: true
    }
    if (typeof item.UpdatedAt === 'undefined' || item.UpdatedAt === null) {
      item.UpdatedAt = new Date()
    } else {
      item.UpdatedAt = new Date(item.UpdatedAt)
    }
    item.UpdatedAt = item.UpdatedAt.toUTCString()
    item.UpdatedAt = (new Date()).toUTCString()
    item.NeedsSync = true
    item = {...defaults, ...item}
    if (item.MeasurementTypeID === null) item.MeasurementTypeID = Math.round(Math.random() * 1073741824) + 1073741823 // Gets us a random number above 1073741823 but less than full positive int.
    context.commit('SET_MEASUREMENTTYPE', item)
    APIinstance.mergeCore.mergeMeasurementType(item)
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
      UpdatedAt: new Date(),
      Deleted: false,
      Version: null,
      NeedsSync: true
    }
    if (typeof item.UpdatedAt === 'undefined' || item.UpdatedAt === null) {
      item.UpdatedAt = new Date()
    } else {
      item.UpdatedAt = new Date(item.UpdatedAt)
    }
    item.UpdatedAt = item.UpdatedAt.toUTCString()
    item.UpdatedAt = (new Date()).toUTCString()
    item.NeedsSync = true
    item = {...defaults, ...item}
    if (item.MeasurementTypeCategoryID === null) item.MeasurementTypeCategoryID = Math.round(Math.random() * 1073741824) + 1073741823 // Gets us a random number above 1073741823 but less than full positive int.
    context.commit('SET_MEASUREMENTTYPECATEGORY', item)
    APIinstance.mergeCore.mergeMeasurementTypeCategory(item)
  },
  saveMetricDetail (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.MetricDetailItem
    } else {
      item = payload
    }
    let defaults = {
      MetricDetailID: null,
      MetricSetID: 1,
      MeasurementTypeID: 1,
      BodyPartID: null,
      OrdinalPosition: 0,
      Active: 1,
      ID: uuidv1(),
      CreatedAt: new Date().toUTCString(),
      UpdatedAt: new Date(),
      Deleted: false,
      Version: null,
      NeedsSync: true
    }
    if (typeof item.UpdatedAt === 'undefined' || item.UpdatedAt === null) {
      item.UpdatedAt = new Date()
    } else {
      item.UpdatedAt = new Date(item.UpdatedAt)
    }
    item.UpdatedAt = item.UpdatedAt.toUTCString()
    item.UpdatedAt = (new Date()).toUTCString()
    item.NeedsSync = true
    item = {...defaults, ...item}
    if (item.MetricDetailID === null) item.MetricDetailID = Math.round(Math.random() * 1073741824) + 1073741823 // Gets us a random number above 1073741823 but less than full positive int.
    context.commit('SET_METRICDETAIL', item)
    APIinstance.mergeCore.mergeMetricDetail(item)
  },
  saveMetricSet (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.MetricSetItem
    } else {
      item = payload
    }
    let defaults = {
      MetricSetID: null,
      Code: null,
      Name: null,
      Description: null,
      icon: null,
      Active: 1,
      ID: uuidv1(),
      CreatedAt: new Date().toUTCString(),
      UpdatedAt: new Date(),
      Deleted: false,
      Version: null,
      NeedsSync: true
    }
    if (typeof item.UpdatedAt === 'undefined' || item.UpdatedAt === null) {
      item.UpdatedAt = new Date()
    } else {
      item.UpdatedAt = new Date(item.UpdatedAt)
    }
    item.UpdatedAt = item.UpdatedAt.toUTCString()
    item.UpdatedAt = (new Date()).toUTCString()
    item.NeedsSync = true
    item = {...defaults, ...item}
    if (item.MetricSetID === null) item.MetricSetID = Math.round(Math.random() * 1073741824) + 1073741823 // Gets us a random number above 1073741823 but less than full positive int.
    context.commit('SET_METRICSET', item)
    APIinstance.mergeCore.mergeMetricSet(item)
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
      UpdatedAt: new Date(),
      Deleted: false,
      Version: null,
      NeedsSync: true
    }
    if (typeof item.UpdatedAt === 'undefined' || item.UpdatedAt === null) {
      item.UpdatedAt = new Date()
    } else {
      item.UpdatedAt = new Date(item.UpdatedAt)
    }
    item.UpdatedAt = item.UpdatedAt.toUTCString()
    item.UpdatedAt = (new Date()).toUTCString()
    item.NeedsSync = true
    item = {...defaults, ...item}
    if (item.StatTypeID === null) item.StatTypeID = Math.round(Math.random() * 1073741824) + 1073741823 // Gets us a random number above 1073741823 but less than full positive int.
    context.commit('SET_STATTYPE', item)
    APIinstance.mergeCore.mergeStatType(item)
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
      UpdatedAt: new Date(),
      Deleted: false,
      Version: null,
      NeedsSync: true
    }
    if (typeof item.UpdatedAt === 'undefined' || item.UpdatedAt === null) {
      item.UpdatedAt = new Date()
    } else {
      item.UpdatedAt = new Date(item.UpdatedAt)
    }
    item.UpdatedAt = item.UpdatedAt.toUTCString()
    item.UpdatedAt = (new Date()).toUTCString()
    item.NeedsSync = true
    item = {...defaults, ...item}
    if (item.TimeID === null) item.TimeID = Math.round(Math.random() * 1073741824) + 1073741823 // Gets us a random number above 1073741823 but less than full positive int.
    context.commit('SET_TIME', item)
    APIinstance.mergeCore.mergeTime(item)
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
      UpdatedAt: new Date(),
      Deleted: false,
      Version: null,
      NeedsSync: true
    }
    if (typeof item.UpdatedAt === 'undefined' || item.UpdatedAt === null) {
      item.UpdatedAt = new Date()
    } else {
      item.UpdatedAt = new Date(item.UpdatedAt)
    }
    item.UpdatedAt = item.UpdatedAt.toUTCString()
    item.UpdatedAt = (new Date()).toUTCString()
    item.NeedsSync = true
    item = {...defaults, ...item}
    if (item.UnitID === null) item.UnitID = Math.round(Math.random() * 1073741824) + 1073741823 // Gets us a random number above 1073741823 but less than full positive int.
    context.commit('SET_UNIT', item)
    APIinstance.mergeCore.mergeUnit(item)
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
      UpdatedAt: new Date(),
      Deleted: false,
      Version: null,
      NeedsSync: true
    }
    if (typeof item.UpdatedAt === 'undefined' || item.UpdatedAt === null) {
      item.UpdatedAt = new Date()
    } else {
      item.UpdatedAt = new Date(item.UpdatedAt)
    }
    item.UpdatedAt = item.UpdatedAt.toUTCString()
    item.UpdatedAt = (new Date()).toUTCString()
    item.NeedsSync = true
    item = {...defaults, ...item}
    if (item.UnitTypeID === null) item.UnitTypeID = Math.round(Math.random() * 1073741824) + 1073741823 // Gets us a random number above 1073741823 but less than full positive int.
    context.commit('SET_UNITTYPE', item)
    APIinstance.mergeCore.mergeUnitType(item)
  },
  stub () {}
}

export default actions
