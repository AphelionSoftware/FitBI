/* eslint camelcase: 0 */
import {APIinstance} from '../api.js'
import store from '../../store/index'
function mergeDailyMeasurement (payload) {
  let postData = {}
  if (payload.DailyMeasurement) {
    postData = payload
  } else {
    postData.DailyMeasurement = []
    postData.DailyMeasurement.push(payload)
  }
  store.commit('AppState/SET_APIFLAG_PROPERTY', {Saved: false, Failed: false, InProgress: true})
  APIinstance.genericPost('/merge/DailyMeasurement?' + APIinstance.config.mergeDailyMeasurementToken, postData)
}
function mergeMetric (payload) {
  let postData = {}
  if (payload.Metric) {
    postData = payload
  } else {
    postData.Metric = []
    postData.Metric.push(payload)
  }
  store.commit('AppState/SET_APIFLAG_PROPERTY', {Saved: false, Failed: false, InProgress: true})
  APIinstance.genericPost('/merge/Metric?' + APIinstance.config.mergeMetricToken, postData)
}
function mergePerson (payload) {
  let postData = {}
  if (payload.Person) {
    postData = payload
  } else {
    postData.Person = []
    postData.Person.push(payload)
  }
  store.commit('AppState/SET_APIFLAG_PROPERTY', {Saved: false, Failed: false, InProgress: true})
  APIinstance.genericPost('/merge/Person?' + APIinstance.config.mergePersonToken, postData)
}
function mergeSkinfoldMeasurement (payload) {
  let postData = {}
  if (payload.SkinfoldMeasurement) {
    postData = payload
  } else {
    postData.SkinfoldMeasurement = []
    postData.SkinfoldMeasurement.push(payload)
  }
  store.commit('AppState/SET_APIFLAG_PROPERTY', {Saved: false, Failed: false, InProgress: true})
  APIinstance.genericPost('/merge/SkinfoldMeasurement?' + APIinstance.config.mergeSkinfoldMeasurementToken, postData)
}
function mergeTapeMeasurement (payload) {
  let postData = {}
  if (payload.TapeMeasurement) {
    postData = payload
  } else {
    postData.TapeMeasurement = []
    postData.TapeMeasurement.push(payload)
  }
  store.commit('AppState/SET_APIFLAG_PROPERTY', {Saved: false, Failed: false, InProgress: true})
  APIinstance.genericPost('/merge/TapeMeasurement?' + APIinstance.config.mergeTapeMeasurementToken, postData)
}
function mergeWeightMeasurement (payload) {
  let postData = {}
  if (payload.WeightMeasurement) {
    postData = payload
  } else {
    postData.WeightMeasurement = []
    postData.WeightMeasurement.push(payload)
  }
  store.commit('AppState/SET_APIFLAG_PROPERTY', {Saved: false, Failed: false, InProgress: true})
  APIinstance.genericPost('/merge/WeightMeasurement?' + APIinstance.config.mergeWeightMeasurementToken, postData)
}
export {mergeDailyMeasurement, mergeMetric, mergePerson, mergeSkinfoldMeasurement, mergeTapeMeasurement, mergeWeightMeasurement}
