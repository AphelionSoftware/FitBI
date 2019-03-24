import {getField} from 'vuex-map-fields'
import _ from 'underscore'
const getters = {
  Get_DailyMeasurement_ByRouteID: function (state, getters, rootState) {
    return state.DailyMeasurement[+rootState.route.params.DailyMeasurementid]
  },
  Get_DailyMeasurement_Select: function (state) {
    return _.chain(state.DailyMeasurement)
      .map(item => {
        return {
          label: item.Name,
          value: item.MeasurementDateID
        }
      })
      .sortBy('Name')
      .value()
  },
  Get_DailyMeasurement_SelectObject: function (state) {
    return _.mapObject(
      _.indexBy(state.DailyMeasurement, 'MeasurementDateID'),
      item => ({
        label: item.Name,
        value: item.MeasurementDateID
      })
    )
  },
  Get_DailyMeasurement_List: function (state) {
    return _.sortBy(state.DailyMeasurement, 'Name')
  },
  Get_Metric_ByRouteID: function (state, getters, rootState) {
    return state.Metric[+rootState.route.params.Metricid]
  },
  Get_Metric_Select: function (state) {
    return _.chain(state.Metric)
      .map(item => {
        return {
          label: item.Name,
          value: item.MetricID
        }
      })
      .sortBy('Name')
      .value()
  },
  Get_Metric_SelectObject: function (state) {
    return _.mapObject(
      _.indexBy(state.Metric, 'MetricID'),
      item => ({
        label: item.Name,
        value: item.MetricID
      })
    )
  },
  Get_Metric_List: function (state) {
    return _.sortBy(state.Metric, 'Name')
  },
  Get_MetricSet_ByRouteID: function (state, getters, rootState) {
    return state.MetricSet[+rootState.route.params.MetricSetid]
  },
  Get_MetricSet_Select: function (state) {
    return _.chain(state.MetricSet)
      .map(item => {
        return {
          label: item.Name,
          value: item.MetricSetID
        }
      })
      .sortBy('Name')
      .value()
  },
  Get_MetricSet_SelectObject: function (state) {
    return _.mapObject(
      _.indexBy(state.MetricSet, 'MetricSetID'),
      item => ({
        label: item.Name,
        value: item.MetricSetID
      })
    )
  },
  Get_MetricSet_List: function (state) {
    return _.sortBy(state.MetricSet, 'Name')
  },
  Get_MetricSetMetricDetail_ByRouteID: function (state, getters, rootState) {
    return state.MetricSetMetricDetail[+rootState.route.params.MetricSetMetricDetailid]
  },
  Get_MetricSetMetricDetail_Select: function (state) {
    return _.chain(state.MetricSetMetricDetail)
      .map(item => {
        return {
          label: item.Name,
          value: item.MetricSetMetricDetailID
        }
      })
      .sortBy('Name')
      .value()
  },
  Get_MetricSetMetricDetail_SelectObject: function (state) {
    return _.mapObject(
      _.indexBy(state.MetricSetMetricDetail, 'MetricSetMetricDetailID'),
      item => ({
        label: item.Name,
        value: item.MetricSetMetricDetailID
      })
    )
  },
  Get_MetricSetMetricDetail_List: function (state) {
    return _.sortBy(state.MetricSetMetricDetail, 'Name')
  },
  Get_MetricValue_ByRouteID: function (state, getters, rootState) {
    return state.MetricValue[+rootState.route.params.MetricValueid]
  },
  Get_MetricValue_Select: function (state) {
    return _.chain(state.MetricValue)
      .map(item => {
        return {
          label: item.Name,
          value: item.MetricValueID
        }
      })
      .sortBy('Name')
      .value()
  },
  Get_MetricValue_SelectObject: function (state) {
    return _.mapObject(
      _.indexBy(state.MetricValue, 'MetricValueID'),
      item => ({
        label: item.Name,
        value: item.MetricValueID
      })
    )
  },
  Get_MetricValue_List: function (state) {
    return _.sortBy(state.MetricValue, 'Name')
  },
  Get_Person_ByRouteID: function (state, getters, rootState) {
    return state.Person[+rootState.route.params.Personid]
  },
  Get_Person_Select: function (state) {
    return _.chain(state.Person)
      .map(item => {
        return {
          label: item.Name,
          value: item.PersonID
        }
      })
      .sortBy('Name')
      .value()
  },
  Get_Person_SelectObject: function (state) {
    return _.mapObject(
      _.indexBy(state.Person, 'PersonID'),
      item => ({
        label: item.Name,
        value: item.PersonID
      })
    )
  },
  Get_Person_List: function (state) {
    return _.sortBy(state.Person, 'Name')
  },
  Get_SkinfoldMeasurement_ByRouteID: function (state, getters, rootState) {
    return state.SkinfoldMeasurement[+rootState.route.params.SkinfoldMeasurementid]
  },
  Get_SkinfoldMeasurement_Select: function (state) {
    return _.chain(state.SkinfoldMeasurement)
      .map(item => {
        return {
          label: item.Name,
          value: item.SkinfoldMeasurementID
        }
      })
      .sortBy('Name')
      .value()
  },
  Get_SkinfoldMeasurement_SelectObject: function (state) {
    return _.mapObject(
      _.indexBy(state.SkinfoldMeasurement, 'SkinfoldMeasurementID'),
      item => ({
        label: item.Name,
        value: item.SkinfoldMeasurementID
      })
    )
  },
  Get_SkinfoldMeasurement_List: function (state) {
    return _.sortBy(state.SkinfoldMeasurement, 'Name')
  },
  Get_TapeMeasurement_ByRouteID: function (state, getters, rootState) {
    return state.TapeMeasurement[+rootState.route.params.TapeMeasurementid]
  },
  Get_TapeMeasurement_Select: function (state) {
    return _.chain(state.TapeMeasurement)
      .map(item => {
        return {
          label: item.Name,
          value: item.TapeMeasurementID
        }
      })
      .sortBy('Name')
      .value()
  },
  Get_TapeMeasurement_SelectObject: function (state) {
    return _.mapObject(
      _.indexBy(state.TapeMeasurement, 'TapeMeasurementID'),
      item => ({
        label: item.Name,
        value: item.TapeMeasurementID
      })
    )
  },
  Get_TapeMeasurement_List: function (state) {
    return _.sortBy(state.TapeMeasurement, 'Name')
  },
  Get_WeightMeasurement_ByRouteID: function (state, getters, rootState) {
    return state.WeightMeasurement[+rootState.route.params.WeightMeasurementid]
  },
  Get_WeightMeasurement_Select: function (state) {
    return _.chain(state.WeightMeasurement)
      .map(item => {
        return {
          label: item.Name,
          value: item.WeightMeasurementID
        }
      })
      .sortBy('Name')
      .value()
  },
  Get_WeightMeasurement_SelectObject: function (state) {
    return _.mapObject(
      _.indexBy(state.WeightMeasurement, 'WeightMeasurementID'),
      item => ({
        label: item.Name,
        value: item.WeightMeasurementID
      })
    )
  },
  Get_WeightMeasurement_List: function (state) {
    return _.sortBy(state.WeightMeasurement, 'Name')
  },
  Get_Flags: function (state) {
    return state.Flags
  },
  getField
}

export default getters
