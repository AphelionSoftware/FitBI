// import {APIinstance} from '../../../plugins/api.js'
import _ from 'underscore'
const actions = {
  Set_StatsItem_ByMeasurementDate (context, payload) {
    let day = {
      MeasurementDate: payload
    }
    day.SkinfoldMeasurements = _.filter(context.getters['Get_SkinfoldMeasurement_All'],
      item => item.MeasurementDate === payload
    )
    day.TapeMeasurements = _.filter(context.getters['Get_TapeMeasurement_All'],
      item => item.MeasurementDate === payload
    )
    day.WeightMeasurements = _.filter(context.getters['Get_WeightMeasurement_All'],
      item => item.MeasurementDate === payload
    )
    context.commit('SET_DAILYMEASUREMENT_ITEM', day)
  }
}
export default actions
