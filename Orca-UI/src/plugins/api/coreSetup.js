import store from 'src/store/index'
export default function (coreValues) {
  store.commit('AppState/SET_CORE', coreValues.Version)
  store.commit('Core/SET_BODYPART_LIST', coreValues.BodyPart)
  store.commit('Core/SET_BODYPARTTYPE_LIST', coreValues.BodyPartType)
  store.commit('Core/SET_MEASUREMENTCONTROL_LIST', coreValues.MeasurementControl)
  store.commit('Core/SET_MEASUREMENTTYPE_LIST', coreValues.MeasurementType)
  store.commit('Core/SET_MEASUREMENTTYPECATEGORY_LIST', coreValues.MeasurementTypeCategory)
  store.commit('Core/SET_METRICDETAIL_LIST', coreValues.MetricDetail)
  store.commit('Core/SET_METRICSET_LIST', coreValues.MetricSet)
  store.commit('Core/SET_STATTYPE_LIST', coreValues.StatType)
  store.commit('Core/SET_UNIT_LIST', coreValues.Unit)
  store.commit('Core/SET_UNITTYPE_LIST', coreValues.UnitType)
}
