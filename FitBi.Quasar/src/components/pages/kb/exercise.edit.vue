<template>
   <!-- Navigation -->
   <q-layout>
     <div slot="toolButtons"> <q-btn flat @click="$refs.layout.toggleRight()">
      <q-icon name="fa-close" />
    </q-btn>
     </div>
 <div class="layout-padding">   
   
   <q-input v-model="Code" stack-label="Code" />
   <q-input v-model="Name" stack-label="Name" />   
   <q-input v-model.lazy="Description" stack-label="Description" type="textarea"/>

    </div>
   </q-layout>
</template>
<script>

// import { required } from 'vuelidate/lib/validators'
import { mapFields } from '../../../helpers/vuex-map-fields/index'
export default {
  computed: {
    ...mapFields([
      'Exercise.ExerciseItem.Name',
      'Exercise.ExerciseItem.Code',
      'Exercise.ExerciseItem.Description'
    ])
  },
  beforeRouteLeave (to, from, next) {
    if (typeof (this.$store.state.Exercise.ExerciseItem.ExerciseID) === 'undefined' ||
    this.$_.isEqual(this.$store.state.Exercise.Exercise[this.$store.state.Exercise.ExerciseItem.ExerciseID],
      this.$store.state.Exercise.ExerciseItem)) {
      next()
    }
    else {
      const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
      if (answer) {
        this.$store.dispatch('Exercise/saveExercise', this.$store.state.Exercise.ExerciseItem)
        next()
      }
      else {
        next(false)
      }
    }
  }
}
</script>
<style>
/* This is where your CSS goes */
</style>
