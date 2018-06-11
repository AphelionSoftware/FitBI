import _ from 'underscore'
const getters = {
  Get_MeasurementDates: function (state, getters, rootState) {
    let weightDates = _.uniq(_.pluck(getters['Get_WeightMeasurement_All'], 'MeasurementDate'))
    let tapeDates = _.uniq(_.pluck(getters['Get_TapeMeasurement_All'], 'MeasurementDate'))
    let skinDates = _.uniq(_.pluck(getters['Get_TapeMeasurement_All'], 'MeasurementDate'))
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
        item.MeasurementDateOriginal = (new Date(item.MeasurementDate))
        item.MeasurementDate = (new Date(item.MeasurementDate)).toLocaleString()
        return item
      }).sortBy('MeasurementDateID')
      .value()
      .reverse()
    let ret = {}
    _.each(measure, item => {
      ret[item.MeasurementDateID] = item
    })
    return ret
  }
}
export default getters
