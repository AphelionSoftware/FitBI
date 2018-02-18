// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
// require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
require(`quasar/dist/quasar.${__THEME}.css`)
// ==============================

import Vue from 'vue'
import Vuex, {mapState, mapGetters} from 'vuex'
import router from './router'
import Quasar, {QKnob, QTab, QTabs, QTabPane, QRouteTab, QChip, QToggle, QDatetime, QLayout, QList, QListHeader, QSideLink, QItemMain, QItemSide, QToolbar, QBtn, QIcon, QToolbarTitle, QItem, QItemTile, QInput, QField} from 'quasar'
import underscore from 'vue-underscore'
import 'quasar-extras/material-icons'
import 'quasar-extras/ionicons'
import 'quasar-extras/fontawesome'
// main.js, before all the router stuff:
// Configuration
// import vueConfig from 'vue-config'

import {config} from 'config'
import {token} from 'token'

// API
import API from './api/api'

// Vuelidation
import Vuelidate from 'vuelidate'

// Components
import SingleMeasure from './components/single-measure'
// Layouts
import Weight from './components/pages/fit-weight'
import Measurements from './components/pages/fit-measurements'

import store from './vuex/store'

import { sync } from 'vuex-router-sync' // Access via store.state.route.params
sync(store, router) // done. Returns an unsync callback fn
// Vue.use(vueConfig, config)
config.token = token
Vue.use(underscore)
Vue.$API = new API(config)
// Vue.$UI = new UI()

Vue.use(Vuelidate)
Vue.use(Quasar, {
  components: {QKnob, QTab, QTabs, QTabPane, QRouteTab, QChip, QToggle, QDatetime, QLayout, QList, QListHeader, QSideLink, QItemMain, QItemSide, QToolbar, QBtn, QIcon, QToolbarTitle, QItem, QItemTile, QInput, QField}
}) // Install Quasar Framework

Vue.use(Vuex, {
  components: {mapState, mapGetters}
})

Vue.component('fit-weight', Weight)
Vue.component('fit-measurements', Measurements)
Vue.component('single-measure', SingleMeasure)

/* eslint-disable no-new */
let vueInstance = new Vue({
  el: '#q-app',
  store,
  router,
  render: h => h(require('./App')),
  mounted: function () {
    Vue.$API.Initialize()
  }
})

Quasar.start(() => {
  vueInstance
})

