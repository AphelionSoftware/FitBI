/* eslint camelcase: 0 */
import {APIinstance} from '../api.js'
import store from '../../store/index'
import * as defaultSettings from './defaultSettings'
function mergeColumnChoice (payload) {
  let postData = {}
  if (payload.ColumnChoice) {
    postData = payload
  } else {
    postData.ColumnChoice = []
    postData.ColumnChoice.push(payload)
  }
  store.commit('AppState/SET_APIFLAG_PROPERTY', {Saved: false, Failed: false, InProgress: true})
  APIinstance.genericPost('/merge/ColumnChoice?' + APIinstance.config.mergeColumnChoiceToken, postData)
}
function mergeGeneralSettings (payload) {
  let postData = {}
  if (payload.GeneralSettings) {
    postData = payload
  } else {
    postData.GeneralSettings = []
    postData.GeneralSettings.push(payload)
  }
  store.commit('AppState/SET_APIFLAG_PROPERTY', {Saved: false, Failed: false, InProgress: true})
  APIinstance.genericPost('/merge/GeneralSettings?' + APIinstance.config.mergeGeneralSettingsToken, postData)
  defaultSettings()
}
function mergeStatsChoice (payload) {
  let postData = {}
  if (payload.StatsChoice) {
    postData = payload
  } else {
    postData.StatsChoice = []
    postData.StatsChoice.push(payload)
  }
  store.commit('AppState/SET_APIFLAG_PROPERTY', {Saved: false, Failed: false, InProgress: true})
  APIinstance.genericPost('/merge/StatsChoice?' + APIinstance.config.mergeStatsChoiceToken, postData)
}
export {mergeColumnChoice, mergeGeneralSettings, mergeStatsChoice}
