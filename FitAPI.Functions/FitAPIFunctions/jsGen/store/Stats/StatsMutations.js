import {updateField} from 'vuex-map-fields'
import Vue from 'vue'
const mutations = {
  GET_DAILYMEASUREMENT (state, payload) {
    if ('' + payload.DailyMeasurementID === '0') {
      state.DailyMeasurementItem = {
        DailyMeasurementID: null,
        PersonID: null,
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
        MeasurementDate: null,
        MeasurementDateID: null,
        Active: null,
        ID: null,
        CreatedAt: null,
        UpdatedAt: null,
        Deleted: null,
        Version: null,
        NeedsSync: true
      }
    } else {
      state.DailyMeasurementItem = state.DailyMeasurement[payload.DailyMeasurementID]
    }
  },
  SET_DAILYMEASUREMENT (state, payload) {
    state.DailyMeasurement[payload.DailyMeasurementID] = payload
  },
  SET_DAILYMEASUREMENTITEM (state, payload) {
    state.DailyMeasurementItem = payload
  },
  SET_DAILYMEASUREMENT_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.DailyMeasurement, element.MeasurementDateID, element)
        state.DailyMeasurementList.push(element.MeasurementDateID)
      }, this)
    }
  },
  GET_METRIC (state, payload) {
    if ('' + payload.MetricID === '0') {
      state.MetricItem = {
        MetricID: null,
        PersonID: null,
        Weight: null,
        BodyFatPercentage: null,
        MusclePercentage: null,
        WaterPercentage: null,
        BonePercentage: null,
        PercentMeasurementTypeID: null,
        Active: null,
        ID: null,
        CreatedAt: null,
        UpdatedAt: null,
        Deleted: null,
        Version: null,
        NeedsSync: true
      }
    } else {
      state.MetricItem = state.Metric[payload.MetricID]
    }
  },
  SET_METRIC (state, payload) {
    state.Metric[payload.MetricID] = payload
  },
  SET_METRICITEM (state, payload) {
    state.MetricItem = payload
  },
  SET_METRIC_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.Metric, element.MetricID, element)
        state.MetricList.push(element.MetricID)
      }, this)
    }
  },
  GET_PERSON (state, payload) {
    if ('' + payload.PersonID === '0') {
      state.PersonItem = {
        PersonID: null,
        FirstName: null,
        Surname: null,
        DateOfBirth: null,
        DateOfBirthID: null,
        Height: null,
        Active: null,
        ID: null,
        CreatedAt: null,
        UpdatedAt: null,
        Deleted: null,
        Version: null,
        NeedsSync: true
      }
    } else {
      state.PersonItem = state.Person[payload.PersonID]
    }
  },
  SET_PERSON (state, payload) {
    state.Person[payload.PersonID] = payload
  },
  SET_PERSONITEM (state, payload) {
    state.PersonItem = payload
  },
  SET_PERSON_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.Person, element.PersonID, element)
        state.PersonList.push(element.PersonID)
      }, this)
    }
  },
  GET_SKINFOLDMEASUREMENT (state, payload) {
    if ('' + payload.SkinfoldMeasurementID === '0') {
      state.SkinfoldMeasurementItem = {
        SkinfoldMeasurementID: null,
        PersonID: null,
        SkinfoldThickness: null,
        SideMeasurementTypeID: null,
        BodyPartID: null,
        MeasurementDate: null,
        Active: null,
        ID: null,
        CreatedAt: null,
        UpdatedAt: null,
        Deleted: null,
        Version: null,
        NeedsSync: true
      }
    } else {
      state.SkinfoldMeasurementItem = state.SkinfoldMeasurement[payload.SkinfoldMeasurementID]
    }
  },
  SET_SKINFOLDMEASUREMENT (state, payload) {
    state.SkinfoldMeasurement[payload.SkinfoldMeasurementID] = payload
  },
  SET_SKINFOLDMEASUREMENTITEM (state, payload) {
    state.SkinfoldMeasurementItem = payload
  },
  SET_SKINFOLDMEASUREMENT_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.SkinfoldMeasurement, element.SkinfoldMeasurementID, element)
        state.SkinfoldMeasurementList.push(element.SkinfoldMeasurementID)
      }, this)
    }
  },
  GET_TAPEMEASUREMENT (state, payload) {
    if ('' + payload.TapeMeasurementID === '0') {
      state.TapeMeasurementItem = {
        TapeMeasurementID: null,
        PersonID: null,
        TapeLength: null,
        SideMeasurementTypeID: null,
        BodyPartID: null,
        MeasurementDate: null,
        MeasurementDateID: null,
        Active: null,
        ID: null,
        CreatedAt: null,
        UpdatedAt: null,
        Deleted: null,
        Version: null,
        NeedsSync: true
      }
    } else {
      state.TapeMeasurementItem = state.TapeMeasurement[payload.TapeMeasurementID]
    }
  },
  SET_TAPEMEASUREMENT (state, payload) {
    state.TapeMeasurement[payload.TapeMeasurementID] = payload
  },
  SET_TAPEMEASUREMENTITEM (state, payload) {
    state.TapeMeasurementItem = payload
  },
  SET_TAPEMEASUREMENT_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.TapeMeasurement, element.TapeMeasurementID, element)
        state.TapeMeasurementList.push(element.TapeMeasurementID)
      }, this)
    }
  },
  GET_WEIGHTMEASUREMENT (state, payload) {
    if ('' + payload.WeightMeasurementID === '0') {
      state.WeightMeasurementItem = {
        WeightMeasurementID: null,
        PersonID: null,
        Weight: null,
        BodyFatPercentage: null,
        MusclePercentage: null,
        WaterPercentage: null,
        BonePercentage: null,
        PercentMeasurementTypeID: null,
        UnitID: null,
        MeasurementDate: null,
        MeasurementDateID: null,
        Active: null,
        ID: null,
        CreatedAt: null,
        UpdatedAt: null,
        Deleted: null,
        Version: null,
        NeedsSync: true
      }
    } else {
      state.WeightMeasurementItem = state.WeightMeasurement[payload.WeightMeasurementID]
    }
  },
  SET_WEIGHTMEASUREMENT (state, payload) {
    state.WeightMeasurement[payload.WeightMeasurementID] = payload
  },
  SET_WEIGHTMEASUREMENTITEM (state, payload) {
    state.WeightMeasurementItem = payload
  },
  SET_WEIGHTMEASUREMENT_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.WeightMeasurement, element.WeightMeasurementID, element)
        state.WeightMeasurementList.push(element.WeightMeasurementID)
      }, this)
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
