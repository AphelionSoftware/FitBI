import fitLayoutPrimary from '../layouts/fit-layout-primary'
import moment from 'moment'
export default [
  { path: '/', component: fitLayoutPrimary, props: true, meta: { homePage: true } }, // Default
  { path: '/callback', name: 'callback', component: () => import('src/pages/auth/callback') }, // Auth0 Callback
  // { path: '/measurements', component: () => import('../pages/stats/statsList') }, // Default
  // { path: '/record',
  //   component: fitLayoutPrimary,
  //   children: [
  //     {
  //       path: 'weigh-in',
  //       name: 'dailyweighin',
  //       component: () => import('../pages/stats/dailyMeasurement.vue'),
  //       props: { measurementDate: new Date() }
  //     }
  //   ]
  // },
  { path: '/program',
    component: fitLayoutPrimary,
    children: [
      {
        path: 'calendar',
        name: 'Calendar',
        component: () => import('../pages/plan/program.plan.calendar')
      }
    ]
  },
  { path: '/stats',
    component: fitLayoutPrimary,
    children: [
      {
        path: 'personedit',
        name: 'PersonEdit',
        component: () => import('../pages/person/person.edit')
      },
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
          measurementDate: new Date(moment(route.params.measurementdateid, 'YYYYMMDD').utc())
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
    props: true,
    children: [
      {
        path: '*',
        component: () => import('../pages/404') // Not found
      }
    ]
  }
]
