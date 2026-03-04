import { defineStore } from 'pinia'

export const useProgramStore = defineStore('program', {
  state: () => ({
    plan: {},
    planList: [],
    planItem: {},
    workout: {},
    workoutList: [],
    workoutItem: {},
    workoutExercise: {},
    workoutExerciseList: [],
    workoutExerciseItem: {},
    workoutStage: {},
    workoutStageList: [],
    workoutStageItem: {}
  }),

  getters: {
    getPlanAll: (state) => Object.values(state.plan),
    getPlanByID: (state) => (id) => state.plan[id],
    getWorkoutAll: (state) => Object.values(state.workout),
    getWorkoutByID: (state) => (id) => state.workout[id],
    getWorkoutStageAll: (state) => Object.values(state.workoutStage)
  },

  actions: {
    setPlanList (fullList) {
      if (fullList) {
        fullList.forEach((element) => {
          this.plan[element.PlanID] = element
          this.planList.push(element.PlanID)
        })
      }
    },
    setWorkoutList (fullList) {
      if (fullList) {
        fullList.forEach((element) => {
          this.workout[element.WorkoutID] = element
          this.workoutList.push(element.WorkoutID)
        })
      }
    },
    setWorkoutExerciseList (fullList) {
      if (fullList) {
        fullList.forEach((element) => {
          this.workoutExercise[element.Workout_ExerciseID] = element
          this.workoutExerciseList.push(element.Workout_ExerciseID)
        })
      }
    },
    setWorkoutStageList (fullList) {
      if (fullList) {
        fullList.forEach((element) => {
          this.workoutStage[element.WorkoutStageID] = element
          this.workoutStageList.push(element.WorkoutStageID)
        })
      }
    }
  }
})
