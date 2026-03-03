import { defineStore } from 'pinia'

export const useProgramStore = defineStore('program', {
  state: () => ({
    Plan: {},
    PlanList: [],
    PlanItem: {},
    Workout: {},
    WorkoutList: [],
    WorkoutItem: {},
    Workout_Exercise: {},
    Workout_ExerciseList: [],
    Workout_ExerciseItem: {},
    WorkoutStage: {},
    WorkoutStageList: [],
    WorkoutStageItem: {}
  }),

  getters: {
    getPlanAll: (state) => Object.values(state.Plan),
    getPlanByID: (state) => (id) => state.Plan[id],
    getWorkoutAll: (state) => Object.values(state.Workout),
    getWorkoutByID: (state) => (id) => state.Workout[id],
    getWorkoutStageAll: (state) => Object.values(state.WorkoutStage)
  },

  actions: {
    setPlanList (fullList) {
      if (fullList) {
        fullList.forEach((element) => {
          this.Plan[element.PlanID] = element
          this.PlanList.push(element.PlanID)
        })
      }
    },
    setWorkoutList (fullList) {
      if (fullList) {
        fullList.forEach((element) => {
          this.Workout[element.WorkoutID] = element
          this.WorkoutList.push(element.WorkoutID)
        })
      }
    },
    setWorkout_ExerciseList (fullList) {
      if (fullList) {
        fullList.forEach((element) => {
          this.Workout_Exercise[element.Workout_ExerciseID] = element
          this.Workout_ExerciseList.push(element.Workout_ExerciseID)
        })
      }
    },
    setWorkoutStageList (fullList) {
      if (fullList) {
        fullList.forEach((element) => {
          this.WorkoutStage[element.WorkoutStageID] = element
          this.WorkoutStageList.push(element.WorkoutStageID)
        })
      }
    }
  }
})
