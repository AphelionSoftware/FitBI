import { createRouter, createWebHistory } from 'vue-router'
import { useExerciseStore } from 'stores/exerciseStore'

const routes = [
  {
    path: '/',
    component: () => import('src/components/fit-layout-primary.vue')
  },
  {
    path: '/weight',
    component: () => import('src/components/pages/fit-weight.vue')
  },
  {
    path: '/measurements',
    component: () => import('src/components/pages/fit-measurements.vue')
  },
  {
    path: '/record',
    component: () => import('src/components/fit-layout-primary.vue'),
    children: [
      {
        path: 'weigh-in',
        component: () => import('src/components/pages/fit-weight.vue')
      },
      {
        path: 'workout',
        component: () => import('src/components/pages/fit-weight.vue')
      }
    ]
  },
  {
    path: '/kb',
    component: () => import('src/components/fit-layout-primary.vue'),
    children: [
      {
        path: 'exercises',
        component: () => import('src/components/pages/fit-exercises.vue')
      },
      {
        path: 'exercise-edit/:exerciseid',
        component: () => import('src/components/pages/kb/exercise.edit.vue'),
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
