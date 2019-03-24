import store from 'src/store/index'
import { _ } from 'vue-underscore'
export default function (usersettingsValues, config) {
  let settings = {}
  let appStats = _.find(usersettingsValues.GeneralSettings, item => {
    return item.Code === 'APPSTATS'
  })
  settings.appStats = (('' + config.appStats) === 'true' && (typeof appStats === 'undefined' || appStats.BooleanValue === true))

  let appKB = _.find(usersettingsValues.GeneralSettings, item => {
    return item.Code === 'APPKB'
  })
  settings.appKB = (('' + config.appKB) === 'true' && (typeof appKB === 'undefined' || appKB.BooleanValue === true))

  let appProgram = _.find(usersettingsValues.GeneralSettings, item => {
    return item.Code === 'APPPROGRAM'
  })
  settings.appProgram = (('' + config.appProgram) === 'true' && (typeof appProgram === 'undefined' || appProgram.BooleanValue === true))

  if (typeof settings.appStats === 'undefined') {
    usersettingsValues.GeneralSettings.push({
      Code: 'APPSTATS',
      Boolean: appStats
    })
  }
  if (typeof settings.appKB === 'undefined') {
    usersettingsValues.GeneralSettings.push({
      Code: 'APPKB',
      Boolean: appKB
    })
  }
  if (typeof settings.appProgram === 'undefined') {
    usersettingsValues.GeneralSettings.push({
      Code: 'APPPROGRAM',
      Boolean: appProgram
    })
  }

  store.commit('AppState/SET_USERSETTINGS', usersettingsValues.Version)
  store.commit('AppState/SET_APPSWITCH', settings)
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

  // And we switch on or off features based on build and on user settings
}
