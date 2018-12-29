import {updateField} from 'vuex-map-fields'
import Vue from 'vue'
import localForage from 'localforage'
import _ from 'underscore'
const mutations = {
  SET_EXERCISE (state, payload) {
    if (typeof payload !== 'undefined') {
      Vue.set(state.Exercise, payload.ExerciseID, payload)
      localForage.setItem('Exercise_Exercise', state.Exercise)
    }
  },
  SET_EXERCISE_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.Exercise, element.ExerciseID, element)
      }, this)
      _.each(state.Exercise, (item, idx) => {
        if (item.ExerciseID >= 1073741824 || item.ExerciseID === null) {
          let extant = _.find(state.Exercise, extItem => {
            return extItem.ID === item.ID && extItem.ExerciseID !== item.ExerciseID
          })
          if (typeof extant !== 'undefined') {
            if (item.UpdatedAt >= extant.UpdatedAt) {
              let extId = +extant.ExerciseID
              let newVal = {...extant, ...item}
              newVal.ExerciseID = extId
              Vue.set(state.Exercise, newVal.ExerciseID, newVal)
              Vue.delete(state.Exercise, item.ExerciseID)
            } else {
              Vue.delete(state.Exercise, item.ExerciseID)
            }
          }
        }
      })

      localForage.setItem('Exercise_Exercise', state.Exercise)
    }
  },
  SET_EXERCISE_SPORT (state, payload) {
    if (typeof payload !== 'undefined') {
      Vue.set(state.Exercise_Sport, payload.Exercise_SportID, payload)
      localForage.setItem('Exercise_Exercise_Sport', state.Exercise_Sport)
    }
  },
  SET_EXERCISE_SPORT_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.Exercise_Sport, element.Exercise_SportID, element)
      }, this)
      _.each(state.Exercise_Sport, (item, idx) => {
        if (item.Exercise_SportID >= 1073741824 || item.Exercise_SportID === null) {
          let extant = _.find(state.Exercise_Sport, extItem => {
            return extItem.ID === item.ID && extItem.Exercise_SportID !== item.Exercise_SportID
          })
          if (typeof extant !== 'undefined') {
            if (item.UpdatedAt >= extant.UpdatedAt) {
              let extId = +extant.Exercise_SportID
              let newVal = {...extant, ...item}
              newVal.Exercise_SportID = extId
              Vue.set(state.Exercise_Sport, newVal.Exercise_SportID, newVal)
              Vue.delete(state.Exercise_Sport, item.Exercise_SportID)
            } else {
              Vue.delete(state.Exercise_Sport, item.Exercise_SportID)
            }
          }
        }
      })

      localForage.setItem('Exercise_Exercise_Sport', state.Exercise_Sport)
    }
  },
  SET_EXERCISELINK (state, payload) {
    if (typeof payload !== 'undefined') {
      Vue.set(state.ExerciseLink, payload.ExerciseLinkID, payload)
      localForage.setItem('Exercise_ExerciseLink', state.ExerciseLink)
    }
  },
  SET_EXERCISELINK_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.ExerciseLink, element.ExerciseLinkID, element)
      }, this)
      _.each(state.ExerciseLink, (item, idx) => {
        if (item.ExerciseLinkID >= 1073741824 || item.ExerciseLinkID === null) {
          let extant = _.find(state.ExerciseLink, extItem => {
            return extItem.ID === item.ID && extItem.ExerciseLinkID !== item.ExerciseLinkID
          })
          if (typeof extant !== 'undefined') {
            if (item.UpdatedAt >= extant.UpdatedAt) {
              let extId = +extant.ExerciseLinkID
              let newVal = {...extant, ...item}
              newVal.ExerciseLinkID = extId
              Vue.set(state.ExerciseLink, newVal.ExerciseLinkID, newVal)
              Vue.delete(state.ExerciseLink, item.ExerciseLinkID)
            } else {
              Vue.delete(state.ExerciseLink, item.ExerciseLinkID)
            }
          }
        }
      })

      localForage.setItem('Exercise_ExerciseLink', state.ExerciseLink)
    }
  },
  SET_EXERCISETYPE (state, payload) {
    if (typeof payload !== 'undefined') {
      Vue.set(state.ExerciseType, payload.ExerciseTypeID, payload)
      localForage.setItem('Exercise_ExerciseType', state.ExerciseType)
    }
  },
  SET_EXERCISETYPE_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.ExerciseType, element.ExerciseTypeID, element)
      }, this)
      _.each(state.ExerciseType, (item, idx) => {
        if (item.ExerciseTypeID >= 1073741824 || item.ExerciseTypeID === null) {
          let extant = _.find(state.ExerciseType, extItem => {
            return extItem.ID === item.ID && extItem.ExerciseTypeID !== item.ExerciseTypeID
          })
          if (typeof extant !== 'undefined') {
            if (item.UpdatedAt >= extant.UpdatedAt) {
              let extId = +extant.ExerciseTypeID
              let newVal = {...extant, ...item}
              newVal.ExerciseTypeID = extId
              Vue.set(state.ExerciseType, newVal.ExerciseTypeID, newVal)
              Vue.delete(state.ExerciseType, item.ExerciseTypeID)
            } else {
              Vue.delete(state.ExerciseType, item.ExerciseTypeID)
            }
          }
        }
      })

      localForage.setItem('Exercise_ExerciseType', state.ExerciseType)
    }
  },
  SET_SPORT (state, payload) {
    if (typeof payload !== 'undefined') {
      Vue.set(state.Sport, payload.SportID, payload)
      localForage.setItem('Exercise_Sport', state.Sport)
    }
  },
  SET_SPORT_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.Sport, element.SportID, element)
      }, this)
      _.each(state.Sport, (item, idx) => {
        if (item.SportID >= 1073741824 || item.SportID === null) {
          let extant = _.find(state.Sport, extItem => {
            return extItem.ID === item.ID && extItem.SportID !== item.SportID
          })
          if (typeof extant !== 'undefined') {
            if (item.UpdatedAt >= extant.UpdatedAt) {
              let extId = +extant.SportID
              let newVal = {...extant, ...item}
              newVal.SportID = extId
              Vue.set(state.Sport, newVal.SportID, newVal)
              Vue.delete(state.Sport, item.SportID)
            } else {
              Vue.delete(state.Sport, item.SportID)
            }
          }
        }
      })

      localForage.setItem('Exercise_Sport', state.Sport)
    }
  },
  SET_FLAG (state, payload) {
    if (payload === false) {
      state.Flags.loaded = false
    } else if (payload === true) {
      state.Flags.loaded = true
    } else {
      state.Flags = {...state.Flags, ...payload}
    }
  },
  updateField
}

export default mutations
