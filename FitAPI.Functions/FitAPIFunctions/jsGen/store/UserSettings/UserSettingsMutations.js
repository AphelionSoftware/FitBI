import {updateField} from 'vuex-map-fields'
import Vue from 'vue'
import localForage from 'localforage'
import _ from 'underscore'
const mutations = {
  SET_COLUMNCHOICE_PROPERTIES (state, payload) {
    if (typeof payload !== 'undefined') {
      Vue.set(state.ColumnChoice, payload.ColumnChoiceID, {...state.ColumnChoice[payload.ColumnChoiceID], ...payload})
      localForage.setItem('UserSettings_ColumnChoice', state.ColumnChoice)
    }
  },
  SET_COLUMNCHOICE (state, payload) {
    if (typeof payload !== 'undefined') {
      Vue.set(state.ColumnChoice, payload.ColumnChoiceID, payload)
      localForage.setItem('UserSettings_ColumnChoice', state.ColumnChoice)
    }
  },
  SET_COLUMNCHOICE_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.ColumnChoice, element.ColumnChoiceID, element)
      }, this)
      _.each(state.ColumnChoice, (item, idx) => {
        if (item.ColumnChoiceID >= 1073741824 || item.ColumnChoiceID === null) {
          let extant = _.find(state.ColumnChoice, extItem => {
            return extItem.ID === item.ID && extItem.ColumnChoiceID !== item.ColumnChoiceID
          })
          if (typeof extant !== 'undefined') {
            if (item.UpdatedAt >= extant.UpdatedAt) {
              let extId = +extant.ColumnChoiceID
              let newVal = {...extant, ...item}
              newVal.ColumnChoiceID = extId
              Vue.set(state.ColumnChoice, newVal.ColumnChoiceID, newVal)
              Vue.delete(state.ColumnChoice, item.ColumnChoiceID)
            } else {
              Vue.delete(state.ColumnChoice, item.ColumnChoiceID)
            }
          }
        }
      })

      localForage.setItem('UserSettings_ColumnChoice', state.ColumnChoice)
    }
  },
  SET_FAVORITE_PROPERTIES (state, payload) {
    if (typeof payload !== 'undefined') {
      Vue.set(state.Favorite, payload.FavoriteID, {...state.Favorite[payload.FavoriteID], ...payload})
      localForage.setItem('UserSettings_Favorite', state.Favorite)
    }
  },
  SET_FAVORITE (state, payload) {
    if (typeof payload !== 'undefined') {
      Vue.set(state.Favorite, payload.FavoriteID, payload)
      localForage.setItem('UserSettings_Favorite', state.Favorite)
    }
  },
  SET_FAVORITE_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.Favorite, element.FavoriteID, element)
      }, this)
      _.each(state.Favorite, (item, idx) => {
        if (item.FavoriteID >= 1073741824 || item.FavoriteID === null) {
          let extant = _.find(state.Favorite, extItem => {
            return extItem.ID === item.ID && extItem.FavoriteID !== item.FavoriteID
          })
          if (typeof extant !== 'undefined') {
            if (item.UpdatedAt >= extant.UpdatedAt) {
              let extId = +extant.FavoriteID
              let newVal = {...extant, ...item}
              newVal.FavoriteID = extId
              Vue.set(state.Favorite, newVal.FavoriteID, newVal)
              Vue.delete(state.Favorite, item.FavoriteID)
            } else {
              Vue.delete(state.Favorite, item.FavoriteID)
            }
          }
        }
      })

      localForage.setItem('UserSettings_Favorite', state.Favorite)
    }
  },
  SET_GENERALSETTINGS_PROPERTIES (state, payload) {
    if (typeof payload !== 'undefined') {
      Vue.set(state.GeneralSettings, payload.GeneralSettingsID, {...state.GeneralSettings[payload.GeneralSettingsID], ...payload})
      localForage.setItem('UserSettings_GeneralSettings', state.GeneralSettings)
    }
  },
  SET_GENERALSETTINGS (state, payload) {
    if (typeof payload !== 'undefined') {
      Vue.set(state.GeneralSettings, payload.GeneralSettingsID, payload)
      localForage.setItem('UserSettings_GeneralSettings', state.GeneralSettings)
    }
  },
  SET_GENERALSETTINGS_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.GeneralSettings, element.GeneralSettingsID, element)
      }, this)
      _.each(state.GeneralSettings, (item, idx) => {
        if (item.GeneralSettingsID >= 1073741824 || item.GeneralSettingsID === null) {
          let extant = _.find(state.GeneralSettings, extItem => {
            return extItem.ID === item.ID && extItem.GeneralSettingsID !== item.GeneralSettingsID
          })
          if (typeof extant !== 'undefined') {
            if (item.UpdatedAt >= extant.UpdatedAt) {
              let extId = +extant.GeneralSettingsID
              let newVal = {...extant, ...item}
              newVal.GeneralSettingsID = extId
              Vue.set(state.GeneralSettings, newVal.GeneralSettingsID, newVal)
              Vue.delete(state.GeneralSettings, item.GeneralSettingsID)
            } else {
              Vue.delete(state.GeneralSettings, item.GeneralSettingsID)
            }
          }
        }
      })

      localForage.setItem('UserSettings_GeneralSettings', state.GeneralSettings)
    }
  },
  SET_STATSCHOICE_PROPERTIES (state, payload) {
    if (typeof payload !== 'undefined') {
      Vue.set(state.StatsChoice, payload.StatsChoiceID, {...state.StatsChoice[payload.StatsChoiceID], ...payload})
      localForage.setItem('UserSettings_StatsChoice', state.StatsChoice)
    }
  },
  SET_STATSCHOICE (state, payload) {
    if (typeof payload !== 'undefined') {
      Vue.set(state.StatsChoice, payload.StatsChoiceID, payload)
      localForage.setItem('UserSettings_StatsChoice', state.StatsChoice)
    }
  },
  SET_STATSCHOICE_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.StatsChoice, element.StatsChoiceID, element)
      }, this)
      _.each(state.StatsChoice, (item, idx) => {
        if (item.StatsChoiceID >= 1073741824 || item.StatsChoiceID === null) {
          let extant = _.find(state.StatsChoice, extItem => {
            return extItem.ID === item.ID && extItem.StatsChoiceID !== item.StatsChoiceID
          })
          if (typeof extant !== 'undefined') {
            if (item.UpdatedAt >= extant.UpdatedAt) {
              let extId = +extant.StatsChoiceID
              let newVal = {...extant, ...item}
              newVal.StatsChoiceID = extId
              Vue.set(state.StatsChoice, newVal.StatsChoiceID, newVal)
              Vue.delete(state.StatsChoice, item.StatsChoiceID)
            } else {
              Vue.delete(state.StatsChoice, item.StatsChoiceID)
            }
          }
        }
      })

      localForage.setItem('UserSettings_StatsChoice', state.StatsChoice)
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
