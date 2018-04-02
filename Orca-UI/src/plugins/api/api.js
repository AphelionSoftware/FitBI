
import axios from 'axios'
import coreSetup from './coreSetup'
import initSetup from './initSetup'
import * as mergeExercise from './mergeExercise'
import * as mergeProgram from './mergeProgram'
import * as mergeStats from './mergeStats'

export default class {
  constructor (config) {
    this.axios = axios.create({
      timeout: 5000,
      headers: {
        'method': 'GET',
        'Content-Type': 'application/json'
      }
    })
    this.config = config
    this.LatestTimestamps = []
    // this._mergeExercise = mergeExercise
    // this.mergeProgram = mergeProgram
    // this._mergeStats = mergeStats
  }

  get http () {
    return this.axios
  }
  get mergeExercise () {
    return mergeExercise
  }

  get mergeProgram () {
    return mergeProgram
  }

  get mergeStats () {
    return mergeStats
  }

  OnlineOfflineLoad () {
    var flagCore = true
    // ///TODO: Do checks to see if it exists in localForage and if there are newer items
    if (flagCore) {
      console.log(this.config.API_URL + this.config.coreURL + this.config.UserID + '?' + this.config.coreToken)
      this.axios.get(this.config.coreURL + this.config.UserID + '?' + this.config.coreToken).then(
        function (response) {
          coreSetup(JSON.parse(response.data))
        }
      )
    }
    var flagInit = true
    // ///TODO: Do checks to see if it exists in localForage and if there are newer items
    if (flagInit) {
      console.log(this.config.API_URL + this.config.initURL + this.config.UserID + '?' + this.config.initToken)
      this.axios.get(this.config.initURL + this.config.UserID + '?' + this.config.initToken).then(
        function (response) {
          initSetup(JSON.parse(response.data))
        }
      )
    }
  }

  ErrorHandler (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data)
      console.log(error.response.status)
      console.log(error.response.headers)
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request)
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message)
    }
    console.log(error.config)
  }
  Initialize () {
    // `this.core.baseURL = this.config.API + '/setup/Core/' + this.config.UserID
    // this.core.url = this.config.API + '/setup/Core/' + this.config.UserID
    this.axios.defaults.baseURL = this.config.API_URL
    var api = this
    console.log(this.config.API_URL + this.config.latestTimestampsURL + this.config.UserID + '?' + this.config.latestTimestampsToken)
    api.OnlineOfflineLoad()
    /*
    this.axios.get(this.config.latestTimestampsURL + this.config.UserID + '?' + this.config.latestTimestampsToken).then(
      function (response) {
        api.LatestTimestamps = response.LatestTimestamps
        api.OnlineOfflineLoad()
      }
    ).catch(api.ErrorHandler)
    */
  }
}
