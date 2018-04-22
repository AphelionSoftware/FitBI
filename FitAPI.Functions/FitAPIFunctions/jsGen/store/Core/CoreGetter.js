import {updateField} from 'vuex-map-fields'
const getters = {
Get_Active_ByRouteID: function (state, getters, rootState) {
    return state.Active[+rootState.route.params.Activeid]
  },
  Get_Active_ByActiveID: function (state) {
    return function (ActiveID) {
      return state.Active[ActiveID]
    }
  },
  Get_ActiveItem: function () {
    return state.ActiveItem
  },
  Get_Active_All: function () {
    return state.Active
  },
  Get_Active_Select: function () {
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
  Get_Active_SelectObject: function () {
    return _.mapObject(
      _.indexBy(state.Active, 'ActiveID'),
      item => ({
        label: item.Name,
        value: item.ActiveID
      })
    )
  },
  Get_Active_List: function () {
    return _.sortBy(state.Active, 'Name')
  },
  Get_Active_Item: function () {
    return state.ActiveItem
  },
Get_BodyPart_ByRouteID: function (state, getters, rootState) {
    return state.BodyPart[+rootState.route.params.BodyPartid]
  },
  Get_BodyPart_ByBodyPartID: function (state) {
    return function (BodyPartID) {
      return state.BodyPart[BodyPartID]
    }
  },
  Get_BodyPartItem: function () {
    return state.BodyPartItem
  },
  Get_BodyPart_All: function () {
    return state.BodyPart
  },
  Get_BodyPart_Select: function () {
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
  Get_BodyPart_SelectObject: function () {
    return _.mapObject(
      _.indexBy(state.BodyPart, 'BodyPartID'),
      item => ({
        label: item.Name,
        value: item.BodyPartID
      })
    )
  },
  Get_BodyPart_List: function () {
    return _.sortBy(state.BodyPart, 'Name')
  },
  Get_BodyPart_Item: function () {
    return state.BodyPartItem
  },
Get_BodyPartType_ByRouteID: function (state, getters, rootState) {
    return state.BodyPartType[+rootState.route.params.BodyPartTypeid]
  },
  Get_BodyPartType_ByBodyPartTypeID: function (state) {
    return function (BodyPartTypeID) {
      return state.BodyPartType[BodyPartTypeID]
    }
  },
  Get_BodyPartTypeItem: function () {
    return state.BodyPartTypeItem
  },
  Get_BodyPartType_All: function () {
    return state.BodyPartType
  },
  Get_BodyPartType_Select: function () {
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
  Get_BodyPartType_SelectObject: function () {
    return _.mapObject(
      _.indexBy(state.BodyPartType, 'BodyPartTypeID'),
      item => ({
        label: item.Name,
        value: item.BodyPartTypeID
      })
    )
  },
  Get_BodyPartType_List: function () {
    return _.sortBy(state.BodyPartType, 'Name')
  },
  Get_BodyPartType_Item: function () {
    return state.BodyPartTypeItem
  },
Get_Dates_ByRouteID: function (state, getters, rootState) {
    return state.Dates[+rootState.route.params.Datesid]
  },
  Get_Dates_ByDatesID: function (state) {
    return function (DatesID) {
      return state.Dates[DatesID]
    }
  },
  Get_DatesItem: function () {
    return state.DatesItem
  },
  Get_Dates_All: function () {
    return state.Dates
  },
  Get_Dates_Select: function () {
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
  Get_Dates_SelectObject: function () {
    return _.mapObject(
      _.indexBy(state.Dates, 'DatesID'),
      item => ({
        label: item.Name,
        value: item.DatesID
      })
    )
  },
  Get_Dates_List: function () {
    return _.sortBy(state.Dates, 'Name')
  },
  Get_Dates_Item: function () {
    return state.DatesItem
  },
Get_MeasurementType_ByRouteID: function (state, getters, rootState) {
    return state.MeasurementType[+rootState.route.params.MeasurementTypeid]
  },
  Get_MeasurementType_ByMeasurementTypeID: function (state) {
    return function (MeasurementTypeID) {
      return state.MeasurementType[MeasurementTypeID]
    }
  },
  Get_MeasurementTypeItem: function () {
    return state.MeasurementTypeItem
  },
  Get_MeasurementType_All: function () {
    return state.MeasurementType
  },
  Get_MeasurementType_Select: function () {
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
  Get_MeasurementType_SelectObject: function () {
    return _.mapObject(
      _.indexBy(state.MeasurementType, 'MeasurementTypeID'),
      item => ({
        label: item.Name,
        value: item.MeasurementTypeID
      })
    )
  },
  Get_MeasurementType_List: function () {
    return _.sortBy(state.MeasurementType, 'Name')
  },
  Get_MeasurementType_Item: function () {
    return state.MeasurementTypeItem
  },
Get_MeasurementTypeCategory_ByRouteID: function (state, getters, rootState) {
    return state.MeasurementTypeCategory[+rootState.route.params.MeasurementTypeCategoryid]
  },
  Get_MeasurementTypeCategory_ByMeasurementTypeCategoryID: function (state) {
    return function (MeasurementTypeCategoryID) {
      return state.MeasurementTypeCategory[MeasurementTypeCategoryID]
    }
  },
  Get_MeasurementTypeCategoryItem: function () {
    return state.MeasurementTypeCategoryItem
  },
  Get_MeasurementTypeCategory_All: function () {
    return state.MeasurementTypeCategory
  },
  Get_MeasurementTypeCategory_Select: function () {
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
  Get_MeasurementTypeCategory_SelectObject: function () {
    return _.mapObject(
      _.indexBy(state.MeasurementTypeCategory, 'MeasurementTypeCategoryID'),
      item => ({
        label: item.Name,
        value: item.MeasurementTypeCategoryID
      })
    )
  },
  Get_MeasurementTypeCategory_List: function () {
    return _.sortBy(state.MeasurementTypeCategory, 'Name')
  },
  Get_MeasurementTypeCategory_Item: function () {
    return state.MeasurementTypeCategoryItem
  },
Get_Time_ByRouteID: function (state, getters, rootState) {
    return state.Time[+rootState.route.params.Timeid]
  },
  Get_Time_ByTimeID: function (state) {
    return function (TimeID) {
      return state.Time[TimeID]
    }
  },
  Get_TimeItem: function () {
    return state.TimeItem
  },
  Get_Time_All: function () {
    return state.Time
  },
  Get_Time_Select: function () {
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
  Get_Time_SelectObject: function () {
    return _.mapObject(
      _.indexBy(state.Time, 'TimeID'),
      item => ({
        label: item.Name,
        value: item.TimeID
      })
    )
  },
  Get_Time_List: function () {
    return _.sortBy(state.Time, 'Name')
  },
  Get_Time_Item: function () {
    return state.TimeItem
  },
Get_Unit_ByRouteID: function (state, getters, rootState) {
    return state.Unit[+rootState.route.params.Unitid]
  },
  Get_Unit_ByUnitID: function (state) {
    return function (UnitID) {
      return state.Unit[UnitID]
    }
  },
  Get_UnitItem: function () {
    return state.UnitItem
  },
  Get_Unit_All: function () {
    return state.Unit
  },
  Get_Unit_Select: function () {
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
  Get_Unit_SelectObject: function () {
    return _.mapObject(
      _.indexBy(state.Unit, 'UnitID'),
      item => ({
        label: item.Name,
        value: item.UnitID
      })
    )
  },
  Get_Unit_List: function () {
    return _.sortBy(state.Unit, 'Name')
  },
  Get_Unit_Item: function () {
    return state.UnitItem
  },
Get_UnitType_ByRouteID: function (state, getters, rootState) {
    return state.UnitType[+rootState.route.params.UnitTypeid]
  },
  Get_UnitType_ByUnitTypeID: function (state) {
    return function (UnitTypeID) {
      return state.UnitType[UnitTypeID]
    }
  },
  Get_UnitTypeItem: function () {
    return state.UnitTypeItem
  },
  Get_UnitType_All: function () {
    return state.UnitType
  },
  Get_UnitType_Select: function () {
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
  Get_UnitType_SelectObject: function () {
    return _.mapObject(
      _.indexBy(state.UnitType, 'UnitTypeID'),
      item => ({
        label: item.Name,
        value: item.UnitTypeID
      })
    )
  },
  Get_UnitType_List: function () {
    return _.sortBy(state.UnitType, 'Name')
  },
  Get_UnitType_Item: function () {
    return state.UnitTypeItem
  },
  getField
}

export default getters
