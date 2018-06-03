/* eslint camelcase: 0 */
import {APIinstance} from '../api.js'
function mergeColumnChoice (payload) {
  let postData = {}
  if (payload.ColumnChoice) {
    postData = payload
  } else {
    postData.ColumnChoice = []
    postData.ColumnChoice.push(payload)
  }
  APIinstance.http.post('/merge/ColumnChoice?' + APIinstance.config.mergeColumnChoiceToken, postData).then(
    function (response) {
    })
}
function mergeGeneralSettings (payload) {
  let postData = {}
  if (payload.GeneralSettings) {
    postData = payload
  } else {
    postData.GeneralSettings = []
    postData.GeneralSettings.push(payload)
  }
  APIinstance.http.post('/merge/GeneralSettings?' + APIinstance.config.mergeGeneralSettingsToken, postData).then(
    function (response) {
    })
}
function mergeStatsChoice (payload) {
  let postData = {}
  if (payload.StatsChoice) {
    postData = payload
  } else {
    postData.StatsChoice = []
    postData.StatsChoice.push(payload)
  }
  APIinstance.http.post('/merge/StatsChoice?' + APIinstance.config.mergeStatsChoiceToken, postData).then(
    function (response) {
    })
}
export {mergeColumnChoice, mergeGeneralSettings, mergeStatsChoice}
