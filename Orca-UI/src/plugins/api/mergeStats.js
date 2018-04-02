/* eslint camelcase: 0 */
import Vue from 'vue'
function mergeMetric (payload) {
  let postData = {}
  if (payload.Metric) {
    postData = payload
  } else {
    postData.Metric = []
    postData.Metric.push(payload)
  }
  Vue.$API.http.post('/merge/Metric?' + Vue.$API.config.token.mergeMetricToken, postData).then(
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
  Vue.$API.http.post('/merge/Person?' + Vue.$API.config.token.mergePersonToken, postData).then(
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
  Vue.$API.http.post('/merge/SkinfoldMeasurement?' + Vue.$API.config.token.mergeSkinfoldMeasurementToken, postData).then(
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
  Vue.$API.http.post('/merge/TapeMeasurement?' + Vue.$API.config.token.mergeTapeMeasurementToken, postData).then(
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
  Vue.$API.http.post('/merge/WeightMeasurement?' + Vue.$API.config.token.mergeWeightMeasurementToken, postData).then(
    function (response) {
    })
}
export {mergeMetric, mergePerson, mergeSkinfoldMeasurement, mergeTapeMeasurement, mergeWeightMeasurement}
