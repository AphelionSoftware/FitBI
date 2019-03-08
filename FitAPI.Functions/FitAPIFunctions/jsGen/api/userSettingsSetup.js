import store from 'src/store/index'
export default function (usersettingsValues) {
  store.commit('AppState/SET_USERSETTINGS', usersettingsValues.Version)
  store.commit('UserSettings/SET_COLUMNCHOICE_LIST', usersettingsValues.ColumnChoice)
  store.commit('UserSettings/SET_FAVORITE_LIST', usersettingsValues.Favorite)
  store.commit('UserSettings/SET_GENERALSETTINGS_LIST', usersettingsValues.GeneralSettings)
  store.commit('UserSettings/SET_STATSCHOICE_LIST', usersettingsValues.StatsChoice)
}
