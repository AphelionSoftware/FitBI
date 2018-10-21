// import {APIinstance} from '../../../plugins/api.js'
import _ from 'underscore'
import enumCore from '../../../plugins/libraries/enumCore'
const actions = {
  Set_StatsItem_ByMeasurementDate (context, payload) {
    let day = {
      MeasurementDate: payload
    }
    day.SkinfoldMeasurements = _.filter(context.state.TapeMeasurement,
      item => item.MeasurementDate === payload
    )
    day.TapeMeasurements = _.filter(context.state.TapeMeasurement,
      item => item.MeasurementDate === payload
    )
    day.WeightMeasurements = _.filter(context.state.TapeMeasurement,
      item => item.MeasurementDate === payload
    )
    context.commit('SET_DAILYMEASUREMENT_ITEM', day)
  },
  Save_DailyMeasurement ({commit, dispatch, getters, rootState, rootGetters, state}, payload) {
    let weightPayload = {
      MeasurementDate: payload.MeasurementDate,
      MeasurementDateID: payload.MeasurementDateID,
      Weight: payload.Weight
    }
    let neckPayload = {
      MeasurementDate: payload.MeasurementDate,
      MeasurementDateID: payload.MeasurementDateID,
      TapeLength: payload.NeckCircumference,
      BodyPartID: enumCore.BodyPart.NECK.intID
    }
    let bellyPayload = {
      MeasurementDate: payload.MeasurementDate,
      MeasurementDateID: payload.MeasurementDateID,
      TapeLength: payload.BellyCircumference,
      BodyPartID: enumCore.BodyPart.BELLY.intID
    }
    dispatch('Stats/saveWeightMeasurement', weightPayload)
    dispatch('Stats/saveTapeMeasurement', neckPayload)
    dispatch('Stats/saveTapeMeasurement', bellyPayload)
  }
}
export default actions
