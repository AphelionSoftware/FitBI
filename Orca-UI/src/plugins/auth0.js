/* eslint-disable camelcase */
import auth0 from 'auth0-js'
import localForage from 'localforage'
import _ from 'underscore'
import * as JWT from 'jwt-decode'

// exchange the object with your own from the setup step above.

// leave the export, even if you don't use it
export default ({ app, router, Vue }) => {
  let authValues = process.env
  let webAuth = new auth0.WebAuth({
    domain: authValues.auth0domain,
    clientID: authValues.auth0clientID,
    redirectUri: authValues.auth0redirectUri,
    // audience: 'https://' + authValues.auth0domain + '/api/v2/',
    responseType: authValues.auth0responseType,
    scope: authValues.auth0scope
  })

  let auth = new Vue({
    data: function () {
      return {
        from: '',
        hash: '',
        p_token: null,
        p_accessToken: null,
        p_expiresAt: null,
        p_user: null
      }
    },
    computed: {
      fromPath: {
        get: function () {
          return this.from
        },
        set: function (path) {
          this.from = path
        }
      },
      hashPath: {
        get: function () {
          return this.hash
        },
        set: function (hash) {
          this.hash = hash
        }
      },
      token: {
        get: function () {
          return this.p_token
        },
        set: function (id_token) {
          localForage.setItem('auth0_id_token', id_token)
          this.p_token = id_token
        }
      },
      accessToken: {
        get: function () {
          return this.p_accessToken
        },
        set: function (accessToken) {
          localForage.setItem('auth0_access_token', accessToken)
          this.p_accessToken = accessToken
        }
      },
      expiresAt: {
        get: function () {
          return this.p_expiresAt
        },
        set: function (expiresIn) {
          let expiresAt = JSON.stringify(expiresIn * 1000 + new Date().getTime())
          localForage.setItem('auth0_expires_at', expiresAt)
          this.p_expiresAt = expiresAt
        }
      },
      user: {
        get: function () {
          return this.p_user
        },
        set: function (user) {
          localForage.setItem('auth0_user', user)
          this.p_user = user
        }
      }
    },
    methods: {
      login () {
        let arrGet = []
        arrGet.push(localForage.getItem('auth0_id_token'))
        arrGet.push(localForage.getItem('auth0_access_token'))
        arrGet.push(localForage.getItem('auth0_expires_at'))
        arrGet.push(localForage.getItem('auth0_user'))
        let vueThis = this
        Promise.all(arrGet)
          .then(function (results) {
            // Setting directly as we just read from the store
            vueThis.p_token = results[0]
            vueThis.p_accessToken = results[1]
            vueThis.p_expiresAt = results[2]
            vueThis.p_user = results[3]
            if (vueThis.user === null || new Date().getTime() < vueThis.expiresAt) {
              webAuth.authorize()
            } else {
              vueThis.$router.push({name: 'callback'})
            }
          })
      },
      logout () {
        return new Promise((resolve, reject) => {
          localForage.removeItem('auth0_access_token')
          localForage.removeItem('auth0_id_token')
          localForage.removeItem('auth0_expires_at')
          localForage.removeItem('auth0_user')
          webAuth.authorize()
        })
      },
      isAuthenticated () {
        return new Date().getTime() < this.expiresAt
      },
      handleAuthentication () {
        return new Promise((resolve, reject) => {
          let vueThis = this
          webAuth.parseHash((err, authResult) => {
            if (err === null && authResult === null) {
              _.each(vueThis.hashPath.split('&'), (item) => {
                // vueThis[item.split('=')[0]] = item.split('=')[1]
                switch (item.split('=')[0]) {
                  case 'expires_in':
                  {
                    vueThis.expiresAt = item.split('=')[1]
                    break
                  }
                  case 'access_token':
                  {
                    vueThis.accessToken = item.split('=')[1]
                    break
                  }
                  case 'id_token':
                  {
                    vueThis.token = item.split('=')[1]
                    debugger
                    vueThis.user = JWT(item.split('=')[1])
                    break
                  }
                }
              })
              debugger
              resolve()
            } else {
              if (authResult && authResult.accessToken && authResult.idToken) {
                this.expiresAt = authResult.expiresIn
                this.accessToken = authResult.accessToken
                this.token = authResult.idToken
                this.user = authResult.idTokenPayload
                resolve()
              } else if (err) {
                this.logout()
                reject(err)
              }
            }
          })
        })
      }
    }
  })
  Vue.prototype.$auth = auth
}
