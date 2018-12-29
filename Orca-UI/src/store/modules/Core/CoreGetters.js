import {getField} from 'vuex-map-fields'
import _ from 'underscore'
const getters = {
  Get_Active_ByRouteID: function (state, getters, rootState) {
    return state.Active[+rootState.route.params.Activeid]
  },
  Get_Active_Select: function (state) {
    return _.chain(state.Active)
      .map(item => {
        return {
          label: item.Name,
          value: item.ActiveID
        }
      })
      .sortBy('Name')
      .value()
  },
  Get_Active_SelectObject: function (state) {
    return _.mapObject(
      _.indexBy(state.Active, 'ActiveID'),
      item => ({
        label: item.Name,
        value: item.ActiveID
      })
    )
  },
  Get_Active_List: function (state) {
    return _.sortBy(state.Active, 'Name')
  },
  Get_BodyPart_ByRouteID: function (state, getters, rootState) {
    return state.BodyPart[+rootState.route.params.BodyPartid]
  },
  Get_BodyPart_Select: function (state) {
    return _.chain(state.BodyPart)
      .map(item => {
        return {
          label: item.Name,
          value: item.BodyPartID
        }
      })
      .sortBy('Name')
      .value()
  },
  Get_BodyPart_SelectObject: function (state) {
    return _.mapObject(
      _.indexBy(state.BodyPart, 'BodyPartID'),
      item => ({
        label: item.Name,
        value: item.BodyPartID
      })
    )
  },
  Get_BodyPart_List: function (state) {
    return _.sortBy(state.BodyPart, 'Name')
  },
  Get_BodyPartType_ByRouteID: function (state, getters, rootState) {
    return state.BodyPartType[+rootState.route.params.BodyPartTypeid]
  },
  Get_BodyPartType_Select: function (state) {
    return _.chain(state.BodyPartType)
      .map(item => {
        return {
          label: item.Name,
          value: item.BodyPartTypeID
        }
      })
      .sortBy('Name')
      .value()
  },
  Get_BodyPartType_SelectObject: function (state) {
    return _.mapObject(
      _.indexBy(state.BodyPartType, 'BodyPartTypeID'),
      item => ({
        label: item.Name,
        value: item.BodyPartTypeID
      })
    )
  },
  Get_BodyPartType_List: function (state) {
    return _.sortBy(state.BodyPartType, 'Name')
  },
  Get_Dates_ByRouteID: function (state, getters, rootState) {
    return state.Dates[+rootState.route.params.Datesid]
  },
  Get_Dates_Select: function (state) {
    return _.chain(state.Dates)
      .map(item => {
        return {
          label: item.Name,
          value: item.DatesID
        }
      })
      .sortBy('Name')
      .value()
  },
  Get_Dates_SelectObject: function (state) {
    return _.mapObject(
      _.indexBy(state.Dates, 'DatesID'),
      item => ({
        label: item.Name,
        value: item.DatesID
      })
    )
  },
  Get_Dates_List: function (state) {
    return _.sortBy(state.Dates, 'Name')
  },
  Get_MeasurementType_ByRouteID: function (state, getters, rootState) {
    return state.MeasurementType[+rootState.route.params.MeasurementTypeid]
  },
  Get_MeasurementType_Select: function (state) {
    return _.chain(state.MeasurementType)
      .map(item => {
        return {
          label: item.Name,
          value: item.MeasurementTypeID
        }
      })
      .sortBy('Name')
      .value()
  },
  Get_MeasurementType_SelectObject: function (state) {
    return _.mapObject(
      _.indexBy(state.MeasurementType, 'MeasurementTypeID'),
      item => ({
        label: item.Name,
        value: item.MeasurementTypeID
      })
    )
  },
  Get_MeasurementType_List: function (state) {
    return _.sortBy(state.MeasurementType, 'Name')
  },
  Get_MeasurementTypeCategory_ByRouteID: function (state, getters, rootState) {
    return state.MeasurementTypeCategory[+rootState.route.params.MeasurementTypeCategoryid]
  },
  Get_MeasurementTypeCategory_Select: function (state) {
    return _.chain(state.MeasurementTypeCategory)
      .map(item => {
        return {
          label: item.Name,
          value: item.MeasurementTypeCategoryID
        }
      })
      .sortBy('Name')
      .value()
  },
  Get_MeasurementTypeCategory_SelectObject: function (state) {
    return _.mapObject(
      _.indexBy(state.MeasurementTypeCategory, 'MeasurementTypeCategoryID'),
      item => ({
        label: item.Name,
        value: item.MeasurementTypeCategoryID
      })
    )
  },
  Get_MeasurementTypeCategory_List: function (state) {
    return _.sortBy(state.MeasurementTypeCategory, 'Name')
  },
  Get_StatType_ByRouteID: function (state, getters, rootState) {
    return state.StatType[+rootState.route.params.StatTypeid]
  },
  Get_StatType_Select: function (state) {
    return _.chain(state.StatType)
      .map(item => {
        return {
          label: item.Name,
          value: item.StatTypeID
        }
      })
      .sortBy('Name')
      .value()
  },
  Get_StatType_SelectObject: function (state) {
    return _.mapObject(
      _.indexBy(state.StatType, 'StatTypeID'),
      item => ({
        label: item.Name,
        value: item.StatTypeID
      })
    )
  },
  Get_StatType_List: function (state) {
    return _.sortBy(state.StatType, 'Name')
  },
  Get_Time_ByRouteID: function (state, getters, rootState) {
    return state.Time[+rootState.route.params.Timeid]
  },
  Get_Time_Select: function (state) {
    return _.chain(state.Time)
      .map(item => {
        return {
          label: item.Name,
          value: item.TimeID
        }
      })
      .sortBy('Name')
      .value()
  },
  Get_Time_SelectObject: function (state) {
    return _.mapObject(
      _.indexBy(state.Time, 'TimeID'),
      item => ({
        label: item.Name,
        value: item.TimeID
      })
    )
  },
  Get_Time_List: function (state) {
    return _.sortBy(state.Time, 'Name')
  },
  Get_Unit_ByRouteID: function (state, getters, rootState) {
    return state.Unit[+rootState.route.params.Unitid]
  },
  Get_Unit_Select: function (state) {
    return _.chain(state.Unit)
      .map(item => {
        return {
          label: item.Name,
          value: item.UnitID
        }
      })
      .sortBy('Name')
      .value()
  },
  Get_Unit_SelectObject: function (state) {
    return _.mapObject(
      _.indexBy(state.Unit, 'UnitID'),
      item => ({
        label: item.Name,
        value: item.UnitID
      })
    )
  },
  Get_Unit_List: function (state) {
    return _.sortBy(state.Unit, 'Name')
  },
  Get_UnitType_ByRouteID: function (state, getters, rootState) {
    return state.UnitType[+rootState.route.params.UnitTypeid]
  },
  Get_UnitType_Select: function (state) {
    return _.chain(state.UnitType)
      .map(item => {
        return {
          label: item.Name,
          value: item.UnitTypeID
        }
      })
      .sortBy('Name')
      .value()
  },
  Get_UnitType_SelectObject: function (state) {
    return _.mapObject(
      _.indexBy(state.UnitType, 'UnitTypeID'),
      item => ({
        label: item.Name,
        value: item.UnitTypeID
      })
    )
  },
  Get_UnitType_List: function (state) {
    return _.sortBy(state.UnitType, 'Name')
  },
  Get_Flags: function (state) {
    return state.Flags
  },
  getField
}

export default getters
