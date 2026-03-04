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
    allPlans: (state) => Object.values(state.plan),
    planById: (state) => (id) => state.plan[id],
    allWorkouts: (state) => Object.values(state.workout),
    workoutById: (state) => (id) => state.workout[id],
    allWorkoutStages: (state) => Object.values(state.workoutStage)
  },

  actions: {
    setPlanList (fullList) {
      this.plan = {}
      this.planList = []
      if (fullList) {
        fullList.forEach((element) => {
          this.plan[element.PlanID] = element
          this.planList.push(element.PlanID)
        })
      }
    },
    setWorkoutList (fullList) {
      this.workout = {}
      this.workoutList = []
      if (fullList) {
        fullList.forEach((element) => {
          this.workout[element.WorkoutID] = element
          this.workoutList.push(element.WorkoutID)
        })
      }
    },
    setWorkoutExerciseList (fullList) {
      this.workoutExercise = {}
      this.workoutExerciseList = []
      if (fullList) {
        fullList.forEach((element) => {
          this.workoutExercise[element.Workout_ExerciseID] = element
          this.workoutExerciseList.push(element.Workout_ExerciseID)
        })
      }
    },
    setWorkoutStageList (fullList) {
      this.workoutStage = {}
      this.workoutStageList = []
      if (fullList) {
        fullList.forEach((element) => {
          this.workoutStage[element.WorkoutStageID] = element
          this.workoutStageList.push(element.WorkoutStageID)
        })
      }
    }
  }
})
