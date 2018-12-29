import store from 'src/store/index'
import localForage from 'localforage'
import {Notify} from 'quasar'
const getLocalForageDataByKeys = () => {
  return localForage.keys().then(keys => {
    if (keys.length === 0) {
      return Promise.resolve(null)
    }
    return Promise.all(keys.map(key => {
      return localForage.getItem(key)
        .then(value => {
          return { [key]: value }
        })
        .catch(error => {
          console.log(error)
          debugger /// Error
          return { [key]: null }
        })
    })).then(arr => {
      return Object.assign(...arr)
    })
  })
}

import _ from 'underscore'
export default async function () {
  await getLocalForageDataByKeys()
    .then(function (results) {
      if (typeof results === 'undefined' || results === null) {
        return
      }
      _.each(Object.keys(results), key => {
        try {
          if (key.indexOf('_') > -1) {
            let committer = key.split('_')[0] + '/SET_' + ('' + key.split('_')[1]).toUpperCase() + '_LIST'
            if (committer.indexOf('auth0') === -1) {
              let payload = []
              _.each(Object.keys(results[key]), itemKey => {
                if (itemKey !== '__proto__') {
                  payload.push(results[key][itemKey])
                }
              })
              if (payload.length > 0) {
                store.commit(committer, payload)
                store.commit(key.split('_')[0] + '/SET_FLAG', {loaded: true})
              }
            }
          }
        } catch (error) {
          console.log(error)
          debugger /// Error
          Notify.create({message: `Localforage cache load error: ${error}`})
        }
      })
    })
}
