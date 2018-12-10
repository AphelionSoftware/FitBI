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
          debugger
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
            let payload = []
            _.each(Object.keys(results[key]), itemKey => {
              if (itemKey !== '__proto__') {
                payload.push(results[key][itemKey])
              }
            })
            store.commit(committer, payload)
          }
        } catch (error) {
          console.log(error)
          Notify(`Localforage cache load error: ${error}`)
          debugger
        }
      })
    })
}
