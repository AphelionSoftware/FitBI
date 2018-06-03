import {APIinstance} from '../../../plugins/api.js'
import uuidv1 from 'uuid/v1'
const actions = {
  saveExercise (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.ExerciseItem
    } else {
      item = payload
    }
    let defaults = {
      ExerciseID: null,
      ExerciseTypeID: 1,
      Code: null,
      Name: null,
      Description: null,
      ParentExerciseID: null,
      PersonID: context.rootGetters['Stats/Get_Person_List'][0].PersonID,
      Active: 1,
      ID: uuidv1(),
      CreatedAt: new Date().toUTCString(),
      UpdatedAt: null,
      Deleted: false,
      Version: null,
      NeedsSync: true
    }
    if (item.ExerciseID === null) item.ExerciseID = 0
    item.UpdatedAt = (new Date()).toUTCString()
    item.NeedsSync = true
    item = {...defaults, ...item}
    context.commit('SET_EXERCISE', item)
    APIinstance.mergeStats.mergeExercise(item)
  },
  saveExercise_Sport (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.Exercise_SportItem
    } else {
      item = payload
    }
    let defaults = {
      Exercise_SportID: null,
      ExerciseID: null,
      PersonID: context.rootGetters['Stats/Get_Person_List'][0].PersonID,
      GoalNarrative: null,
      SportID: null,
      Active: 1,
      ID: uuidv1(),
      CreatedAt: new Date().toUTCString(),
      UpdatedAt: null,
      Deleted: false,
      Version: null,
      NeedsSync: true
    }
    if (item.Exercise_SportID === null) item.Exercise_SportID = 0
    item.UpdatedAt = (new Date()).toUTCString()
    item.NeedsSync = true
    item = {...defaults, ...item}
    context.commit('SET_EXERCISE_SPORT', item)
    APIinstance.mergeStats.mergeExercise_Sport(item)
  },
  saveExerciseLink (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.ExerciseLinkItem
    } else {
      item = payload
    }
    let defaults = {
      ExerciseLinkID: null,
      Code: null,
      Name: null,
      URL: null,
      ExerciseID: null,
      PersonID: context.rootGetters['Stats/Get_Person_List'][0].PersonID,
      Active: null,
      ID: null,
      CreatedAt: null,
      UpdatedAt: null,
      Deleted: null,
      Version: null,
      NeedsSync: true
    }
    if (item.ExerciseLinkID === null) item.ExerciseLinkID = 0
    item.UpdatedAt = (new Date()).toUTCString()
    item.NeedsSync = true
    item = {...defaults, ...item}
    context.commit('SET_EXERCISELINK', item)
    APIinstance.mergeStats.mergeExerciseLink(item)
  },
  saveExerciseType (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.ExerciseTypeItem
    } else {
      item = payload
    }
    let defaults = {
      ExerciseTypeID: null,
      Code: null,
      Name: null,
      ParentExerciseTypeID: null,
      PersonID: context.rootGetters['Stats/Get_Person_List'][0].PersonID,
      Active: 1,
      ID: uuidv1(),
      CreatedAt: new Date().toUTCString(),
      UpdatedAt: null,
      Deleted: false,
      Version: null,
      NeedsSync: true
    }
    if (item.ExerciseTypeID === null) item.ExerciseTypeID = 0
    item.UpdatedAt = (new Date()).toUTCString()
    item.NeedsSync = true
    item = {...defaults, ...item}
    context.commit('SET_EXERCISETYPE', item)
    APIinstance.mergeStats.mergeExerciseType(item)
  },
  saveSport (context, payload) {
    let item = {}
    if (typeof (payload) === 'undefined') {
      item = context.state.SportItem
    } else {
      item = payload
    }
    let defaults = {
      SportID: null,
      Code: null,
      Name: null,
      Description: null,
      ParentSportID: null,
      PersonID: context.rootGetters['Stats/Get_Person_List'][0].PersonID,
      Active: 1,
      ID: uuidv1(),
      CreatedAt: new Date().toUTCString(),
      UpdatedAt: null,
      Deleted: false,
      Version: null,
      NeedsSync: true
    }
    if (item.SportID === null) item.SportID = 0
    item.UpdatedAt = (new Date()).toUTCString()
    item.NeedsSync = true
    item = {...defaults, ...item}
    context.commit('SET_SPORT', item)
    APIinstance.mergeStats.mergeSport(item)
  },
  stub () {}
}

export default actions
