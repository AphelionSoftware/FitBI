import store from 'src/store/index'
import localForage from 'localforage'
export default async function () {
  let arrGet = []
  arrGet.push(localForage.getItem('AppState_Core'))
  arrGet.push(localForage.getItem('Core_BodyPart'))
  arrGet.push(localForage.getItem('Core_BodyPartType'))
  arrGet.push(localForage.getItem('Core_MeasurementType'))
  arrGet.push(localForage.getItem('Core_MeasurementTypeCategory'))
  arrGet.push(localForage.getItem('Core_MetricDetail'))
  arrGet.push(localForage.getItem('Core_MetricSet'))
  arrGet.push(localForage.getItem('Core_StatType'))
  arrGet.push(localForage.getItem('Core_Unit'))
  arrGet.push(localForage.getItem('Core_UnitType'))
  await Promise.all(arrGet)
    .then(function (results) {
      if (results[0] !== null) {
        store.commit('AppState/SET_CORE', results[0])
      }
      if (results[1] !== null) {
        store.commit('Core/SET_BODYPART', results[1])
      }
      if (results[2] !== null) {
        store.commit('Core/SET_BODYPARTTYPE', results[2])
      }
      if (results[3] !== null) {
        store.commit('Core/SET_MEASUREMENTTYPE', results[3])
      }
      if (results[4] !== null) {
        store.commit('Core/SET_MEASUREMENTTYPECATEGORY', results[4])
      }
      if (results[5] !== null) {
        store.commit('Core/SET_METRICDETAIL', results[5])
      }
      if (results[6] !== null) {
        store.commit('Core/SET_METRICSET', results[6])
      }
      if (results[7] !== null) {
        store.commit('Core/SET_STATTYPE', results[7])
      }
      if (results[8] !== null) {
        store.commit('Core/SET_UNIT', results[8])
      }
      if (results[9] !== null) {
        store.commit('Core/SET_UNITTYPE', results[9])
      }
    })
}
