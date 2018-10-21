import fitLayoutPrimary from '../layouts/fit-layout-primary'
import moment from 'moment'
export default [
  { path: '/', component: fitLayoutPrimary }, // Default
  { path: '/measurements', component: () => import('../pages/stats/statsList') }, // Default
  { path: '/record',
    component: fitLayoutPrimary,
    children: [
      {
        path: 'weigh-in',
        component: () => import('../pages/stats/dailyMeasurement'),
        props: { measurementDate: new Date() },
        beforeEnter: (to, from, next) => {
          // store.dispatch('DailyMeasurement/Set_NewDailyMeasurement')
          next()
        }
      }
    ]
  },
  { path: '/stats',
    component: fitLayoutPrimary,
    children: [
      {
        path: 'timeList',
        name: 'timeList',
        component: () => import('../pages/stats/statsList')
      },
      {
        path: 'dailyMeasurements',
        name: 'dailyMeasurements',
        component: () => import('../pages/stats/statsList')
      },
      {
        path: 'measurement.edit/:measurementdateid',
        name: 'dailymeasurementedit',
        component: () => import('../pages/stats/dailyMeasurement.vue'),
        props: (route) => ({
          measurementDate: moment(route.params.measurementdateid, 'YYYYMMDD')
          // debugger
          // console.log('src ' + route.params.measurementdateid)
          // console.log(moment(route.params.measurementdateid, 'YYYYMMDD'))
          // moment(route.params.measurementdateid, 'YYYYMMDD')
        })
      }
    ]
  },
  { path: '/kb',
    component: fitLayoutPrimary,
    children: [
      {
        path: 'exercises',
        name: 'exercises',
        component: () => import('../pages/kb/exercises')
      },
      {
        path: 'exercise.edit/:exerciseid',
        component: () => import('../pages/kb/exercise.edit'),
        props: true,
        name: 'editExercise'
      },
      {
        path: 'exerciseTypes',
        name: 'exerciseTypes',
        component: () => import('../pages/kb/exerciseTypes')
      },
      {
        path: 'exerciseTypes.edit/:exercisetypeid',
        component: () => import('../pages/kb/exerciseType.edit'),
        props: true,
        name: 'editExerciseType'
      }
    ]
  },
  { path: '*',
    component: fitLayoutPrimary,
    children: [
      {
        path: '*',
        component: () => import('../pages/404') // Not found
      }
    ]
  }
]
