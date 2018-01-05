import store from 'vuex/store'
export default function (coreValues) {
  debugger
  store.commit('Core/Set_BodyPart', coreValues.BodyPart)
  store.commit('Core/Set_BodyPartType', coreValues.BodyPartType)
  store.commit('Core/Set_MeasurementType', coreValues.MeasurementType)
  store.commit('Core/Set_MeasurementTypeCategory', coreValues.MeasurementTypeCategory)
  store.commit('Core/Set_Unit', coreValues.Unit)
  store.commit('Core/Set_UnitType', coreValues.UnitType)
}
