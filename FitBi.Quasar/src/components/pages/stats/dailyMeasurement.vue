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
import { ActionSheet } from 'quasar'
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
    if (this.$_.isEqual(
      this.$store.getters['DailyMeasurement/getLatestNeckTapeMeasurement'],
      this.$store.state.DailyMeasurement.NeckTapeMeasurement
    ) && this.$_.isEqual(
      this.$store.getters['DailyMeasurement/getLatestBellyTapeMeasurement'],
      this.$store.state.DailyMeasurement.BellyTapeMeasurement
    ) && this.$_.isEqual(
      this.$store.getters['DailyMeasurement/getLatestWeightMeasurement'],
      this.$store.state.DailyMeasurement.WeightMeasurement
    )) {
      next()
    }
    else {
      /* const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
      if (answer) {
        this.$store.dispatch('DailyMeasurement/Save_DailyMeasurement')
        next()
      }
      else {
        // next(false)
        next(false)
      } */
      let store = this.$store
      ActionSheet.create({
        title: 'Save action',
        gallery: true,
        actions: [
          {
            label: 'Save and exit',
            // Choose one of the following two:
            icon: 'fa-save', // specify ONLY IF using icon
            handler: function () {
              store.dispatch('DailyMeasurement/Save_DailyMeasurement')
              next()
            }
          },
          {
            label: 'Save but stay',
            icon: 'fa-bookmark',
            handler: function () {
              store.dispatch('DailyMeasurement/Save_DailyMeasurement')
            }
          },
          {
            label: 'Cancel',
            icon: 'fa-ban',
            handler: function () {
              next(false)
            }
          },
          {
            label: 'Exit without saving',
            icon: 'fa-times-circle',
            handler: function () {
              next()
            }
          }
        ],
        // optional:
        dismiss: {
          // tell what to do when Action Sheet
          // is dismised (doesn't trigger when
          // any of the actions above are clicked/tapped)
          handler: function () {
            // console.log('Cancelled...')
            next(false)
          }
        }
      })
    }
    // }
  }
}
</script>
<style>
/* This is where your CSS goes */
</style>
