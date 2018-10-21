import {updateField} from 'vuex-map-fields'
import Vue from 'vue'
import localForage from 'localforage'
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
    if (typeof payload !== 'undefined') {
      Vue.set(state.DailyMeasurement, payload.DailyMeasurementID, payload)
      localForage.setItem('Stats_DailyMeasurement', payload)
    }
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
      localForage.setItem('Stats_DailyMeasurement', fullList)
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
    if (typeof payload !== 'undefined') {
      Vue.set(state.Metric, payload.MetricID, payload)
      localForage.setItem('Stats_Metric', payload)
    }
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
      localForage.setItem('Stats_Metric', fullList)
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
    if (typeof payload !== 'undefined') {
      Vue.set(state.Person, payload.PersonID, payload)
      localForage.setItem('Stats_Person', payload)
    }
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
      localForage.setItem('Stats_Person', fullList)
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
    if (typeof payload !== 'undefined') {
      Vue.set(state.SkinfoldMeasurement, payload.SkinfoldMeasurementID, payload)
      localForage.setItem('Stats_SkinfoldMeasurement', payload)
    }
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
      localForage.setItem('Stats_SkinfoldMeasurement', fullList)
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
    if (typeof payload !== 'undefined') {
      Vue.set(state.TapeMeasurement, payload.TapeMeasurementID, payload)
      localForage.setItem('Stats_TapeMeasurement', payload)
    }
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
      localForage.setItem('Stats_TapeMeasurement', fullList)
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
    if (typeof payload !== 'undefined') {
      Vue.set(state.WeightMeasurement, payload.WeightMeasurementID, payload)
      localForage.setItem('Stats_WeightMeasurement', payload)
    }
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
      localForage.setItem('Stats_WeightMeasurement', fullList)
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
