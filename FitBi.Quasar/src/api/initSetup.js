import { useExerciseStore } from 'stores/exerciseStore'
import { useProgramStore } from 'stores/programStore'
import { useStatsStore } from 'stores/statsStore'

export default function initSetup (initValues) {
  const exerciseStore = useExerciseStore()
  exerciseStore.setExerciseList(initValues.Exercise)
  exerciseStore.setExercise_SportList(initValues.Exercise_Sport)
  exerciseStore.setExerciseTypeList(initValues.ExerciseType)
  exerciseStore.setSportList(initValues.Sport)

  const programStore = useProgramStore()
  programStore.setPlanList(initValues.Plan)
  programStore.setWorkoutList(initValues.Workout)
  programStore.setWorkout_ExerciseList(initValues.Workout_Exercise)
  programStore.setWorkoutStageList(initValues.WorkoutStage)

  const statsStore = useStatsStore()
  statsStore.setMetricList(initValues.Metric)
  statsStore.setPersonList(initValues.Person)
  statsStore.setSkinfoldMeasurementList(initValues.SkinfoldMeasurement)
  statsStore.setTapeMeasurementList(initValues.TapeMeasurement)
  statsStore.setWeightMeasurementList(initValues.WeightMeasurement)
}
