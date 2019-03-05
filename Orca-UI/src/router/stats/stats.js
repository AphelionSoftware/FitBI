import fitLayoutPrimary from 'src/layouts/fit-layout-primary'
import moment from 'moment'
export default [
  { path: '/stats',
    component: fitLayoutPrimary,
    children: [
      {
        path: 'personedit',
        name: 'PersonEdit',
        component: () => import('src/pages/person/person.edit')
      },
      {
        path: 'basictrends',
        name: 'basicTrends',
        component: () => import('src/pages/stats/basicTrends')
      },
      {
        path: 'timeList',
        name: 'timeList',
        component: () => import('src/pages/stats/statsList')
      },
      {
        path: 'dailyMeasurements',
        name: 'dailyMeasurements',
        component: () => import('src/pages/stats/statsList')
      },
      {
        path: 'calculationLibrary',
        name: 'calculationLibrary',
        component: () => import('src/pages/stats/calculationLibraryList'),
        children: [
          {
            path: 'mub',
            name: 'mub',
            component: () => import('src/components/stats/calculationLibrary/muscleUpBaseline')
          }
        ]
      },
      {
        path: 'measurement.sets/:measurementdateid',
        name: 'measurementsetedit',
        component: () => import('src/pages/stats/measurement.sets.vue'),
        props: (route) => ({
          measurementDate: new Date(moment(route.params.measurementdateid, 'YYYYMMDD').utc())
        })
      },
      {
        path: 'measurement.edit/:measurementdateid',
        name: 'dailymeasurementedit',
        component: () => import('src/pages/stats/dailyMeasurement.vue'),
        props: (route) => ({
          measurementDate: new Date(moment(route.params.measurementdateid, 'YYYYMMDD').utc())
          // debugger
          // console.log('src ' + route.params.measurementdateid)
          // console.log(moment(route.params.measurementdateid, 'YYYYMMDD'))
          // moment(route.params.measurementdateid, 'YYYYMMDD')
        })
      }
    ]
  }
]
