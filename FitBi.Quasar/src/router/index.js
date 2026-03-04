import { createRouter, createWebHistory } from 'vue-router'
import { useExerciseStore } from 'stores/exerciseStore'

const routes = [
  {
    path: '/',
    component: () => import('src/layouts/MainLayout.vue'),
    children: [
      {
        name: 'home',
        path: '',
        redirect: { name: 'weighIn' }
      },
      {
        name: 'weight',
        path: 'weight',
        component: () => import('src/pages/FitWeightPage.vue')
      },
      {
        name: 'measurements',
        path: 'measurements',
        component: () => import('src/pages/FitMeasurementsPage.vue')
      },
      {
        name: 'weighIn',
        path: 'record/weigh-in',
        component: () => import('src/pages/FitWeightPage.vue')
      },
      {
        name: 'workout',
        path: 'record/workout',
        component: () => import('src/pages/FitWeightPage.vue')
      },
      {
        name: 'exercises',
        path: 'kb/exercises',
        component: () => import('src/pages/FitExercisesPage.vue')
      },
      {
        name: 'exerciseEdit',
        path: 'kb/exercise-edit/:exerciseId',
        component: () => import('src/pages/kb/ExerciseEditPage.vue'),
        props: true,
        beforeEnter: (to, _from, next) => {
          const exerciseStore = useExerciseStore()
          exerciseStore.loadExerciseByID(to.params.exerciseId)
          next()
        }
      }
    ]
  },
  {
    name: 'error404',
    path: '/:pathMatch(.*)*',
    component: () => import('src/pages/Error404Page.vue')
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
