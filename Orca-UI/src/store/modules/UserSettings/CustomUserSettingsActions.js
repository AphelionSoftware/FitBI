import _ from 'underscore'

const actions = {
  updateFavorite (context, payload) {
    let keyName = payload.keyName
    let module = payload.module
    let setting = _.find(context.state.Favorite, fav => {
      return fav[keyName] === payload[keyName]
    })
    if (typeof setting === 'undefined') {
      setting = {
        FavoriteID: Math.round(Math.random() * 1073741824) + 1073741823,
        isFavorite: payload.isFavorite
      }
      context.commit('SET_FAVORITE_LIST', [setting])
    } else {
      context.commit('SET_FAVORITE_PROPERTIES', {FavoriteID: payload.FavoriteID, isFavorite: payload.isFavorite})
    }
    let replicatedPayload = {}
    replicatedPayload[keyName] = payload[keyName]
    replicatedPayload.isFavorite = payload.isFavorite
    let commiter = module + '/SET_' + keyName.substring(0, keyName.length - 2).toUpperCase() + '_PROPERTIES'
    context.commit(commiter, replicatedPayload, {root: true})
  }
}
export default actions
