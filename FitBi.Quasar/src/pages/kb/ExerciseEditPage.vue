<template>
  <q-page class="layout-padding">
    <q-input
      v-model="Name"
      stack-label="Name"
    />
    <q-input
      v-model="Code"
      stack-label="Code"
    />
    <q-input
      v-model.lazy="Description"
      stack-label="Description"
      type="textarea"
    />
  </q-page>
</template>

<script>
import { computed } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'
import { useExerciseStore } from 'stores/exerciseStore'

export default {
  name: 'ExerciseEditPage',

  setup () {
    const store = useExerciseStore()

    const Name = computed({
      get: () => store.exerciseItem.Name,
      set: (v) => { store.exerciseItem.Name = v }
    })
    const Code = computed({
      get: () => store.exerciseItem.Code,
      set: (v) => { store.exerciseItem.Code = v }
    })
    const Description = computed({
      get: () => store.exerciseItem.Description,
      set: (v) => { store.exerciseItem.Description = v }
    })

    onBeforeRouteLeave(async () => {
      const item = store.exerciseItem
      const id = item.ExerciseID
      const saved = id !== undefined && JSON.stringify(store.exercise[id]) === JSON.stringify(item)

      if (saved || id === undefined) {
        return true
      }
      const answer = window.confirm('You have unsaved changes. Save and leave?')
      if (answer) {
        await store.saveExercise()
        return true
      }
      return false
    })

    return { Name, Code, Description }
  }
}
</script>
