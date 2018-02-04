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
            v-model="NeckTapeLength"
        />                
        </q-item-tile>
        </q-item-main>
    </q-item>
    <q-item>
        <q-item-main label="Belly-button">
        <q-item-tile sublabel>
          <q-knob color="primary"
            v-model="BellyTapeLength"
        />                
        </q-item-tile>
        </q-item-main>
    </q-item>
    </q-list>
   
    </div>
   </q-layout>
</template>
<script>

// import { required } from 'vuelidate/lib/validators'
import { mapFields } from '../../../helpers/vuex-map-fields/index'
// import Vue from 'vue'
export default {
  computed: {
    ...mapFields([
      'DailyMeasurement.WeightMeasurement.Weight',
      'DailyMeasurement.NeckTapeMeasurement.NeckTapeLength',
      'DailyMeasurement.BellyTapeMeasurement.BellyTapeLength'
    ])
  },
  mounted () {
    // debugger
    // Vue.$API.Initialize()
  },
  beforeRouteLeave (to, from, next) {
    // if (typeof (this.$store.state.Exercise.ExerciseItem.ExerciseID) === 'undefined'
    // /* ||
    // this.$_.isEqual(this.$store.state.Exercise.Exercise[this.$store.state.Exercise.ExerciseItem.ExerciseID],
    //   this.$store.state.Exercise.ExerciseItem)
    //   */
    //   ) {
    //   next()
    // }
    // else {
    const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
    if (answer) {
      this.$store.dispatch('DailyMeasurement/Save_DailyMeasurement')
      next()
    }
    else {
      // next(false)
      next()
    }
    // }
  }
}
</script>
<style>
/* This is where your CSS goes */
</style>
