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
    debugger /// Check if we can delete this
    context.commit('SET_DAILYMEASUREMENT_ITEM', day)
  },
  Save_DailyMeasurement ({commit, dispatch, getters, rootState, rootGetters, state}, payload) {
    let weightPayload = {
      MeasurementDate: payload.MeasurementDate,
      MeasurementDateID: +payload.MeasurementDateID,
      Weight: payload.Weight
    }
    let neckPayload = {
      MeasurementDate: payload.MeasurementDate,
      MeasurementDateID: +payload.MeasurementDateID,
      TapeLength: payload.NeckCircumference,
      BodyPartID: enumCore.BodyPart.NECK.intID
    }
    let bellyPayload = {
      MeasurementDate: payload.MeasurementDate,
      MeasurementDateID: +payload.MeasurementDateID,
      TapeLength: payload.BellyButtonCircumference,
      BodyPartID: enumCore.BodyPart.BELLYBUTTON_CIRC.intID
    }
    debugger
    dispatch('Stats/saveWeightMeasurement', weightPayload, {root: true})
    dispatch('Stats/saveTapeMeasurement', neckPayload, {root: true})
    dispatch('Stats/saveTapeMeasurement', bellyPayload, {root: true})
  }
}
export default actions
