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
      UpdatedAt: new Date(),
      Deleted: false,
      Version: null,
      UserID: 1,
      NeedsSync: true
    }
    if (typeof item.UpdatedAt === 'undefined' || item.UpdatedAt === null) {
      item.UpdatedAt = new Date()
    } else {
      item.UpdatedAt = new Date(item.UpdatedAt)
    }
    item.UpdatedAt = item.UpdatedAt.toUTCString()
    item.UpdatedAt = (new Date()).toUTCString()
    item.NeedsSync = true
    item = {...defaults, ...item}
    if (item.ColumnChoiceID === null) item.ColumnChoiceID = Math.round(Math.random() * 1073741824) + 1073741823 // Gets us a random number above 1073741823 but less than full positive int.
    context.commit('SET_COLUMNCHOICE', item)
    APIinstance.mergeUserSettings.mergeColumnChoice(item)
  },
  saveFavorite (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.FavoriteItem
    } else {
      item = payload
    }
    let defaults = {
      FavoriteID: null,
      MetricSetID: null,
      isFavorite: true,
      Active: 1,
      Code: null,
      Name: null,
      ID: uuidv1(),
      CreatedAt: new Date().toUTCString(),
      UpdatedAt: new Date(),
      Deleted: false,
      Version: null,
      UserID: 1,
      NeedsSync: true
    }
    if (typeof item.UpdatedAt === 'undefined' || item.UpdatedAt === null) {
      item.UpdatedAt = new Date()
    } else {
      item.UpdatedAt = new Date(item.UpdatedAt)
    }
    item.UpdatedAt = item.UpdatedAt.toUTCString()
    item.UpdatedAt = (new Date()).toUTCString()
    item.NeedsSync = true
    item = {...defaults, ...item}
    if (item.FavoriteID === null) item.FavoriteID = Math.round(Math.random() * 1073741824) + 1073741823 // Gets us a random number above 1073741823 but less than full positive int.
    context.commit('SET_FAVORITE', item)
    APIinstance.mergeUserSettings.mergeFavorite(item)
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
      BooleanValue: null,
      IntegerValue: null,
      FloatingValue: null,
      DecimalValue: null,
      ID: uuidv1(),
      CreatedAt: new Date().toUTCString(),
      UpdatedAt: new Date(),
      Deleted: false,
      Version: null,
      NeedsSync: true
    }
    if (typeof item.UpdatedAt === 'undefined' || item.UpdatedAt === null) {
      item.UpdatedAt = new Date()
    } else {
      item.UpdatedAt = new Date(item.UpdatedAt)
    }
    item.UpdatedAt = item.UpdatedAt.toUTCString()
    item.UpdatedAt = (new Date()).toUTCString()
    item.NeedsSync = true
    item = {...defaults, ...item}
    if (item.GeneralSettingsID === null) item.GeneralSettingsID = Math.round(Math.random() * 1073741824) + 1073741823 // Gets us a random number above 1073741823 but less than full positive int.
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
      UpdatedAt: new Date(),
      Deleted: false,
      Version: null,
      NeedsSync: true
    }
    if (typeof item.UpdatedAt === 'undefined' || item.UpdatedAt === null) {
      item.UpdatedAt = new Date()
    } else {
      item.UpdatedAt = new Date(item.UpdatedAt)
    }
    item.UpdatedAt = item.UpdatedAt.toUTCString()
    item.UpdatedAt = (new Date()).toUTCString()
    item.NeedsSync = true
    item = {...defaults, ...item}
    if (item.StatsChoiceID === null) item.StatsChoiceID = Math.round(Math.random() * 1073741824) + 1073741823 // Gets us a random number above 1073741823 but less than full positive int.
    context.commit('SET_STATSCHOICE', item)
    APIinstance.mergeUserSettings.mergeStatsChoice(item)
  },
  stub () {}
}

export default actions
