import { createRouter, createWebHistory } from 'vue-router'
import { useExerciseStore } from 'stores/exerciseStore'

const routes = [
  {
    path: '/',
    component: () => import('src/layouts/MainLayout.vue')
  },
  {
    path: '/weight',
    component: () => import('src/pages/FitWeightPage.vue')
  },
  {
    path: '/measurements',
    component: () => import('src/pages/FitMeasurementsPage.vue')
  },
  {
    path: '/record',
    component: () => import('src/layouts/MainLayout.vue'),
    children: [
      {
        path: 'weigh-in',
        component: () => import('src/pages/FitWeightPage.vue')
      },
      {
        path: 'workout',
        component: () => import('src/pages/FitWeightPage.vue')
      }
    ]
  },
  {
    path: '/kb',
    component: () => import('src/layouts/MainLayout.vue'),
    children: [
      {
        path: 'exercises',
        component: () => import('src/pages/FitExercisesPage.vue')
      },
      {
        path: 'exercise-edit/:exerciseid',
        component: () => import('src/pages/kb/ExerciseEditPage.vue'),
        props: true,
        beforeEnter: (to, _from, next) => {
          const exerciseStore = useExerciseStore()
          exerciseStore.loadExerciseByID(to.params.exerciseid)
          next()
        }
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('src/pages/Error404Page.vue')
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
