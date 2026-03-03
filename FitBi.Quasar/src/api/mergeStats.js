/* eslint camelcase: 0 */
import { api } from 'boot/axios'

export async function mergeMetric (payload) {
  return api.post('/merge/Metric', payload)
}

export async function mergePerson (payload) {
  return api.post('/merge/Person', payload)
}

export async function mergeSkinfoldMeasurement (payload) {
  return api.post('/merge/SkinfoldMeasurement', payload)
}

export async function mergeTapeMeasurement (payload) {
  return api.post('/merge/TapeMeasurement', payload)
}

export async function mergeWeightMeasurement (payload) {
  return api.post('/merge/WeightMeasurement', payload)
}
