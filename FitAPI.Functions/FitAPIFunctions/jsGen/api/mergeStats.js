/* eslint camelcase: 0 */
import {APIinstance} from '../api.js'
function mergeDailyMeasurement (payload) {
  let postData = {}
  if (payload.DailyMeasurement) {
    postData = payload
  } else {
    postData.DailyMeasurement = []
    postData.DailyMeasurement.push(payload)
  }
  APIinstance.http.post('/merge/DailyMeasurement?' + APIinstance.config.mergeDailyMeasurementToken, postData).then(
    function (response) {
    })
}
function mergeMetric (payload) {
  let postData = {}
  if (payload.Metric) {
    postData = payload
  } else {
    postData.Metric = []
    postData.Metric.push(payload)
  }
  APIinstance.http.post('/merge/Metric?' + APIinstance.config.mergeMetricToken, postData).then(
    function (response) {
    })
}
function mergePerson (payload) {
  let postData = {}
  if (payload.Person) {
    postData = payload
  } else {
    postData.Person = []
    postData.Person.push(payload)
  }
  APIinstance.http.post('/merge/Person?' + APIinstance.config.mergePersonToken, postData).then(
    function (response) {
    })
}
function mergeSkinfoldMeasurement (payload) {
  let postData = {}
  if (payload.SkinfoldMeasurement) {
    postData = payload
  } else {
    postData.SkinfoldMeasurement = []
    postData.SkinfoldMeasurement.push(payload)
  }
  APIinstance.http.post('/merge/SkinfoldMeasurement?' + APIinstance.config.mergeSkinfoldMeasurementToken, postData).then(
    function (response) {
    })
}
function mergeTapeMeasurement (payload) {
  let postData = {}
  if (payload.TapeMeasurement) {
    postData = payload
  } else {
    postData.TapeMeasurement = []
    postData.TapeMeasurement.push(payload)
  }
  APIinstance.http.post('/merge/TapeMeasurement?' + APIinstance.config.mergeTapeMeasurementToken, postData).then(
    function (response) {
    })
}
function mergeWeightMeasurement (payload) {
  let postData = {}
  if (payload.WeightMeasurement) {
    postData = payload
  } else {
    postData.WeightMeasurement = []
    postData.WeightMeasurement.push(payload)
  }
  APIinstance.http.post('/merge/WeightMeasurement?' + APIinstance.config.mergeWeightMeasurementToken, postData).then(
    function (response) {
    })
}
export {mergeDailyMeasurement, mergeMetric, mergePerson, mergeSkinfoldMeasurement, mergeTapeMeasurement, mergeWeightMeasurement}
