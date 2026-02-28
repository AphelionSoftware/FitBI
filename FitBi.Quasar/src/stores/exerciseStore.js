import { defineStore } from 'pinia'

export const useExerciseStore = defineStore('exercise', {
  state: () => ({
    Exercise: {},
    ExerciseList: [],
    ExerciseItem: {},
    Exercise_Sport: {},
    Exercise_SportList: [],
    Exercise_SportItem: {},
    ExerciseType: {},
    ExerciseTypeList: [],
    ExerciseTypeItem: {},
    Sport: {},
    SportList: [],
    SportItem: {}
  }),

  getters: {
    getExerciseAll: (state) => Object.values(state.Exercise),
    getExerciseByID: (state) => (id) => state.Exercise[id],
    getExerciseTypeAll: (state) => Object.values(state.ExerciseType),
    getSportAll: (state) => Object.values(state.Sport)
  },

  actions: {
    setExerciseList (fullList) {
      if (fullList) {
        fullList.forEach((element) => {
          this.Exercise[element.ExerciseID] = element
          this.ExerciseList.push(element.ExerciseID)
        })
      }
    },
    getExerciseByID (id) {
      this.ExerciseItem = this.Exercise[id] ?? {}
    },
    saveExercise () {
      const item = this.ExerciseItem
      item.UpdatedAt = new Date().toUTCString()
      item.NeedsSync = true
      this.Exercise[item.ExerciseID] = item
    },
    setExercise_SportList (fullList) {
      if (fullList) {
        fullList.forEach((element) => {
          this.Exercise_Sport[element.Exercise_SportID] = element
          this.Exercise_SportList.push(element.Exercise_SportID)
        })
      }
    },
    setExerciseTypeList (fullList) {
      if (fullList) {
        fullList.forEach((element) => {
          this.ExerciseType[element.ExerciseTypeID] = element
          this.ExerciseTypeList.push(element.ExerciseTypeID)
        })
      }
    },
    setSportList (fullList) {
      if (fullList) {
        fullList.forEach((element) => {
          this.Sport[element.SportID] = element
          this.SportList.push(element.SportID)
        })
      }
    }
  }
})
