import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from './vuex/store'

Vue.use(VueRouter)

function load (component) {
  return () => System.import(`components/${component}.vue`)
}

export default new VueRouter({
  /*
   * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with "history" mode, please also open /config/index.js
   * and set "build.publicPath" to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * If switching back to default "hash" mode, don't forget to set the
   * build publicPath back to '' so Cordova builds work again.
   */

  routes: [
    { path: '/', component: load('fit-layout-primary') }, // Default
    { path: '/weight', component: load('pages/fit-weight') }, // Default
    { path: '/measurements', component: load('pages/fit-measurements') }, // Default
    { path: '/record',
      component: load('fit-layout-primary'),
      children: [
        {
          path: 'weigh-in',
          component: load('pages/stats/dailyMeasurement'),
          props: true,
          beforeEnter: (to, from, next) => {
            // store.dispatch('DailyMeasurement/Set_NewDailyMeasurement')
            next()
          }
        },
        {
          path: 'workout',
          component: load('pages/fit-weight')
        }
      ]
    },
    { path: '/kb',
      component: load('fit-layout-primary'),
      children: [
        {
          path: 'exercises',
          name: 'exercises',
          component: load('pages/fit-exercises')
        },
        {
          path: 'exercise.edit/:exerciseid',
          component: load('pages/kb/exercise.edit'),
          props: true,
          name: 'editExercise'
        },
        {
          path: 'exerciseTypes',
          name: 'exerciseTypes',
          component: load('pages/kb/exerciseTypes')
        },
        {
          path: 'exerciseTypes.edit/:exercisetypeid',
          component: load('pages/kb/exerciseType.edit'),
          props: true,
          name: 'editExerciseType'
        }
      ]
    },
    { path: '*',
      component: load('fit-layout-primary'),
      children: [
        {
          path: '*',
          component: load('Error404') // Not found
        }
      ]
    }
  ]
})
