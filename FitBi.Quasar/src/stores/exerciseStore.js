import { defineStore } from 'pinia'
import { mergeExercise } from 'src/api/mergeExercise'

export const useExerciseStore = defineStore('exercise', {
  state: () => ({
    exercise: {},
    exerciseList: [],
    exerciseItem: {},
    exerciseSport: {},
    exerciseSportList: [],
    exerciseSportItem: {},
    exerciseType: {},
    exerciseTypeList: [],
    exerciseTypeItem: {},
    sport: {},
    sportList: [],
    sportItem: {}
  }),

  getters: {
    allExercises: (state) => Object.values(state.exercise),
    exerciseById: (state) => (id) => state.exercise[id],
    allExerciseTypes: (state) => Object.values(state.exerciseType),
    allSports: (state) => Object.values(state.sport)
  },

  actions: {
    setExerciseList (fullList) {
      this.exercise = {}
      this.exerciseList = []
      if (fullList) {
        fullList.forEach((element) => {
          this.exercise[element.ExerciseID] = element
          this.exerciseList.push(element.ExerciseID)
        })
      }
    },
    loadExerciseByID (id) {
      this.exerciseItem = id !== undefined ? { ...this.exercise[id] } : {}
    },
    async saveExercise () {
      const item = this.exerciseItem
      item.UpdatedAt = new Date().toUTCString()
      item.NeedsSync = true
      this.exercise[item.ExerciseID] = { ...item }
      await mergeExercise(item)
    },
    setExerciseSportList (fullList) {
      this.exerciseSport = {}
      this.exerciseSportList = []
      if (fullList) {
        fullList.forEach((element) => {
          this.exerciseSport[element.Exercise_SportID] = element
          this.exerciseSportList.push(element.Exercise_SportID)
        })
      }
    },
    setExerciseTypeList (fullList) {
      this.exerciseType = {}
      this.exerciseTypeList = []
      if (fullList) {
        fullList.forEach((element) => {
          this.exerciseType[element.ExerciseTypeID] = element
          this.exerciseTypeList.push(element.ExerciseTypeID)
        })
      }
    },
    setSportList (fullList) {
      this.sport = {}
      this.sportList = []
      if (fullList) {
        fullList.forEach((element) => {
          this.sport[element.SportID] = element
          this.sportList.push(element.SportID)
        })
      }
    }
  }
})
