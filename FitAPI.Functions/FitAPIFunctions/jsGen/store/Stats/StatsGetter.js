import {updateField} from 'vuex-map-fields'
const getters = {
Get_Metric_ByRouteID: function (state, getters, rootState) {
    return state.Metric[+rootState.route.params.Metricid]
  },
  Get_Metric_ByMetricID: function (state) {
    return function (MetricID) {
      return state.Metric[MetricID]
    }
  },
  Get_MetricItem: function () {
    return state.MetricItem
  },
  Get_Metric_All: function () {
    return state.Metric
  },
  Get_Metric_Select: function () {
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
  Get_Metric_SelectObject: function () {
    return _.mapObject(
      _.indexBy(state.Metric, 'MetricID'),
      item => ({
        label: item.Name,
        value: item.MetricID
      })
    )
  },
  Get_Metric_List: function () {
    return _.sortBy(state.Metric, 'Name')
  },
  Get_Metric_Item: function () {
    return state.MetricItem
  },
Get_Person_ByRouteID: function (state, getters, rootState) {
    return state.Person[+rootState.route.params.Personid]
  },
  Get_Person_ByPersonID: function (state) {
    return function (PersonID) {
      return state.Person[PersonID]
    }
  },
  Get_PersonItem: function () {
    return state.PersonItem
  },
  Get_Person_All: function () {
    return state.Person
  },
  Get_Person_Select: function () {
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
  Get_Person_SelectObject: function () {
    return _.mapObject(
      _.indexBy(state.Person, 'PersonID'),
      item => ({
        label: item.Name,
        value: item.PersonID
      })
    )
  },
  Get_Person_List: function () {
    return _.sortBy(state.Person, 'Name')
  },
  Get_Person_Item: function () {
    return state.PersonItem
  },
Get_SkinfoldMeasurement_ByRouteID: function (state, getters, rootState) {
    return state.SkinfoldMeasurement[+rootState.route.params.SkinfoldMeasurementid]
  },
  Get_SkinfoldMeasurement_BySkinfoldMeasurementID: function (state) {
    return function (SkinfoldMeasurementID) {
      return state.SkinfoldMeasurement[SkinfoldMeasurementID]
    }
  },
  Get_SkinfoldMeasurementItem: function () {
    return state.SkinfoldMeasurementItem
  },
  Get_SkinfoldMeasurement_All: function () {
    return state.SkinfoldMeasurement
  },
  Get_SkinfoldMeasurement_Select: function () {
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
  Get_SkinfoldMeasurement_SelectObject: function () {
    return _.mapObject(
      _.indexBy(state.SkinfoldMeasurement, 'SkinfoldMeasurementID'),
      item => ({
        label: item.Name,
        value: item.SkinfoldMeasurementID
      })
    )
  },
  Get_SkinfoldMeasurement_List: function () {
    return _.sortBy(state.SkinfoldMeasurement, 'Name')
  },
  Get_SkinfoldMeasurement_Item: function () {
    return state.SkinfoldMeasurementItem
  },
Get_TapeMeasurement_ByRouteID: function (state, getters, rootState) {
    return state.TapeMeasurement[+rootState.route.params.TapeMeasurementid]
  },
  Get_TapeMeasurement_ByTapeMeasurementID: function (state) {
    return function (TapeMeasurementID) {
      return state.TapeMeasurement[TapeMeasurementID]
    }
  },
  Get_TapeMeasurementItem: function () {
    return state.TapeMeasurementItem
  },
  Get_TapeMeasurement_All: function () {
    return state.TapeMeasurement
  },
  Get_TapeMeasurement_Select: function () {
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
  Get_TapeMeasurement_SelectObject: function () {
    return _.mapObject(
      _.indexBy(state.TapeMeasurement, 'TapeMeasurementID'),
      item => ({
        label: item.Name,
        value: item.TapeMeasurementID
      })
    )
  },
  Get_TapeMeasurement_List: function () {
    return _.sortBy(state.TapeMeasurement, 'Name')
  },
  Get_TapeMeasurement_Item: function () {
    return state.TapeMeasurementItem
  },
Get_WeightMeasurement_ByRouteID: function (state, getters, rootState) {
    return state.WeightMeasurement[+rootState.route.params.WeightMeasurementid]
  },
  Get_WeightMeasurement_ByWeightMeasurementID: function (state) {
    return function (WeightMeasurementID) {
      return state.WeightMeasurement[WeightMeasurementID]
    }
  },
  Get_WeightMeasurementItem: function () {
    return state.WeightMeasurementItem
  },
  Get_WeightMeasurement_All: function () {
    return state.WeightMeasurement
  },
  Get_WeightMeasurement_Select: function () {
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
  Get_WeightMeasurement_SelectObject: function () {
    return _.mapObject(
      _.indexBy(state.WeightMeasurement, 'WeightMeasurementID'),
      item => ({
        label: item.Name,
        value: item.WeightMeasurementID
      })
    )
  },
  Get_WeightMeasurement_List: function () {
    return _.sortBy(state.WeightMeasurement, 'Name')
  },
  Get_WeightMeasurement_Item: function () {
    return state.WeightMeasurementItem
  },
  getField
}

export default getters
