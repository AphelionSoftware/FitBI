import {getField} from 'vuex-map-fields'
import _ from 'underscore'
const getters = {
  Get_Active_ByRouteID: function (state, getters, rootState) {
    return state.Active[+rootState.route.params.Activeid]
  },
  Get_ActiveItem: function (state) {
    return state.ActiveItem
  },
  Get_Active_All: function (state) {
    return state.Active
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
  Get_Active_Item: function (state) {
    return state.ActiveItem
  },
  Get_BodyPart_ByRouteID: function (state, getters, rootState) {
    return state.BodyPart[+rootState.route.params.BodyPartid]
  },
  Get_BodyPartItem: function (state) {
    return state.BodyPartItem
  },
  Get_BodyPart_All: function (state) {
    return state.BodyPart
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
  Get_BodyPart_Item: function (state) {
    return state.BodyPartItem
  },
  Get_BodyPartType_ByRouteID: function (state, getters, rootState) {
    return state.BodyPartType[+rootState.route.params.BodyPartTypeid]
  },
  Get_BodyPartTypeItem: function (state) {
    return state.BodyPartTypeItem
  },
  Get_BodyPartType_All: function (state) {
    return state.BodyPartType
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
  Get_BodyPartType_Item: function (state) {
    return state.BodyPartTypeItem
  },
  Get_Dates_ByRouteID: function (state, getters, rootState) {
    return state.Dates[+rootState.route.params.Datesid]
  },
  Get_DatesItem: function (state) {
    return state.DatesItem
  },
  Get_Dates_All: function (state) {
    return state.Dates
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
  Get_Dates_Item: function (state) {
    return state.DatesItem
  },
  Get_MeasurementType_ByRouteID: function (state, getters, rootState) {
    return state.MeasurementType[+rootState.route.params.MeasurementTypeid]
  },
  Get_MeasurementTypeItem: function (state) {
    return state.MeasurementTypeItem
  },
  Get_MeasurementType_All: function (state) {
    return state.MeasurementType
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
  Get_MeasurementType_Item: function (state) {
    return state.MeasurementTypeItem
  },
  Get_MeasurementTypeCategory_ByRouteID: function (state, getters, rootState) {
    return state.MeasurementTypeCategory[+rootState.route.params.MeasurementTypeCategoryid]
  },
  Get_MeasurementTypeCategoryItem: function (state) {
    return state.MeasurementTypeCategoryItem
  },
  Get_MeasurementTypeCategory_All: function (state) {
    return state.MeasurementTypeCategory
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
  Get_MeasurementTypeCategory_Item: function (state) {
    return state.MeasurementTypeCategoryItem
  },
  Get_Time_ByRouteID: function (state, getters, rootState) {
    return state.Time[+rootState.route.params.Timeid]
  },
  Get_TimeItem: function (state) {
    return state.TimeItem
  },
  Get_Time_All: function (state) {
    return state.Time
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
  Get_Time_Item: function (state) {
    return state.TimeItem
  },
  Get_Unit_ByRouteID: function (state, getters, rootState) {
    return state.Unit[+rootState.route.params.Unitid]
  },
  Get_UnitItem: function (state) {
    return state.UnitItem
  },
  Get_Unit_All: function (state) {
    return state.Unit
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
  Get_Unit_Item: function (state) {
    return state.UnitItem
  },
  Get_UnitType_ByRouteID: function (state, getters, rootState) {
    return state.UnitType[+rootState.route.params.UnitTypeid]
  },
  Get_UnitTypeItem: function (state) {
    return state.UnitTypeItem
  },
  Get_UnitType_All: function (state) {
    return state.UnitType
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
  Get_UnitType_Item: function (state) {
    return state.UnitTypeItem
  },
  getField
}

export default getters
