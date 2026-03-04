import { defineStore } from 'pinia'

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
    getExerciseAll: (state) => Object.values(state.exercise),
    exerciseById: (state) => (id) => state.exercise[id],
    getExerciseTypeAll: (state) => Object.values(state.exerciseType),
    getSportAll: (state) => Object.values(state.sport)
  },

  actions: {
    setExerciseList (fullList) {
      if (fullList) {
        fullList.forEach((element) => {
          this.exercise[element.ExerciseID] = element
          this.exerciseList.push(element.ExerciseID)
        })
      }
    },
    loadExerciseByID (id) {
      this.exerciseItem = this.exercise[id] ?? {}
    },
    saveExercise () {
      const item = this.exerciseItem
      item.UpdatedAt = new Date().toUTCString()
      item.NeedsSync = true
      this.exercise[item.ExerciseID] = item
    },
    setExercise_SportList (fullList) {
      if (fullList) {
        fullList.forEach((element) => {
          this.exerciseSport[element.Exercise_SportID] = element
          this.exerciseSportList.push(element.Exercise_SportID)
        })
      }
    },
    setExerciseTypeList (fullList) {
      if (fullList) {
        fullList.forEach((element) => {
          this.exerciseType[element.ExerciseTypeID] = element
          this.exerciseTypeList.push(element.ExerciseTypeID)
        })
      }
    },
    setSportList (fullList) {
      if (fullList) {
        fullList.forEach((element) => {
          this.sport[element.SportID] = element
          this.sportList.push(element.SportID)
        })
      }
    }
  }
})
