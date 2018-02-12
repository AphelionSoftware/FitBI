<template>
   <!-- Navigation -->
   
   <q-layout>
  
 <div class="layout-padding">   
   <q-icon name="fa-save" @click="saveMeasurement" class="cursor-pointer" style="font-sizeL:28px;margin-left:84px"/>
   <q-list inset-separator class="no-border">
    <q-item>
        <q-item-main label="Weight">
        <q-item-tile sublabel>
        <q-knob color="primary"
            v-model="Weight"
            :min="minWeight"
            :max="maxWeight"
        />    
        </q-item-tile>
        </q-item-main>
    </q-item>
    <q-item>
        <q-item-main label="Neck">
        <q-item-tile sublabel>
          <q-knob color="primary"
            v-model="NeckTapeLength"
            :min="minNeck"
            :max="maxNeck"
        />                
        </q-item-tile>
        </q-item-main>
    </q-item>
    <q-item>
        <q-item-main label="Belly-button">
        <q-item-tile sublabel>
          <q-knob color="primary"
            v-model="BellyTapeLength"
            :min="minBelly"
            :max="maxBelly"
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
import { ActionSheet, Toast } from 'quasar'
var minNeck = 0, maxNeck = 0, minBelly = 0, maxBelly = 0, minWeight = 0, maxWeight = 0
export default {
  computed: {
    ...mapFields({
      Weight: 'DailyMeasurement.WeightMeasurement.Weight',
      NeckTapeLength: 'DailyMeasurement.NeckTapeMeasurement.TapeLength',
      BellyTapeLength: 'DailyMeasurement.BellyTapeMeasurement.TapeLength'
    }),
    minNeck: function () {
      if (minNeck === 0) minNeck = this.$store.state.DailyMeasurement.NeckTapeMeasurement.TapeLength - 20
      return minNeck
    },
    maxNeck: function () {
      if (maxNeck === 0) maxNeck = this.$store.state.DailyMeasurement.NeckTapeMeasurement.TapeLength + 15
      return maxNeck
    },
    minBelly: function () {
      if (minBelly === 0) minBelly = this.$store.state.DailyMeasurement.BellyTapeMeasurement.TapeLength - 40
      return
    },
    maxBelly: function () {
      if (maxBelly === 0) maxBelly = this.$store.state.DailyMeasurement.BellyTapeMeasurement.TapeLength + 25
      return maxBelly
    },
    minWeight: function () {
      if (minWeight === 0) minWeight = this.$store.state.DailyMeasurement.WeightMeasurement.Weight - 40
      return minWeight
    },
    maxWeight: function () {
      if (maxWeight === 0) maxWeight = this.$store.state.DailyMeasurement.WeightMeasurement.Weight + 25
      return maxWeight
    }
  },
  mounted () {
  },
  methods: {
    saveMeasurement: function () {
      this.$store.dispatch('DailyMeasurement/Save_DailyMeasurement')
      Toast.create({
        html: 'Measurements saved',
        icon: 'fa-thumbs-up',
        timeout: 2400,
        color: '#99d8c9',
        bgColor: 'white'
      })
    }
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
