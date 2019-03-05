import store from '../../store/index'
import _ from 'underscore'
const defaultSettings = [
  {
    Code: 'UNIT',
    Name: 'Unit of measure',
    UnitTypeID: 2
  },
  {
    Code: 'SHOWINTRO',
    Name: 'Show Introduction Animations',
    BooleanValue: true
  }
]
export default function () {
  _.each(defaultSettings, setting => {
    if (typeof _.find(store.state.UserSettings.GeneralSettings(item => {
      return item.Code === setting.Code
    })) === 'undefined') {
      store.commit('UserSettings/SET_GENERALSETTINGS_LIST', setting)
    }
  })
}
