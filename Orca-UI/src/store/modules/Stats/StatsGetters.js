import {getField} from 'vuex-map-fields'
import _ from 'underscore'
const getters = {
  Get_Metric_ByRouteID: function (state, getters, rootState) {
    return state.Metric[+rootState.route.params.Metricid]
  },
  Get_MetricItem: function (state) {
    return state.MetricItem
  },
  Get_Metric_All: function (state) {
    return state.Metric
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
  Get_Metric_Item: function (state) {
    return state.MetricItem
  },
  Get_Person_ByRouteID: function (state, getters, rootState) {
    return state.Person[+rootState.route.params.Personid]
  },
  Get_PersonItem: function (state) {
    return state.PersonItem
  },
  Get_Person_All: function (state) {
    return state.Person
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
  Get_Person_Item: function (state) {
    return state.PersonItem
  },
  Get_SkinfoldMeasurement_ByRouteID: function (state, getters, rootState) {
    return state.SkinfoldMeasurement[+rootState.route.params.SkinfoldMeasurementid]
  },
  Get_SkinfoldMeasurementItem: function (state) {
    return state.SkinfoldMeasurementItem
  },
  Get_SkinfoldMeasurement_All: function (state) {
    return state.SkinfoldMeasurement
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
  Get_SkinfoldMeasurement_Item: function (state) {
    return state.SkinfoldMeasurementItem
  },
  Get_TapeMeasurement_ByRouteID: function (state, getters, rootState) {
    return state.TapeMeasurement[+rootState.route.params.TapeMeasurementid]
  },
  Get_TapeMeasurementItem: function (state) {
    return state.TapeMeasurementItem
  },
  Get_TapeMeasurement_All: function (state) {
    return state.TapeMeasurement
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
  Get_TapeMeasurement_Item: function (state) {
    return state.TapeMeasurementItem
  },
  Get_WeightMeasurement_ByRouteID: function (state, getters, rootState) {
    return state.WeightMeasurement[+rootState.route.params.WeightMeasurementid]
  },
  Get_WeightMeasurementItem: function (state) {
    return state.WeightMeasurementItem
  },
  Get_WeightMeasurement_All: function (state) {
    return state.WeightMeasurement
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
  Get_WeightMeasurement_Item: function (state) {
    return state.WeightMeasurementItem
  },
  getField
}

export default getters
