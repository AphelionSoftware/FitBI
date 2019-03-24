import _ from 'underscore'
import enumCore from '../../../plugins/libraries/enumCore'
import moment from 'moment'
const getters = {
  Get_MetricDetails_BySet: function (state, getters, rootState, rootGetters) {
    let ret = _.chain(state.MetricSetMetricDetail)
      .map(item => {
        let detail = _.find(rootState.Core.MetricDetail, detail => {
          return item.MetricDetailID === detail.MetricDetailID
        })
        return {...item, ...detail}
      })
      .value()
    debugger
    return ret
  },
  Get_MetricValues_By_MetricDetailID: function (state, getters, rootState, rootGetters) {
    return _.chain(state.MetricValues)
      .sortBy('MeasurementDate')
      .reverse()
      .groupBy('MetricDetailID')
      .value()
  },
  Get_MetricValues_By_Date: function (state, getters, rootState, rootGetters) {
    return _.groupBy(state.MetricValues, 'MeasurementDate')
  },
  Get_MetricValues_Latest_By_MetricDetailID: function (state, getters, rootState, rootGetters) {
    return _.map(getters['Get_MetricValues_By_MetricDetailID'], item => {
      return _.chain(item)
        .sortBy('MeasurementDate')
        .last()
        .value()
    })
  },
  Get_Current_Person: function (state, getters, rootState, rootGetters) {
    if (state.Current_PersonID > 0) {
      return state.Person[state.Current_PersonID]
    } else {
      return state.Person[Object.keys(state.Person)[0]] /// TODO: Issue when planning for multiple people
    }
  },
  Get_NeckTapeMeasurementByDay: function (state, getters, rootState, rootGetters) {
    return _.chain(state.TapeMeasurement)
      .filter(function (item) {
        return item.BodyPartID === enumCore.BodyPart.NECK.intID &&
        item.TapeLength !== null
      })
      .map(item => {
        item.MeasurementDateID = moment(item.MeasurementDate).format('YYYYMMDD')
        return item
      })
      .groupBy(item => {
        return item.MeasurementDateID
      })
      .map(item => {
        let ret = {
          MeasurementDateID: item[0].MeasurementDateID,
          MeasurementDate: new Date(item[0].MeasurementDate),
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
    return _.chain(state.TapeMeasurement)
      .filter(function (item) {
        return item.BodyPartID === enumCore.BodyPart.BELLYBUTTON_CIRC.intID &&
        item.TapeLength !== null
      })
      .map(item => {
        item.MeasurementDateID = moment(item.MeasurementDate).format('YYYYMMDD')
        return item
      })
      .groupBy(item => {
        return item.MeasurementDateID
      })
      .map(item => {
        let ret = {
          MeasurementDateID: item[0].MeasurementDateID,
          MeasurementDate: new Date(item[0].MeasurementDate),
          BodyPartID: item[0].BodyPartID,
          TapeLength: item[0].TapeLength
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
    return _.chain(state.WeightMeasurement)
      .filter(function (item) {
        // Check this
        return item.Weight !== null
      })
      .map(item => {
        item.MeasurementDateID = moment(item.MeasurementDate).format('YYYYMMDD')
        return item
      })
      .groupBy(item => {
        return item.MeasurementDateID
      })
      .map(item => {
        let ret = {
          MeasurementDateID: item[0].MeasurementDateID,
          MeasurementDate: new Date(item[0].MeasurementDate),
          BodyPartID: item[0].BodyPartID,
          Value: item[0].Weight,
          Weight: item[0].Weight
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
  Get_DailyMeasurement_DateIDs: function (state, getters) {
    return _.pluck(getters.Get_DailyMeasurement_Dates, 'MeasurementDateID')
  },
  Get_DailyMeasurement_Dates: function (state, getters) {
    let measure = state.DailyMeasurement
    // measure = _.chain(state.DailyMeasurement)
    measure = _.chain(getters.Get_DailyMeasurements)
      .mapObject(item => {
        if ((new Date(item.MeasurementDate)) === 'Invalid Date') {
          debugger // Invalid date
        }
        item.MeasurementDateOriginal = item.MeasurementDate
        // item.MeasurementDate = (new Date(item.MeasurementDate)).toLocaleString()
        item.MeasurementDateDisplay = (new Date(item.MeasurementDate)).toLocaleDateString()
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
    let height
    if (typeof getters.Get_Current_Person !== 'undefined') {
      height = getters.Get_Current_Person.Height
    }
    _.each(getters.Get_WeightMeasurementByDay, item => {
      if (typeof arr[item.MeasurementDateID] === 'undefined') {
        arr[item.MeasurementDateID] = {
          MeasurementDateID: item.MeasurementDateID,
          MeasurementDate: item.MeasurementDate
        }
      }
      arr[item.MeasurementDateID].Weight = item.Weight
    })
    _.each(getters.Get_NeckTapeMeasurementByDay, item => {
      if (typeof arr[item.MeasurementDateID] === 'undefined') {
        arr[item.MeasurementDateID] = {
          MeasurementDateID: item.MeasurementDateID,
          MeasurementDate: item.MeasurementDate
        }
      }
      arr[item.MeasurementDateID].NeckCircumference = item.TapeLength
      arr[item.MeasurementDateID].HasTape = true
    })
    _.each(getters.Get_BellyTapeMeasurementByDay, item => {
      if (typeof arr[item.MeasurementDateID] === 'undefined') {
        arr[item.MeasurementDateID] = {
          MeasurementDateID: item.MeasurementDateID,
          MeasurementDate: item.MeasurementDate
        }
      }
      arr[item.MeasurementDateID].BellyButtonCircumference = item.TapeLength
      arr[item.MeasurementDateID].HasTape = true
      if (+height > 0 && +arr[item.MeasurementDateID].NeckCircumference > 0) {
        let neck = +arr[item.MeasurementDateID].NeckCircumference
        let belly = item.TapeLength
        arr[item.MeasurementDateID].BodyFatEstimate = (86.01 * Math.log10((belly - neck) / 2.54) - 70.041 * Math.log10(height / 2.54) + 36.76) / 100
        arr[item.MeasurementDateID].WHR = belly / height
      }
    })
    return arr
  }
}
export default getters
