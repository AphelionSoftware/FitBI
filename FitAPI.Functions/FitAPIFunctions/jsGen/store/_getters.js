import {getField} from 'vuex-map-fields'
import _ from 'underscore'
const getters = {
  Get_ColumnChoice_ByRouteID: function (state, getters, rootState) {
    return state.ColumnChoice[+rootState.route.params.ColumnChoiceid]
  },
  Get_ColumnChoice_Select: function (state) {
    return _.chain(state.ColumnChoice)
      .map(item => {
        return {
          label: item.Name,
          value: item.ColumnChoiceID
        }
      })
      .sortBy('Name')
      .value()
  },
  Get_ColumnChoice_SelectObject: function (state) {
    return _.mapObject(
      _.indexBy(state.ColumnChoice, 'ColumnChoiceID'),
      item => ({
        label: item.Name,
        value: item.ColumnChoiceID
      })
    )
  },
  Get_ColumnChoice_List: function (state) {
    return _.sortBy(state.ColumnChoice, 'Name')
  },
  Get_GeneralSettings_ByRouteID: function (state, getters, rootState) {
    return state.GeneralSettings[+rootState.route.params.GeneralSettingsid]
  },
  Get_GeneralSettings_Select: function (state) {
    return _.chain(state.GeneralSettings)
      .map(item => {
        return {
          label: item.Name,
          value: item.GeneralSettingsID
        }
      })
      .sortBy('Name')
      .value()
  },
  Get_GeneralSettings_SelectObject: function (state) {
    return _.mapObject(
      _.indexBy(state.GeneralSettings, 'GeneralSettingsID'),
      item => ({
        label: item.Name,
        value: item.GeneralSettingsID
      })
    )
  },
  Get_GeneralSettings_List: function (state) {
    return _.sortBy(state.GeneralSettings, 'Name')
  },
  Get_StatsChoice_ByRouteID: function (state, getters, rootState) {
    return state.StatsChoice[+rootState.route.params.StatsChoiceid]
  },
  Get_StatsChoice_Select: function (state) {
    return _.chain(state.StatsChoice)
      .map(item => {
        return {
          label: item.Name,
          value: item.StatsChoiceID
        }
      })
      .sortBy('Name')
      .value()
  },
  Get_StatsChoice_SelectObject: function (state) {
    return _.mapObject(
      _.indexBy(state.StatsChoice, 'StatsChoiceID'),
      item => ({
        label: item.Name,
        value: item.StatsChoiceID
      })
    )
  },
  Get_StatsChoice_List: function (state) {
    return _.sortBy(state.StatsChoice, 'Name')
  },
  Get_Flags: function (state) {
    return state.Flags
  },
  getField
}

export default getters
