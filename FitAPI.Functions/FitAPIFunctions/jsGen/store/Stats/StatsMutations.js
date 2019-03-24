import {updateField} from 'vuex-map-fields'
import Vue from 'vue'
import localForage from 'localforage'
import _ from 'underscore'
const mutations = {
  SET_DAILYMEASUREMENT_PROPERTIES (state, payload) {
    if (typeof payload !== 'undefined') {
      Vue.set(state.DailyMeasurement, payload.DailyMeasurementID, {...state.DailyMeasurement[payload.DailyMeasurementID], ...payload})
      localForage.setItem('Stats_DailyMeasurement', state.DailyMeasurement)
    }
  },
  SET_DAILYMEASUREMENT (state, payload) {
    if (typeof payload !== 'undefined') {
      Vue.set(state.DailyMeasurement, payload.DailyMeasurementID, payload)
      localForage.setItem('Stats_DailyMeasurement', state.DailyMeasurement)
    }
  },
  SET_DAILYMEASUREMENT_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.DailyMeasurement, element.MeasurementDateID, element)
      }, this)
      _.each(state.DailyMeasurement, (item, idx) => {
        if (item.DailyMeasurementID >= 1073741824 || item.DailyMeasurementID === null) {
          let extant = _.find(state.DailyMeasurement, extItem => {
            return extItem.ID === item.ID && extItem.DailyMeasurementID !== item.DailyMeasurementID
          })
          if (typeof extant !== 'undefined') {
            if (item.UpdatedAt >= extant.UpdatedAt) {
              let extId = +extant.DailyMeasurementID
              let newVal = {...extant, ...item}
              newVal.DailyMeasurementID = extId
              Vue.set(state.DailyMeasurement, newVal.DailyMeasurementID, newVal)
              Vue.delete(state.DailyMeasurement, item.DailyMeasurementID)
            } else {
              Vue.delete(state.DailyMeasurement, item.DailyMeasurementID)
            }
          }
        }
      })

      localForage.setItem('Stats_DailyMeasurement', state.DailyMeasurement)
    }
  },
  SET_METRIC_PROPERTIES (state, payload) {
    if (typeof payload !== 'undefined') {
      Vue.set(state.Metric, payload.MetricID, {...state.Metric[payload.MetricID], ...payload})
      localForage.setItem('Stats_Metric', state.Metric)
    }
  },
  SET_METRIC (state, payload) {
    if (typeof payload !== 'undefined') {
      Vue.set(state.Metric, payload.MetricID, payload)
      localForage.setItem('Stats_Metric', state.Metric)
    }
  },
  SET_METRIC_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.Metric, element.MetricID, element)
      }, this)
      _.each(state.Metric, (item, idx) => {
        if (item.MetricID >= 1073741824 || item.MetricID === null) {
          let extant = _.find(state.Metric, extItem => {
            return extItem.ID === item.ID && extItem.MetricID !== item.MetricID
          })
          if (typeof extant !== 'undefined') {
            if (item.UpdatedAt >= extant.UpdatedAt) {
              let extId = +extant.MetricID
              let newVal = {...extant, ...item}
              newVal.MetricID = extId
              Vue.set(state.Metric, newVal.MetricID, newVal)
              Vue.delete(state.Metric, item.MetricID)
            } else {
              Vue.delete(state.Metric, item.MetricID)
            }
          }
        }
      })

      localForage.setItem('Stats_Metric', state.Metric)
    }
  },
  SET_METRICSET_PROPERTIES (state, payload) {
    if (typeof payload !== 'undefined') {
      Vue.set(state.MetricSet, payload.MetricSetID, {...state.MetricSet[payload.MetricSetID], ...payload})
      localForage.setItem('Stats_MetricSet', state.MetricSet)
    }
  },
  SET_METRICSET (state, payload) {
    if (typeof payload !== 'undefined') {
      Vue.set(state.MetricSet, payload.MetricSetID, payload)
      localForage.setItem('Stats_MetricSet', state.MetricSet)
    }
  },
  SET_METRICSET_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.MetricSet, element.MetricSetID, element)
      }, this)
      _.each(state.MetricSet, (item, idx) => {
        if (item.MetricSetID >= 1073741824 || item.MetricSetID === null) {
          let extant = _.find(state.MetricSet, extItem => {
            return extItem.ID === item.ID && extItem.MetricSetID !== item.MetricSetID
          })
          if (typeof extant !== 'undefined') {
            if (item.UpdatedAt >= extant.UpdatedAt) {
              let extId = +extant.MetricSetID
              let newVal = {...extant, ...item}
              newVal.MetricSetID = extId
              Vue.set(state.MetricSet, newVal.MetricSetID, newVal)
              Vue.delete(state.MetricSet, item.MetricSetID)
            } else {
              Vue.delete(state.MetricSet, item.MetricSetID)
            }
          }
        }
      })

      localForage.setItem('Stats_MetricSet', state.MetricSet)
    }
  },
  SET_METRICSETMETRICDETAIL_PROPERTIES (state, payload) {
    if (typeof payload !== 'undefined') {
      Vue.set(state.MetricSetMetricDetail, payload.MetricSetMetricDetailID, {...state.MetricSetMetricDetail[payload.MetricSetMetricDetailID], ...payload})
      localForage.setItem('Stats_MetricSetMetricDetail', state.MetricSetMetricDetail)
    }
  },
  SET_METRICSETMETRICDETAIL (state, payload) {
    if (typeof payload !== 'undefined') {
      Vue.set(state.MetricSetMetricDetail, payload.MetricSetMetricDetailID, payload)
      localForage.setItem('Stats_MetricSetMetricDetail', state.MetricSetMetricDetail)
    }
  },
  SET_METRICSETMETRICDETAIL_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.MetricSetMetricDetail, element.MetricSetMetricDetailID, element)
      }, this)
      _.each(state.MetricSetMetricDetail, (item, idx) => {
        if (item.MetricSetMetricDetailID >= 1073741824 || item.MetricSetMetricDetailID === null) {
          let extant = _.find(state.MetricSetMetricDetail, extItem => {
            return extItem.ID === item.ID && extItem.MetricSetMetricDetailID !== item.MetricSetMetricDetailID
          })
          if (typeof extant !== 'undefined') {
            if (item.UpdatedAt >= extant.UpdatedAt) {
              let extId = +extant.MetricSetMetricDetailID
              let newVal = {...extant, ...item}
              newVal.MetricSetMetricDetailID = extId
              Vue.set(state.MetricSetMetricDetail, newVal.MetricSetMetricDetailID, newVal)
              Vue.delete(state.MetricSetMetricDetail, item.MetricSetMetricDetailID)
            } else {
              Vue.delete(state.MetricSetMetricDetail, item.MetricSetMetricDetailID)
            }
          }
        }
      })

      localForage.setItem('Stats_MetricSetMetricDetail', state.MetricSetMetricDetail)
    }
  },
  SET_METRICVALUE_PROPERTIES (state, payload) {
    if (typeof payload !== 'undefined') {
      Vue.set(state.MetricValue, payload.MetricValueID, {...state.MetricValue[payload.MetricValueID], ...payload})
      localForage.setItem('Stats_MetricValue', state.MetricValue)
    }
  },
  SET_METRICVALUE (state, payload) {
    if (typeof payload !== 'undefined') {
      Vue.set(state.MetricValue, payload.MetricValueID, payload)
      localForage.setItem('Stats_MetricValue', state.MetricValue)
    }
  },
  SET_METRICVALUE_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.MetricValue, element.MetricValueID, element)
      }, this)
      _.each(state.MetricValue, (item, idx) => {
        if (item.MetricValueID >= 1073741824 || item.MetricValueID === null) {
          let extant = _.find(state.MetricValue, extItem => {
            return extItem.ID === item.ID && extItem.MetricValueID !== item.MetricValueID
          })
          if (typeof extant !== 'undefined') {
            if (item.UpdatedAt >= extant.UpdatedAt) {
              let extId = +extant.MetricValueID
              let newVal = {...extant, ...item}
              newVal.MetricValueID = extId
              Vue.set(state.MetricValue, newVal.MetricValueID, newVal)
              Vue.delete(state.MetricValue, item.MetricValueID)
            } else {
              Vue.delete(state.MetricValue, item.MetricValueID)
            }
          }
        }
      })

      localForage.setItem('Stats_MetricValue', state.MetricValue)
    }
  },
  SET_PERSON_PROPERTIES (state, payload) {
    if (typeof payload !== 'undefined') {
      Vue.set(state.Person, payload.PersonID, {...state.Person[payload.PersonID], ...payload})
      localForage.setItem('Stats_Person', state.Person)
    }
  },
  SET_PERSON (state, payload) {
    if (typeof payload !== 'undefined') {
      Vue.set(state.Person, payload.PersonID, payload)
      localForage.setItem('Stats_Person', state.Person)
    }
  },
  SET_PERSON_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.Person, element.PersonID, element)
      }, this)
      _.each(state.Person, (item, idx) => {
        if (item.PersonID >= 1073741824 || item.PersonID === null) {
          let extant = _.find(state.Person, extItem => {
            return extItem.ID === item.ID && extItem.PersonID !== item.PersonID
          })
          if (typeof extant !== 'undefined') {
            if (item.UpdatedAt >= extant.UpdatedAt) {
              let extId = +extant.PersonID
              let newVal = {...extant, ...item}
              newVal.PersonID = extId
              Vue.set(state.Person, newVal.PersonID, newVal)
              Vue.delete(state.Person, item.PersonID)
            } else {
              Vue.delete(state.Person, item.PersonID)
            }
          }
        }
      })

      localForage.setItem('Stats_Person', state.Person)
    }
  },
  SET_SKINFOLDMEASUREMENT_PROPERTIES (state, payload) {
    if (typeof payload !== 'undefined') {
      Vue.set(state.SkinfoldMeasurement, payload.SkinfoldMeasurementID, {...state.SkinfoldMeasurement[payload.SkinfoldMeasurementID], ...payload})
      localForage.setItem('Stats_SkinfoldMeasurement', state.SkinfoldMeasurement)
    }
  },
  SET_SKINFOLDMEASUREMENT (state, payload) {
    if (typeof payload !== 'undefined') {
      Vue.set(state.SkinfoldMeasurement, payload.SkinfoldMeasurementID, payload)
      localForage.setItem('Stats_SkinfoldMeasurement', state.SkinfoldMeasurement)
    }
  },
  SET_SKINFOLDMEASUREMENT_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.SkinfoldMeasurement, element.SkinfoldMeasurementID, element)
      }, this)
      _.each(state.SkinfoldMeasurement, (item, idx) => {
        if (item.SkinfoldMeasurementID >= 1073741824 || item.SkinfoldMeasurementID === null) {
          let extant = _.find(state.SkinfoldMeasurement, extItem => {
            return extItem.ID === item.ID && extItem.SkinfoldMeasurementID !== item.SkinfoldMeasurementID
          })
          if (typeof extant !== 'undefined') {
            if (item.UpdatedAt >= extant.UpdatedAt) {
              let extId = +extant.SkinfoldMeasurementID
              let newVal = {...extant, ...item}
              newVal.SkinfoldMeasurementID = extId
              Vue.set(state.SkinfoldMeasurement, newVal.SkinfoldMeasurementID, newVal)
              Vue.delete(state.SkinfoldMeasurement, item.SkinfoldMeasurementID)
            } else {
              Vue.delete(state.SkinfoldMeasurement, item.SkinfoldMeasurementID)
            }
          }
        }
      })

      localForage.setItem('Stats_SkinfoldMeasurement', state.SkinfoldMeasurement)
    }
  },
  SET_TAPEMEASUREMENT_PROPERTIES (state, payload) {
    if (typeof payload !== 'undefined') {
      Vue.set(state.TapeMeasurement, payload.TapeMeasurementID, {...state.TapeMeasurement[payload.TapeMeasurementID], ...payload})
      localForage.setItem('Stats_TapeMeasurement', state.TapeMeasurement)
    }
  },
  SET_TAPEMEASUREMENT (state, payload) {
    if (typeof payload !== 'undefined') {
      Vue.set(state.TapeMeasurement, payload.TapeMeasurementID, payload)
      localForage.setItem('Stats_TapeMeasurement', state.TapeMeasurement)
    }
  },
  SET_TAPEMEASUREMENT_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.TapeMeasurement, element.TapeMeasurementID, element)
      }, this)
      _.each(state.TapeMeasurement, (item, idx) => {
        if (item.TapeMeasurementID >= 1073741824 || item.TapeMeasurementID === null) {
          let extant = _.find(state.TapeMeasurement, extItem => {
            return extItem.ID === item.ID && extItem.TapeMeasurementID !== item.TapeMeasurementID
          })
          if (typeof extant !== 'undefined') {
            if (item.UpdatedAt >= extant.UpdatedAt) {
              let extId = +extant.TapeMeasurementID
              let newVal = {...extant, ...item}
              newVal.TapeMeasurementID = extId
              Vue.set(state.TapeMeasurement, newVal.TapeMeasurementID, newVal)
              Vue.delete(state.TapeMeasurement, item.TapeMeasurementID)
            } else {
              Vue.delete(state.TapeMeasurement, item.TapeMeasurementID)
            }
          }
        }
      })

      localForage.setItem('Stats_TapeMeasurement', state.TapeMeasurement)
    }
  },
  SET_WEIGHTMEASUREMENT_PROPERTIES (state, payload) {
    if (typeof payload !== 'undefined') {
      Vue.set(state.WeightMeasurement, payload.WeightMeasurementID, {...state.WeightMeasurement[payload.WeightMeasurementID], ...payload})
      localForage.setItem('Stats_WeightMeasurement', state.WeightMeasurement)
    }
  },
  SET_WEIGHTMEASUREMENT (state, payload) {
    if (typeof payload !== 'undefined') {
      Vue.set(state.WeightMeasurement, payload.WeightMeasurementID, payload)
      localForage.setItem('Stats_WeightMeasurement', state.WeightMeasurement)
    }
  },
  SET_WEIGHTMEASUREMENT_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.WeightMeasurement, element.WeightMeasurementID, element)
      }, this)
      _.each(state.WeightMeasurement, (item, idx) => {
        if (item.WeightMeasurementID >= 1073741824 || item.WeightMeasurementID === null) {
          let extant = _.find(state.WeightMeasurement, extItem => {
            return extItem.ID === item.ID && extItem.WeightMeasurementID !== item.WeightMeasurementID
          })
          if (typeof extant !== 'undefined') {
            if (item.UpdatedAt >= extant.UpdatedAt) {
              let extId = +extant.WeightMeasurementID
              let newVal = {...extant, ...item}
              newVal.WeightMeasurementID = extId
              Vue.set(state.WeightMeasurement, newVal.WeightMeasurementID, newVal)
              Vue.delete(state.WeightMeasurement, item.WeightMeasurementID)
            } else {
              Vue.delete(state.WeightMeasurement, item.WeightMeasurementID)
            }
          }
        }
      })

      localForage.setItem('Stats_WeightMeasurement', state.WeightMeasurement)
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
