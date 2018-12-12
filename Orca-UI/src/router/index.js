import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

Vue.use(VueRouter)

const Router = new VueRouter({
  /*
   * NOTE! Change Vue Router mode from quasar.conf.js -> build -> vueRouterMode
   *
   * If you decide to go with "history" mode, please also set "build.publicPath"
   * to something other than an empty string.
   * Example: '/' instead of ''
   */

  // Leave as is and change from quasar.conf.js instead!
  mode: process.env.VUE_ROUTER_MODE,
  base: process.env.VUE_ROUTER_BASE,
  scrollBehavior: () => ({ y: 0 }),
  routes
})

Router.beforeEach((to, from, next) => {
  if (to.name === 'callback') {
    next()
  } else if (to.path.startsWith('/access_token')) { // check if "to"-route is "callback" and allow access
    // next()
    Router.app.$auth.fromPath = from.path
    Router.app.$auth.hashPath = to.params[1]
    Router.push({ name: 'callback' })
  } else if (Router.app.$auth.isAuthenticated()) { // if authenticated allow access
    next()
  } else { // trigger auth0 login
    Router.app.$auth.login(next)
  }
})
export default Router
