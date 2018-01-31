<template>
   <!-- Navigation -->
   <q-layout>
 <div class="layout-padding">   
   <q-list inset-separator class="no-border">
    <q-item>
        <q-item-main label="Weight">
        <q-item-tile sublabel>
        <q-knob color="primary"
            v-model="Weight"
        />    
        </q-item-tile>
        </q-item-main>
    </q-item>
    <q-item>
        <q-item-main label="Neck">
        <q-item-tile sublabel>
          <q-knob color="primary"
            v-model="TapeLength"
        />      
          
        </q-item-tile>
        </q-item-main>
    </q-item>
    </q-list>
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
      'DailyMeasurement.WeightMeasurement.Weight',
      'DailyMeasurement.NeckTapeMeasurement.TapeLength'
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
