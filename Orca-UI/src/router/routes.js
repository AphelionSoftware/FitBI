import fitLayoutPrimary from '../layouts/fit-layout-primary'
import stats from './stats/stats.js'
let baseRoute = [
  { path: '/', component: fitLayoutPrimary, props: true, meta: { homePage: true } }, // Default
  { path: '/home', component: fitLayoutPrimary, props: true, meta: { homePage: true } }, // Default
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
let route = []
route.push(...stats)
route.push(...baseRoute)
export default route
