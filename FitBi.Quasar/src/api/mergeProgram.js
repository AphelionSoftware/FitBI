/* eslint camelcase: 0 */
import { api } from 'boot/axios'

export async function mergePlan (payload) {
  return api.post('/merge/Plan', payload)
}

export async function mergeWorkout (payload) {
  return api.post('/merge/Workout', payload)
}

export async function mergeWorkout_Exercise (payload) {
  return api.post('/merge/Workout_Exercise', payload)
}

export async function mergeWorkoutStage (payload) {
  return api.post('/merge/WorkoutStage', payload)
}
