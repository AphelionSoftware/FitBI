import {updateField} from 'vuex-map-fields'
import Vue from 'vue'
const mutations = {
  GET_EXERCISE (state, payload) {
    if ('' + payload.ExerciseID === '0') {
      state.ExerciseItem = {
        ExerciseID: null,
        ExerciseTypeID: null,
        Code: null,
        Name: null,
        Description: null,
        ParentExerciseID: null,
        PersonID: null,
        Active: null,
        ID: null,
        CreatedAt: null,
        UpdatedAt: null,
        Deleted: null,
        Version: null,
        NeedsSync: true
      }
    } else {
      state.ExerciseItem = state.Exercise[payload.ExerciseID]
    }
  },
  SET_EXERCISE (state, payload) {
    state.Exercise[payload.ExerciseID] = payload
  },
  SET_EXERCISEITEM (state, payload) {
    state.ExerciseItem = payload
  },
  SET_EXERCISE_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.Exercise, element.ExerciseID, element)
        state.ExerciseList.push(element.ExerciseID)
      }, this)
    }
  },
  GET_EXERCISE_SPORT (state, payload) {
    if ('' + payload.Exercise_SportID === '0') {
      state.Exercise_SportItem = {
        Exercise_SportID: null,
        ExerciseID: null,
        PersonID: null,
        GoalNarrative: null,
        SportID: null,
        Active: null,
        ID: null,
        CreatedAt: null,
        UpdatedAt: null,
        Deleted: null,
        Version: null,
        NeedsSync: true
      }
    } else {
      state.Exercise_SportItem = state.Exercise_Sport[payload.Exercise_SportID]
    }
  },
  SET_EXERCISE_SPORT (state, payload) {
    state.Exercise_Sport[payload.Exercise_SportID] = payload
  },
  SET_EXERCISE_SPORTITEM (state, payload) {
    state.Exercise_SportItem = payload
  },
  SET_EXERCISE_SPORT_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.Exercise_Sport, element.Exercise_SportID, element)
        state.Exercise_SportList.push(element.Exercise_SportID)
      }, this)
    }
  },
  GET_EXERCISELINK (state, payload) {
    if ('' + payload.ExerciseLinkID === '0') {
      state.ExerciseLinkItem = {
        ExerciseLinkID: null,
        Code: null,
        Name: null,
        URL: null,
        ExerciseID: null,
        PersonID: null,
        Active: null,
        ID: null,
        CreatedAt: null,
        UpdatedAt: null,
        Deleted: null,
        Version: null,
        NeedsSync: true
      }
    } else {
      state.ExerciseLinkItem = state.ExerciseLink[payload.ExerciseLinkID]
    }
  },
  SET_EXERCISELINK (state, payload) {
    state.ExerciseLink[payload.ExerciseLinkID] = payload
  },
  SET_EXERCISELINKITEM (state, payload) {
    state.ExerciseLinkItem = payload
  },
  SET_EXERCISELINK_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.ExerciseLink, element.ExerciseLinkID, element)
        state.ExerciseLinkList.push(element.ExerciseLinkID)
      }, this)
    }
  },
  GET_EXERCISETYPE (state, payload) {
    if ('' + payload.ExerciseTypeID === '0') {
      state.ExerciseTypeItem = {
        ExerciseTypeID: null,
        Code: null,
        Name: null,
        ParentExerciseTypeID: null,
        PersonID: null,
        Active: null,
        ID: null,
        CreatedAt: null,
        UpdatedAt: null,
        Deleted: null,
        Version: null,
        NeedsSync: true
      }
    } else {
      state.ExerciseTypeItem = state.ExerciseType[payload.ExerciseTypeID]
    }
  },
  SET_EXERCISETYPE (state, payload) {
    state.ExerciseType[payload.ExerciseTypeID] = payload
  },
  SET_EXERCISETYPEITEM (state, payload) {
    state.ExerciseTypeItem = payload
  },
  SET_EXERCISETYPE_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.ExerciseType, element.ExerciseTypeID, element)
        state.ExerciseTypeList.push(element.ExerciseTypeID)
      }, this)
    }
  },
  GET_SPORT (state, payload) {
    if ('' + payload.SportID === '0') {
      state.SportItem = {
        SportID: null,
        Code: null,
        Name: null,
        Description: null,
        ParentSportID: null,
        PersonID: null,
        Active: null,
        ID: null,
        CreatedAt: null,
        UpdatedAt: null,
        Deleted: null,
        Version: null,
        NeedsSync: true
      }
    } else {
      state.SportItem = state.Sport[payload.SportID]
    }
  },
  SET_SPORT (state, payload) {
    state.Sport[payload.SportID] = payload
  },
  SET_SPORTITEM (state, payload) {
    state.SportItem = payload
  },
  SET_SPORT_LIST: function (state, fullList) {
    if (typeof (fullList) !== 'undefined') {
      fullList.forEach(function (element) {
        Vue.set(state.Sport, element.SportID, element)
        state.SportList.push(element.SportID)
      }, this)
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
