import store from 'src/store/index'
import { _ } from 'vue-underscore'
export default function (usersettingsValues) {
  store.commit('AppState/SET_USERSETTINGS', usersettingsValues.Version)
  store.commit('UserSettings/SET_COLUMNCHOICE_LIST', usersettingsValues.ColumnChoice)
  store.commit('UserSettings/SET_FAVORITE_LIST', usersettingsValues.Favorite)
  store.commit('UserSettings/SET_GENERALSETTINGS_LIST', usersettingsValues.GeneralSettings)
  store.commit('UserSettings/SET_STATSCHOICE_LIST', usersettingsValues.StatsChoice)

  // Now for favorites, go decorate the things that need to be
  _.each(usersettingsValues.Favorite, fav => {
    if (fav.MetricSetID !== null) {
      store.commit('Core/SET_METRICSET_PROPERTIES', fav.isFavorite)
    }
  })
}
