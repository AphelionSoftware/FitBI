import store from 'src/store/index'
import localForage from 'localforage'
export default async function () {
  let arrGet = []
  arrGet.push(localForage.getItem('AppState_UserSettings'))
  arrGet.push(localForage.getItem('UserSettings_ColumnChoice'))
  arrGet.push(localForage.getItem('UserSettings_Favorite'))
  arrGet.push(localForage.getItem('UserSettings_GeneralSettings'))
  arrGet.push(localForage.getItem('UserSettings_StatsChoice'))
  await Promise.all(arrGet)
    .then(function (results) {
      if (results[0] !== null) {
        store.commit('AppState/SET_USERSETTINGS', results[0])
      }
      if (results[1] !== null) {
        store.commit('UserSettings/SET_COLUMNCHOICE', results[1])
      }
      if (results[2] !== null) {
        store.commit('UserSettings/SET_FAVORITE', results[2])
      }
      if (results[3] !== null) {
        store.commit('UserSettings/SET_GENERALSETTINGS', results[3])
      }
      if (results[4] !== null) {
        store.commit('UserSettings/SET_STATSCHOICE', results[4])
      }
    })
}
