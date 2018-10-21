import _ from 'underscore'
import enumCore from '../../../plugins/libraries/enumCore'
import moment from 'moment'
const getters = {
  Get_Current_Person: function (state, getters, rootState, rootGetters) {
    return state.Person[state.Current_PersonID]
  },
  Get_NeckTapeMeasurementByDay: function (state, getters, rootState, rootGetters) {
    return _.chain(rootState.TapeMeasurement)
      .filter(function (item) {
        return item.BodyPartID === enumCore.BodyPart.NECK.intID
      })
      .map(item => {
        item.MeasurementDateID = moment(item.MeasurementDate, 'YYYYMMDD')
        return item
      })
      .groupBy(item => {
        return item.MeasurementDateID
      })
      .map(item => {
        let ret = {
          MeasurementDateID: item.MeasurementDateID,
          MeasurementDate: item[0].MeasurementDate,
          BodyPartID: item[0].BodyPartID,
          TapeLength: item[0].TapeLength
        }
        return ret
      })
      .value()
  },
  Get_LatestNeckTapeMeasurement: function (state, getters, rootState, rootGetters) {
    return _.chain(getters.Get_NeckTapeMeasurementByDay)
      .sortBy(function (item) { return item.MeasurementDateID })
      .last()
      .value()
  },
  Get_BellyTapeMeasurementByDay: function (state, getters, rootState, rootGetters) {
    return _.chain(rootState.TapeMeasurement)
      .filter(function (item) {
        return item.BodyPartID === enumCore.BodyPart.NECK.intID
      })
      .map(item => {
        item.MeasurementDateID = moment(item.MeasurementDate, 'YYYYMMDD')
        return item
      })
      .groupBy(item => {
        return item.MeasurementDateID
      })
      .map(item => {
        let ret = {
          MeasurementDateID: item.MeasurementDateID,
          MeasurementDate: item[0].MeasurementDate,
          BodyPartID: item[0].BodyPartID,
          TapeLength: item.TapeLength
        }
        return ret
      })
      .value()
  },
  Get_LatestBellyTapeMeasurement: function (state, getters, rootState, rootGetters) {
    return _.chain(getters.Get_BellyTapeMeasurementByDay)
      .sortBy(function (item) { return item.MeasurementDateID })
      .last()
      .value()
  },
  Get_WeightMeasurementByDay: function (state, getters, rootState, rootGetters) {
    return _.chain(rootState.TapeMeasurement)
      .filter(function (item) {
        // Check this
        return true
      })
      .map(item => {
        item.MeasurementDateID = moment(item.MeasurementDate, 'YYYYMMDD')
        return item
      })
      .groupBy(item => {
        return item.MeasurementDateID
      })
      .map(item => {
        let ret = {
          MeasurementDateID: item.MeasurementDateID,
          MeasurementDate: item[0].MeasurementDate,
          BodyPartID: item[0].BodyPartID,
          Value: item.Weight,
          Weight: item.Weight
        }
        return ret
      })
      .value()
  },
  Get_LatestWeightMeasurement: function (state, getters, rootState, rootGetters) {
    return _.chain(getters.Get_WeightMeasurementByDay)
      .sortBy(function (item) { return item.MeasurementDateID })
      .last()
      .value()
  },
  Get_MeasurementDates: function (state, getters, rootState) {
    let weightDates = _.uniq(_.pluck(state.WeightMeasurement, 'MeasurementDate'))
    let tapeDates = _.uniq(_.pluck(state.TapeMeasurement, 'MeasurementDate'))
    let skinDates = _.uniq(_.pluck(state.TapeMeasurement, 'MeasurementDate'))
    let dates = []
    dates = dates.concat(weightDates)
    dates = dates.concat(tapeDates)
    dates = dates.concat(skinDates)
    let dateObj = _.map(_.uniq(dates), function (date) {
      let obj =
      {
        MeasurementDate: (new Date(date)).toLocaleDateString('en-ZA'),
        icnWeight: _.findIndex(weightDates, item => '' + item === '' + date) > -1 ? 'fa-weight' : '',
        icnTape: _.findIndex(tapeDates, item => '' + item === '' + date) > -1 ? 'fa-tape' : ''
      }
      return obj
    })
    return _.sortBy(dateObj, 'MeasurementDate').reverse()
  },
  Get_DailyMeasurement_Dates: function (state) {
    let measure = state.DailyMeasurement
    measure = _.chain(state.DailyMeasurement)
      .mapObject(item => {
        if ((new Date(item.MeasurementDate)) === 'Invalid Date') {
          debugger
        }
        item.MeasurementDateOriginal = item.MeasurementDate
        // item.MeasurementDate = (new Date(item.MeasurementDate)).toLocaleString()
        item.MeasurementDateDisplay = (new Date(item.MeasurementDate)).toLocaleString()
        return item
      }).sortBy('MeasurementDateID')
      .value()
      .reverse()
    let ret = {}
    _.each(measure, item => {
      ret[item.MeasurementDateID] = item
    })
    return ret
  },
  Get_DailyMeasurements: function (state, getters) {
    let arr = []
    _.each(getters.Get_WeightMeasurementByDay, item => {
      if (typeof arr[item.MeasurementDateID] === 'undefined') {
        arr[item.MeasurementDateID] = {
          MeasurementDateID: item.MeasurementDateID,
          MeasurementDate: item.MeasurementDateID
        }
      }
      arr[item.MeasurementDateID].Weight = item.Weight
    })
    _.each(getters.Get_NeckTapeMeasurementByDay, item => {
      if (typeof arr[item.MeasurementDateID] === 'undefined') {
        arr[item.MeasurementDateID] = {
          MeasurementDateID: item.MeasurementDateID,
          MeasurementDate: item.MeasurementDateID
        }
      }
      arr[item.MeasurementDateID].NeckCircumference = item.TapeLength
    })
    _.each(getters.Get_BellyTapeMeasurementByDay, item => {
      if (typeof arr[item.MeasurementDateID] === 'undefined') {
        arr[item.MeasurementDateID] = {
          MeasurementDateID: item.MeasurementDateID,
          MeasurementDate: item.MeasurementDateID
        }
      }
      arr[item.MeasurementDateID].BellyCircumference = item.TapeLength
    })
    return arr
    // commit('SET_WEIGHTMEASUREMENT', weight)
    // commit('SET_NECKTAPEMEASUREMENT', tapeNeck)
    // commit('SET_BELLYTAPEMEASUREMENT', tapeBelly)
  }
}
export default getters
