<template>
  <q-list inset-separator class="no-border">
    <q-item class="q-mx-sm">
        <q-item-main label="Weight">
          <!-- {{previousMeasurement}} -->
        <q-item-tile sublabel>
        <numeric-slider color="primary"
            v-model="dailyMeasurement.Weight"
            :min="0"
            :max="145"
            :adjustment="0.1"
            @change="updateMeasurement"
        />
        </q-item-tile>
        </q-item-main>
    </q-item>
    <q-item class="q-mx-sm">
        <q-item-main label="Neck">
        <q-item-tile sublabel>
          <numeric-slider color="primary"
            v-model="dailyMeasurement.NeckCircumference"
            :min="0"
            :max="60"
            :adjustment="0.5"
            @change="updateMeasurement"
        />
        </q-item-tile>
        </q-item-main>
    </q-item>
    <q-item class="q-mx-sm">
        <q-item-main label="Belly-button">
        <q-item-tile sublabel>
          <numeric-slider color="primary"
            v-model="dailyMeasurement.BellyButtonCircumference"
            :min="0"
            :max="145"
            :adjustment="0.5"
            @change="updateMeasurement"
        />
        </q-item-tile>
        </q-item-main>
    </q-item>
    <q-item>
      <q-item-main class="row">
        <div class="col">
          <div class="column">
            Body Fat %
            <q-knob slot="subtitle"
          v-model="BodyFatEstimate"
          :min="0"
          :max="1"
          :color="BodyFatEstimate > .5 ? 'grey-7' : BodyFatEstimate > .4 ? 'deep-purple-11' : BodyFatEstimate > .3 ? 'red' : BodyFatEstimate > .25 ? 'deep-orange' : BodyFatEstimate > .2 ? 'amber' : BodyFatEstimate > .15 ? 'lime' : BodyFatEstimate > .1 ? 'green' : BodyFatEstimate > .05 ? 'blue-grey' : 'purple-14' "
          :readonly="true"
        ><span style="max-width: 70px;" class="row flex-center content-center">{{BFFormatted}}
        <small>({{PrevBFFormatted}})</small></span>
        </q-knob>
          </div>
        </div>
        <div class="col">
          <div  class="column">
            Fat Free Mass
          </div>
          <div>
            <q-knob
          v-model="FFM"
          :min="0"
          :max="dailyMeasurement.Weight"
          :color="FFM - PrevFFM > 0.5 ? 'light-green-8' : PrevFFM - FFM > 0.5 ? 'deep-orange-9' : 'blue-grey-5'"
          :readonly="true"
        ><span style="max-width: 70px;" class="row flex-center content-center">{{FFMFormatted}}
        <small>({{PrevFFMFormatted}})</small></span>
        </q-knob>
          </div>
        </div>
        <div class="col">
          <div  class="column">
            Fat Mass
          </div>
          <div>
            <q-knob
          v-model="BFM"
          :min="0"
          :max="dailyMeasurement.Weight"
          :color="BFM - PrevBFM > 0.5 ? 'deep-orange-9' : PrevBFM - BFM > 0.5 ? 'light-green-8' : 'blue-grey-5'"
          :readonly="true"
        ><span style="max-width: 70px;" class="row flex-center content-center">{{BFMFormatted}}
        <small>({{PrevBFMFormatted}})</small></span>
        </q-knob>
          </div>
        </div>
        </q-item-main>
    </q-item>
  </q-list>
</template>
<script>
import numeral from 'numeral'
import numericSlider from 'src/components/inputs/numeric.slider'
import _ from 'underscore'
import {Notify} from 'quasar'
export default {
  components: {
    numericSlider
  },
  props: {
    value: {
      type: Object,
      required: true
    },
    previousMeasurement: {
      type: Object,
      required: false
    }
  },
  data:
    function () {
      return {
        dailyMeasurement: {
          NeckCircumference: 0, // this.value.NeckCircumference || 0,
          BellyButtonCircumference: 0, // this.value.BellyButtonCircumference || 0,
          Weight: 0, // this.value.Weight,
          Height: 0 // this.value.Height
        }
      }
    },
  watch: {
    value: {
      immediate: true,
      deep: true,
      handler: function (newVal, oldVal) {
        this.dailyMeasurement = {...this.dailyMeasurement, ...newVal}
        let daily = this.dailyMeasurement
        _.each(Object.keys(newVal), key => {
          if (typeof daily[key] === 'undefined' || daily[key] === 0) {
            daily[key] = newVal[key]
          }
        })
      }
    },
    previousMeasurement: {
      immediate: true,
      handler: function (newVal, oldVal) {
        let daily = this.dailyMeasurement
        _.each(Object.keys(newVal), key => {
          if (typeof daily[key] === 'undefined' || daily[key] === 0) {
            daily[key] = newVal[key]
          }
        })
      }
    }
  },
  computed: {
    BodyFatEstimate: {
      get: function () {
        if (this.dailyMeasurement.Height !== 0) {
          let height = this.dailyMeasurement.Height
          let belly = this.dailyMeasurement.BellyButtonCircumference
          let neck = this.dailyMeasurement.NeckCircumference
          let ret = (86.01 * Math.log10((belly - neck) / 2.54) - 70.041 * Math.log10(height / 2.54) + 36.76) / 100
          return ret
        } else {
          Notify.create({message: `For these calcs to work, go to personal settings to set your height`})
          return 1 / 0
        }
      },
      set: () => {}
    },
    PrevBodyFatEstimate () {
      if (this.dailyMeasurement.Height !== 0) {
        let height = this.dailyMeasurement.Height
        let belly = this.previousMeasurement.BellyButtonCircumference
        let neck = this.previousMeasurement.NeckCircumference
        let ret = (86.01 * Math.log10((belly - neck) / 2.54) - 70.041 * Math.log10(height / 2.54) + 36.76) / 100
        return ret
      } else {
        return 1 / 0
      }
    },
    BFFormatted () {
      return numeral(this.BodyFatEstimate).format('0.00%')
    },
    FFM: {
      get: function () {
        return this.dailyMeasurement.Weight * (1 - this.BodyFatEstimate)
      },
      set: () => {}
    },
    PrevFFM () {
      return this.previousMeasurement.Weight * (1 - this.PrevBodyFatEstimate)
    },
    PrevBFFormatted () {
      return numeral(this.PrevBodyFatEstimate).format('0.00%')
    },
    FFMFormatted () {
      return numeral(this.FFM).format('0.00') + ' kg'
    },
    PrevFFMFormatted () {
      return numeral(this.PrevFFM).format('0.00')
    },
    BFM: {
      get: function () {
        return this.dailyMeasurement.Weight * this.BodyFatEstimate
      },
      set: () => {}
    },
    PrevBFM () {
      return this.previousMeasurement.Weight * this.PrevBodyFatEstimate
    },
    BFMFormatted () {
      return numeral(this.BFM).format('0.00') + ' kg'
    },
    PrevBFMFormatted () {
      return numeral(this.PrevBFM).format('0.00')
    }
  },
  methods: {
    updateMeasurement () {
      this.$emit('input', this.dailyMeasurement)
    }
  },
  created () {
  },
  mounted () {
  },
  beforeDestroy () {
  }
}
</script>
<style>
/* This is where your CSS goes */
</style>
