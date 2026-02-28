/* eslint camelcase: 0 */
import { api } from 'boot/axios'

export async function mergeExercise (payload) {
  return api.post('/merge/Exercise', payload)
}

export async function mergeExercise_Sport (payload) {
  return api.post('/merge/Exercise_Sport', payload)
}

export async function mergeExerciseType (payload) {
  return api.post('/merge/ExerciseType', payload)
}

export async function mergeSport (payload) {
  return api.post('/merge/Sport', payload)
}
