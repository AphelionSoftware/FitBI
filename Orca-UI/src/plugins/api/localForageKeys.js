import store from 'src/store/index'
import localForage from 'localforage'
const getLocalForageDataByKeys = () => {
  return localForage.keys().then(keys => {
    return Promise.all(keys.map(key => {
      return localForage.getItem(key)
        .then(value => {
          return { [key]: value }
        })
        .catch(error => {
          console.log(error)
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
      debugger
      _.each(Object.keys(results), key => {
        try {
          if (key.indexOf('_') > -1) {
            let committer = key.split('_')[0] + '/SET_' + ('' + key.split('_')[1]).toUpperCase()
            store.commit(committer, results[key])
          }
        } catch (error) {
          console.log(error)
          debugger
        }
      })
    })
}
