import { createRouter, createWebHistory } from 'vue-router'
import { useExerciseStore } from 'stores/exerciseStore'

const routes = [
  {
    path: '/',
    component: () => import('src/components/FitLayoutPrimary.vue')
  },
  {
    path: '/weight',
    component: () => import('src/components/pages/FitWeightPage.vue')
  },
  {
    path: '/measurements',
    component: () => import('src/components/pages/FitMeasurementsPage.vue')
  },
  {
    path: '/record',
    component: () => import('src/components/FitLayoutPrimary.vue'),
    children: [
      {
        path: 'weigh-in',
        component: () => import('src/components/pages/FitWeightPage.vue')
      },
      {
        path: 'workout',
        component: () => import('src/components/pages/FitWeightPage.vue')
      }
    ]
  },
  {
    path: '/kb',
    component: () => import('src/components/FitLayoutPrimary.vue'),
    children: [
      {
        path: 'exercises',
        component: () => import('src/components/pages/FitExercisesPage.vue')
      },
      {
        path: 'exercise-edit/:exerciseid',
        component: () => import('src/components/pages/kb/ExerciseEditPage.vue'),
        props: true,
        beforeEnter: (to, _from, next) => {
          const exerciseStore = useExerciseStore()
          exerciseStore.getExerciseByID(to.params.exerciseid)
          next()
        }
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('src/components/Error404.vue')
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
