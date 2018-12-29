import {APIinstance} from '../../../plugins/api.js'
import uuidv1 from 'uuid/v1'
const actions = {
  saveColumnChoice (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.ColumnChoiceItem
    } else {
      item = payload
    }
    let defaults = {
      ColumnChoiceID: null,
      PageID: null,
      ColumnList: null,
      Active: 1,
      Code: null,
      Name: null,
      ID: uuidv1(),
      CreatedAt: new Date().toUTCString(),
      UpdatedAt: null,
      Deleted: false,
      Version: null,
      UserID: 1,
      NeedsSync: true
    }
    if (item.ColumnChoiceID === null) item.ColumnChoiceID = Math.round(Math.random() * 1073741824) + 1073741823 // Gets us a random number above 1073741823 but less than full positive int.
    item.UpdatedAt = (new Date()).toUTCString()
    item.NeedsSync = true
    item = {...defaults, ...item}
    context.commit('SET_COLUMNCHOICE', item)
    APIinstance.mergeUserSettings.mergeColumnChoice(item)
  },
  saveGeneralSettings (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.GeneralSettingsItem
    } else {
      item = payload
    }
    let defaults = {
      GeneralSettingsID: null,
      UserID: 1,
      UnitTypeID: null,
      Active: 1,
      Code: null,
      Name: null,
      ID: uuidv1(),
      CreatedAt: new Date().toUTCString(),
      UpdatedAt: null,
      Deleted: false,
      Version: null,
      NeedsSync: true
    }
    if (item.GeneralSettingsID === null) item.GeneralSettingsID = Math.round(Math.random() * 1073741824) + 1073741823 // Gets us a random number above 1073741823 but less than full positive int.
    item.UpdatedAt = (new Date()).toUTCString()
    item.NeedsSync = true
    item = {...defaults, ...item}
    context.commit('SET_GENERALSETTINGS', item)
    APIinstance.mergeUserSettings.mergeGeneralSettings(item)
  },
  saveStatsChoice (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.StatsChoiceItem
    } else {
      item = payload
    }
    let defaults = {
      StatsChoiceID: null,
      UserID: 1,
      StatTypeID: null,
      Active: 1,
      ID: uuidv1(),
      CreatedAt: new Date().toUTCString(),
      UpdatedAt: null,
      Deleted: false,
      Version: null,
      NeedsSync: true
    }
    if (item.StatsChoiceID === null) item.StatsChoiceID = Math.round(Math.random() * 1073741824) + 1073741823 // Gets us a random number above 1073741823 but less than full positive int.
    item.UpdatedAt = (new Date()).toUTCString()
    item.NeedsSync = true
    item = {...defaults, ...item}
    context.commit('SET_STATSCHOICE', item)
    APIinstance.mergeUserSettings.mergeStatsChoice(item)
  },
  stub () {}
}

export default actions
