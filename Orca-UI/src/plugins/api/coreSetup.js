﻿import store from '../../store/index'
export default function (coreValues) {
  store.commit('Core/SET_BODYPART_LIST', coreValues.BodyPart)
  store.commit('Core/SET_BODYPARTTYPE_LIST', coreValues.BodyPartType)
  store.commit('Core/SET_MEASUREMENTTYPE_LIST', coreValues.MeasurementType)
  store.commit('Core/SET_MEASUREMENTTYPECATEGORY_LIST', coreValues.MeasurementTypeCategory)
  store.commit('Core/SET_STATTYPE_LIST', coreValues.StatType)
  store.commit('Core/SET_UNIT_LIST', coreValues.Unit)
  store.commit('Core/SET_UNITTYPE_LIST', coreValues.UnitType)
  store.commit('Program/SET_FLAG', true)
}
