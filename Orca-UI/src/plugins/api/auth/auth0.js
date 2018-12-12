import {WebAuth} from 'auth0-js'
import EventEmitter from 'eventemitter3'
import localForage from 'localforage'
// import router from './../router'

export default function (authValues) {
  try {
    let auth = new WebAuth({
      domain: authValues.auth0domain,
      clientID: authValues.auth0clientID,
      redirectUri: authValues.auth0redirectUri,
      responseType: authValues.auth0responseType,
      scope: authValues.auth0scope
    })

    auth.accessToken = null
    auth.idToken = null
    auth.expiresAt = null
    auth.login = function () {
      debugger
      auth.authorize()
    }

    debugger
    auth.handleAuthentication = function () {
      auth.auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          auth.setSession(authResult)
          // router.replace('home')
        } else if (err) {
          // router.replace('home')
          console.log(err)
          alert(`Error: ${err.error}. Check the console for further details.`)
        }
      })
    }

    auth.setSession = function (authResult) {
      auth.accessToken = authResult.accessToken
      auth.idToken = authResult.idToken
      auth.expiresAt = authResult.expiresIn * 1000 + new Date().getTime()
      auth.authNotifier.emit('authChange', { authenticated: true })
      localForage.setItem('auth0_loggedIn', true)
    }

    auth.renewSession = function () {
      auth.auth0.checkSession({}, (err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          auth.setSession(authResult)
        } else if (err) {
          auth.logout()
          console.log(err)
          alert(`Could not get a new token (${err.error}: ${err.error_description}).`)
        }
      })
    }

    auth.logout = function () {
      // Clear access token and ID token from local storage
      this.accessToken = null
      this.idToken = null
      this.expiresAt = null
      this.userProfile = null
      this.authNotifier.emit('authChange', false)
      localForage.removeItem('auth0_loggedIn')
      // navigate to the home route
      // router.replace('home')
    }

    auth.isAuthenticated = function () {
      // Check whether the current time is past the
      // access token's expiry time
      return new Date().getTime() < auth.expiresAt && localForage.getItem('auth0_loggedIn') === 'true'
    }
    debugger
    auth.authenticated = auth.isAuthenticated()
    debugger
    auth.authNotifier = new EventEmitter()
    return auth
  } catch (ex) {
    debugger
  }
  return null
}
