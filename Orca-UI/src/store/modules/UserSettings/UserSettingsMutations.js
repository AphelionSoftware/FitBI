import {updateField} from 'vuex-map-fields'
import Vue from 'vue'
const mutations = {
  GET_COLUMNCHOICE (state, payload) {
    if ('' + payload.ColumnChoiceID === '0') {
      state.ColumnChoiceItem = {
        ColumnChoiceID: null,
        PageID: null,
        ColumnList: null,
        Active: null,
        Code: null,
        Name: null,
        ID: null,
        CreatedAt: null,
        UpdatedAt: null,
        Deleted: null,
        Version: null,
        UserID: null,
        NeedsSync: true
      }
    } else {
      state.ColumnChoiceItem = state.ColumnChoice[payload.ColumnChoiceID]
    }
  },
  SET_COLUMNCHOICE (state, payload) {
    state.ColumnChoice[payload.ColumnChoiceID] = payload
  },
  SET_COLUMNCHOICEITEM (state, payload) {
    state.ColumnChoiceItem = payload
  },
  SET_COLUMNCHOICE_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.ColumnChoice, element.ColumnChoiceID, element)
        state.ColumnChoiceList.push(element.ColumnChoiceID)
      }, this)
    }
  },
  GET_GENERALSETTINGS (state, payload) {
    if ('' + payload.GeneralSettingsID === '0') {
      state.GeneralSettingsItem = {
        GeneralSettingsID: null,
        UserID: null,
        UnitTypeID: null,
        Active: null,
        Code: null,
        Name: null,
        ID: null,
        CreatedAt: null,
        UpdatedAt: null,
        Deleted: null,
        Version: null,
        NeedsSync: true
      }
    } else {
      state.GeneralSettingsItem = state.GeneralSettings[payload.GeneralSettingsID]
    }
  },
  SET_GENERALSETTINGS (state, payload) {
    state.GeneralSettings[payload.GeneralSettingsID] = payload
  },
  SET_GENERALSETTINGSITEM (state, payload) {
    state.GeneralSettingsItem = payload
  },
  SET_GENERALSETTINGS_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.GeneralSettings, element.GeneralSettingsID, element)
        state.GeneralSettingsList.push(element.GeneralSettingsID)
      }, this)
    }
  },
  GET_STATSCHOICE (state, payload) {
    if ('' + payload.StatsChoiceID === '0') {
      state.StatsChoiceItem = {
        StatsChoiceID: null,
        UserID: null,
        StatTypeID: null,
        Active: null,
        ID: null,
        CreatedAt: null,
        UpdatedAt: null,
        Deleted: null,
        Version: null,
        NeedsSync: true
      }
    } else {
      state.StatsChoiceItem = state.StatsChoice[payload.StatsChoiceID]
    }
  },
  SET_STATSCHOICE (state, payload) {
    state.StatsChoice[payload.StatsChoiceID] = payload
  },
  SET_STATSCHOICEITEM (state, payload) {
    state.StatsChoiceItem = payload
  },
  SET_STATSCHOICE_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.StatsChoice, element.StatsChoiceID, element)
        state.StatsChoiceList.push(element.StatsChoiceID)
      }, this)
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
