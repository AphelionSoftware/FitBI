import _ from 'underscore'
const getters = {
  Get_GeneralSetting_ByCode: function (state, getters, rootState) {
    return _.mapObject(
      _.indexBy(state.GeneralSettings, 'Code'),
      item => {
        return item
      })
  }
}
export default getters
