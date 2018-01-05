
import axios from 'axios'
import coreSetup from './coreSetup'

export default class {
  constructor (config) {
    this.axios = axios.create({
      timeout: 5000,
      headers: {
        'method': 'GET',
        'X-Auth-Token': 'f2b6637ddf355a476918940289c0be016a4fe99e3b69c83d',
        'Content-Type': 'application/json'
      }
    })
    this.config = config
    this.LatestTimestamps = []
  }

  OnlineOfflineLoad () {
    var flagCore = true
    // ///TODO: Do checks to see if it exists in localForage and if there are newer items
    if (flagCore) {
      this.axios.get(this.config.coreURL + this.config.UserID).then(
        function (response) {
          coreSetup(JSON.parse(response.data))
        }
      )
    }
  }

  Initialize () {
    // `this.core.baseURL = this.config.API + '/setup/Core/' + this.config.UserID
    // this.core.url = this.config.API + '/setup/Core/' + this.config.UserID
    this.axios.defaults.baseURL = this.config.API
    var api = this
    this.axios.get(this.config.latestTimestampsURL + this.config.UserID).then(
      function (response) {
        api.LatestTimestamps = response.LatestTimestamps
        api.OnlineOfflineLoad()
      }
    )
  }
}

