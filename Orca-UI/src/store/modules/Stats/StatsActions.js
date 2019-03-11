import {APIinstance} from '../../../plugins/api.js'
import uuidv1 from 'uuid/v1'
const actions = {
  saveDailyMeasurement (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.DailyMeasurementItem
    } else {
      item = payload
    }
    let defaults = {
      DailyMeasurementID: null,
      PersonID: context.rootGetters['Stats/Get_Person_List'][0].PersonID,
      Weight: null,
      BellyButtonCircumference: null,
      NeckCircumference: null,
      WaistCircumference: null,
      HipCircumference: null,
      ChestCircumference: null,
      BicepCircumference: null,
      QuadCircumference: null,
      CalvesCircumference: null,
      BodyFatPercentage: null,
      MusclePercentage: null,
      WaterPercentage: null,
      BonePercentage: null,
      PercentMeasurementTypeID: null,
      UnitID: null,
      MeasurementDate: new Date(),
      Active: 1,
      ID: uuidv1(),
      CreatedAt: new Date().toUTCString(),
      UpdatedAt: new Date(),
      Deleted: false,
      Version: null,
      NeedsSync: true
    }
    if (typeof item.MeasurementDate === 'undefined' || item.MeasurementDate === null) {
      item.MeasurementDate = new Date()
    } else {
      item.MeasurementDate = new Date(item.MeasurementDate)
    }
    item.MeasurementDate = item.MeasurementDate.toUTCString()
    if (typeof item.UpdatedAt === 'undefined' || item.UpdatedAt === null) {
      item.UpdatedAt = new Date()
    } else {
      item.UpdatedAt = new Date(item.UpdatedAt)
    }
    item.UpdatedAt = item.UpdatedAt.toUTCString()
    item.UpdatedAt = (new Date()).toUTCString()
    item.NeedsSync = true
    item = {...defaults, ...item}
    if (item.DailyMeasurementID === null) item.DailyMeasurementID = Math.round(Math.random() * 1073741824) + 1073741823 // Gets us a random number above 1073741823 but less than full positive int.
    context.commit('SET_DAILYMEASUREMENT', item)
    APIinstance.mergeStats.mergeDailyMeasurement(item)
  },
  saveMetric (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.MetricItem
    } else {
      item = payload
    }
    let defaults = {
      MetricID: null,
      PersonID: context.rootGetters['Stats/Get_Person_List'][0].PersonID,
      Weight: null,
      BodyFatPercentage: null,
      MusclePercentage: null,
      WaterPercentage: null,
      BonePercentage: null,
      PercentMeasurementTypeID: null,
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
    if (item.MetricID === null) item.MetricID = Math.round(Math.random() * 1073741824) + 1073741823 // Gets us a random number above 1073741823 but less than full positive int.
    context.commit('SET_METRIC', item)
    APIinstance.mergeStats.mergeMetric(item)
  },
  saveMetricValue (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.MetricValueItem
    } else {
      item = payload
    }
    let defaults = {
      MetricValueID: null,
      PersonID: context.rootGetters['Stats/Get_Person_List'][0].PersonID,
      MetricDetailID: null,
      IntegerValue: null,
      FloatValue: null,
      DecimalValue: null,
      BooleanValue: null,
      MeasurementDate: null,
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
    if (item.MetricValueID === null) item.MetricValueID = Math.round(Math.random() * 1073741824) + 1073741823 // Gets us a random number above 1073741823 but less than full positive int.
    context.commit('SET_METRICVALUE', item)
    APIinstance.mergeStats.mergeMetricValue(item)
  },
  savePerson (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.PersonItem
    } else {
      item = payload
    }
    let defaults = {
      PersonID: context.rootGetters['Stats/Get_Person_List'][0].PersonID,
      FirstName: null,
      Surname: null,
      DateOfBirth: null,
      Height: null,
      Active: 1,
      ID: uuidv1(),
      CreatedAt: new Date().toUTCString(),
      UpdatedAt: new Date(),
      Deleted: false,
      Version: null,
      NeedsSync: true
    }
    if (typeof item.DateOfBirth === 'undefined' || item.DateOfBirth === null) {
      item.DateOfBirth = new Date()
    } else {
      item.DateOfBirth = new Date(item.DateOfBirth)
    }
    item.DateOfBirth = item.DateOfBirth.toUTCString()
    if (typeof item.UpdatedAt === 'undefined' || item.UpdatedAt === null) {
      item.UpdatedAt = new Date()
    } else {
      item.UpdatedAt = new Date(item.UpdatedAt)
    }
    item.UpdatedAt = item.UpdatedAt.toUTCString()
    item.UpdatedAt = (new Date()).toUTCString()
    item.NeedsSync = true
    item = {...defaults, ...item}
    if (item.PersonID === null) item.PersonID = Math.round(Math.random() * 1073741824) + 1073741823 // Gets us a random number above 1073741823 but less than full positive int.
    context.commit('SET_PERSON', item)
    APIinstance.mergeStats.mergePerson(item)
  },
  saveSkinfoldMeasurement (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.SkinfoldMeasurementItem
    } else {
      item = payload
    }
    let defaults = {
      SkinfoldMeasurementID: null,
      PersonID: context.rootGetters['Stats/Get_Person_List'][0].PersonID,
      SkinfoldThickness: null,
      SideMeasurementTypeID: null,
      BodyPartID: null,
      MeasurementDate: new Date(),
      Active: 1,
      ID: uuidv1(),
      CreatedAt: new Date().toUTCString(),
      UpdatedAt: new Date(),
      Deleted: false,
      Version: null,
      NeedsSync: true
    }
    if (typeof item.MeasurementDate === 'undefined' || item.MeasurementDate === null) {
      item.MeasurementDate = new Date()
    } else {
      item.MeasurementDate = new Date(item.MeasurementDate)
    }
    item.MeasurementDate = item.MeasurementDate.toUTCString()
    if (typeof item.UpdatedAt === 'undefined' || item.UpdatedAt === null) {
      item.UpdatedAt = new Date()
    } else {
      item.UpdatedAt = new Date(item.UpdatedAt)
    }
    item.UpdatedAt = item.UpdatedAt.toUTCString()
    item.UpdatedAt = (new Date()).toUTCString()
    item.NeedsSync = true
    item = {...defaults, ...item}
    if (item.SkinfoldMeasurementID === null) item.SkinfoldMeasurementID = Math.round(Math.random() * 1073741824) + 1073741823 // Gets us a random number above 1073741823 but less than full positive int.
    context.commit('SET_SKINFOLDMEASUREMENT', item)
    APIinstance.mergeStats.mergeSkinfoldMeasurement(item)
  },
  saveTapeMeasurement (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.TapeMeasurementItem
    } else {
      item = payload
    }
    let defaults = {
      TapeMeasurementID: null,
      PersonID: context.rootGetters['Stats/Get_Person_List'][0].PersonID,
      TapeLength: null,
      SideMeasurementTypeID: null,
      BodyPartID: null,
      MeasurementDate: new Date(),
      Active: 1,
      ID: uuidv1(),
      CreatedAt: new Date().toUTCString(),
      UpdatedAt: new Date(),
      Deleted: false,
      Version: null,
      NeedsSync: true
    }
    if (typeof item.MeasurementDate === 'undefined' || item.MeasurementDate === null) {
      item.MeasurementDate = new Date()
    } else {
      item.MeasurementDate = new Date(item.MeasurementDate)
    }
    item.MeasurementDate = item.MeasurementDate.toUTCString()
    if (typeof item.UpdatedAt === 'undefined' || item.UpdatedAt === null) {
      item.UpdatedAt = new Date()
    } else {
      item.UpdatedAt = new Date(item.UpdatedAt)
    }
    item.UpdatedAt = item.UpdatedAt.toUTCString()
    item.UpdatedAt = (new Date()).toUTCString()
    item.NeedsSync = true
    item = {...defaults, ...item}
    if (item.TapeMeasurementID === null) item.TapeMeasurementID = Math.round(Math.random() * 1073741824) + 1073741823 // Gets us a random number above 1073741823 but less than full positive int.
    context.commit('SET_TAPEMEASUREMENT', item)
    APIinstance.mergeStats.mergeTapeMeasurement(item)
  },
  saveWeightMeasurement (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.WeightMeasurementItem
    } else {
      item = payload
    }
    let defaults = {
      WeightMeasurementID: null,
      PersonID: context.rootGetters['Stats/Get_Person_List'][0].PersonID,
      Weight: null,
      BodyFatPercentage: null,
      MusclePercentage: null,
      WaterPercentage: null,
      BonePercentage: null,
      PercentMeasurementTypeID: null,
      UnitID: null,
      MeasurementDate: new Date(),
      Active: 1,
      ID: uuidv1(),
      CreatedAt: new Date().toUTCString(),
      UpdatedAt: new Date(),
      Deleted: false,
      Version: null,
      NeedsSync: true
    }
    if (typeof item.MeasurementDate === 'undefined' || item.MeasurementDate === null) {
      item.MeasurementDate = new Date()
    } else {
      item.MeasurementDate = new Date(item.MeasurementDate)
    }
    item.MeasurementDate = item.MeasurementDate.toUTCString()
    if (typeof item.UpdatedAt === 'undefined' || item.UpdatedAt === null) {
      item.UpdatedAt = new Date()
    } else {
      item.UpdatedAt = new Date(item.UpdatedAt)
    }
    item.UpdatedAt = item.UpdatedAt.toUTCString()
    item.UpdatedAt = (new Date()).toUTCString()
    item.NeedsSync = true
    item = {...defaults, ...item}
    if (item.WeightMeasurementID === null) item.WeightMeasurementID = Math.round(Math.random() * 1073741824) + 1073741823 // Gets us a random number above 1073741823 but less than full positive int.
    context.commit('SET_WEIGHTMEASUREMENT', item)
    APIinstance.mergeStats.mergeWeightMeasurement(item)
  },
  stub () {}
}

export default actions
