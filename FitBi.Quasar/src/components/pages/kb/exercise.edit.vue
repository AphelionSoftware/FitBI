<template>
   <!-- Navigation -->
   <q-layout>
 <div class="layout-padding">   
   <q-input v-model="Code" stack-label="Code" />
   <q-input v-model="Name" stack-label="Name" />
   <q-input v-model="Description" stack-label="Description" type="textarea"/>
    </div>
   </q-layout>
</template>
<script>

import { mapGetters } from 'vuex'
import { required } from 'vuelidate/lib/validators'
import { mapFields } from '../../../helpers/vuex-map-fields/index'

export default {
  props: {
    exerciseid: {
      type: String
    }
  },
  computed: {
    ...mapFields([
      'Exercise.Exercise.' +/* this.exerciseid */ '3' + '.Name',
      'Exercise.Exercise.' +/* this.exerciseid */ '3' + '.Code',
      'Exercise.Exercise.' +/* this.exerciseid */ '3' + '.Description'
    ]),
    ...mapGetters({
      'getExercise': 'Exercise/Get_Exercise_Current'
    })
    /* getExercise () {
      return this.$store.getters.Exercise.Get_Exercise_ByID(this.$route.params.id)
    } */
  },
  validations: {
    getExercise: {
      Name: { required }
    }
  }
}
</script>
<style>
/* This is where your CSS goes */
</style>
