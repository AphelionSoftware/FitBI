<template>
  <q-page class="layout-padding">
    <q-list>
      <q-item-label header>Exercises</q-item-label>
      <q-item v-for="exercise in exercises" :key="exercise.ExerciseID">
        <q-item-section avatar>
          <q-icon
            class="cursor-pointer"
            name="edit"
            @click="$router.push('/kb/exercise-edit/' + exercise.ExerciseID)"
          />
        </q-item-section>
        <q-item-section>{{ exercise.Name }}</q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { computed } from 'vue'
import { useExerciseStore } from 'stores/exerciseStore'

export default {
  name: 'FitExercisesPage',

  setup () {
    const exerciseStore = useExerciseStore()
    const exercises = computed(() => exerciseStore.getExerciseAll)
    return { exercises }
  }
}
</script>
