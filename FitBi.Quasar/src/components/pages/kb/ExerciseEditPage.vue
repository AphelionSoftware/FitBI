<template>
  <q-page class="layout-padding">
    <q-input v-model="Name" stack-label="Name" />
    <q-input v-model="Code" stack-label="Code" />
    <q-input v-model.lazy="Description" stack-label="Description" type="textarea" />
  </q-page>
</template>

<script>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useExerciseStore } from 'stores/exerciseStore'

export default {
  name: 'ExerciseEditPage',

  setup () {
    const router = useRouter()
    const store = useExerciseStore()

    const Name = computed({
      get: () => store.ExerciseItem.Name,
      set: (v) => { store.ExerciseItem.Name = v }
    })
    const Code = computed({
      get: () => store.ExerciseItem.Code,
      set: (v) => { store.ExerciseItem.Code = v }
    })
    const Description = computed({
      get: () => store.ExerciseItem.Description,
      set: (v) => { store.ExerciseItem.Description = v }
    })

    return { Name, Code, Description }
  },

  beforeRouteLeave (to, from, next) {
    const store = useExerciseStore()
    const item = store.ExerciseItem
    const id = item.ExerciseID
    const saved = id !== undefined && JSON.stringify(store.Exercise[id]) === JSON.stringify(item)

    if (saved || id === undefined) {
      next()
    } else {
      const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
      if (answer) {
        store.saveExercise()
        next()
      } else {
        next(false)
      }
    }
  }
}
</script>
