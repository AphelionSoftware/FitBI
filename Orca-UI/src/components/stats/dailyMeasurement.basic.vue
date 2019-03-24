<template>
<q-page><q-page-sticky position="top-right" :offset="[8, 80]">
    <q-popover ref="measureDatePopover">
      <div class="full-width">
      <q-btn icon="fa fa-check" @click="updateDate" class="float-right"></q-btn>
      </div>
      <q-datetime-picker v-model="dailyMeasurement.MeasurementDate" type="date"/>
    </q-popover>
  </q-page-sticky>
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
        <q-item-main class="row wrap justigy-center">
          <div class="col knob-dial">
            <div class="column small-label">
              Body Fat %
              <q-knob slot="subtitle"
            v-model="BodyFatEstimate"
            :min="0"
            :max="1"
            :color="BodyFatEstimate > .5 ? 'grey-7' : BodyFatEstimate > .4 ? 'deep-purple-11' : BodyFatEstimate > .3 ? 'red' : BodyFatEstimate > .25 ? 'deep-orange' : BodyFatEstimate > .2 ? 'amber' : BodyFatEstimate > .15 ? 'lime' : BodyFatEstimate > .1 ? 'green' : BodyFatEstimate > .05 ? 'blue-grey' : 'purple-14' "
            :readonly="true"
            size="80px"
            class="small-label"
          ><span style="max-width: 70px;" class="row flex-center content-center">{{BFFormatted}}
          <small>({{PrevBFFormatted}})</small></span>
          </q-knob>
            </div>
          </div>
          <div class="col knob-dial">
            <div class="column small-label">
              Fat Free Mass
            </div>
            <div>
              <q-knob
              v-model="FFM"
              :min="0"
              :max="dailyMeasurement.Weight"
              :color="FFM - PrevFFM > 0.5 ? 'light-green-8' : PrevFFM - FFM > 0.5 ? 'deep-orange-9' : 'blue-grey-5'"
              :readonly="true"
              size="80px"
              class="small-label"
            ><span style="max-width: 70px;" class="row flex-center content-center">{{FFMFormatted}}
            <small>({{PrevFFMFormatted}})</small></span>
            </q-knob>
              </div>
          </div>
          <div class="col knob-dial">
            <div  class="column small-label">
              Fat Mass
            </div>
            <div>
              <q-knob
              v-model="BFM"
              :min="0"
              :max="dailyMeasurement.Weight"
              :color="BFM - PrevBFM > 0.5 ? 'deep-orange-9' : PrevBFM - BFM > 0.5 ? 'light-green-8' : 'blue-grey-5'"
              :readonly="true"
              size="80px"
              class="small-label"
            ><span style="max-width: 70px;" class="row flex-center content-center">{{BFMFormatted}}
            <small>({{PrevBFMFormatted}})</small></span>
            </q-knob>
            </div>
          </div>
          <div class="col knob-dial">
            <div  class="column small-label">
              Waist / Height
            </div>
            <div>
              <q-knob
              v-model="WHR"
              :min="0"
              :max="1"
              :color="WHR > 0.7 ? 'red-14' : WHR > 0.6 ? 'deep-orange-9' : WHR > 0.5 ? 'amber-8' : WHR > 0.4 ? 'light-green-8' : 'blue-grey-5'"
              :readonly="true"
              size="80px"
              class="small-label"
            ><span style="max-width: 70px;" class="row flex-center content-center">{{WHRFormatted}}
            <small>({{PrevWHRFormatted}})</small></span>
            </q-knob>
            </div>
          </div>
          <div class="col knob-dial">
            <div  class="column small-label">
              BMI
            </div>
            <div>
              <q-knob
              v-model="BMI"
              :min="0"
              :max="50"
              :color="BMI > 39 ? 'red-14' : BMI > 29 ? 'deep-orange-9' : BMI > 25 ? 'amber-8' : BMI > 18 ? 'light-green-8' : 'blue-grey-5'"
              :readonly="true"
              size="80px"
              class="small-label"
            ><span style="max-width: 70px;" class="row flex-center content-center">{{BMIFormatted}}
            <small>({{PrevBMIFormatted}})</small></span>
            </q-knob>
            </div>
          </div>
          </q-item-main>
      </q-item>
    </q-list>
</q-page>
</template>
<script>
import numeral from 'numeral'
import moment from 'moment'
import numericSlider from 'src/components/inputs/numeric.slider'
import _ from 'underscore'
import {ActionSheet, Notify} from 'quasar'
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
    },
    extantDateIDs: {
      type: Array,
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
          Height: 0, // this.value.Height
          MeasurementDate: new Date()
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
        this.$emit('input', this.dailyMeasurement)
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
        if (this.dailyMeasurement.Height !== 0 && this.dailyMeasurement.Height !== null && typeof this.dailyMeasurement.Height !== 'undefined') {
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
    },
    WHR: {
      get: function () {
        if (+this.dailyMeasurement.Height > 0) {
          let height = this.dailyMeasurement.Height
          let belly = this.dailyMeasurement.BellyButtonCircumference
          let ret = belly / height
          return ret
        } else {
          return 1 / 0
        }
      },
      set: () => {}
    },
    PrevWHR: {
      get: function () {
        if (+this.dailyMeasurement.Height > 0) {
          let height = this.dailyMeasurement.Height
          let belly = this.previousMeasurement.BellyButtonCircumference
          let ret = belly / height
          return ret
        } else {
          return 1 / 0
        }
      },
      set: () => {}
    },
    WHRFormatted () {
      return numeral(this.WHR).format('0.00')
    },
    PrevWHRFormatted () {
      return numeral(this.PrevWHR).format('0.00')
    },
    BMI: {
      get: function () {
        if (+this.dailyMeasurement.Height > 0) {
          let height = this.dailyMeasurement.Height
          let weight = this.dailyMeasurement.Weight
          let ret = weight / height / height * 10000
          return ret
        } else {
          return 1 / 0
        }
      },
      set: () => {}
    },
    PrevBMI: {
      get: function () {
        if (+this.dailyMeasurement.Height > 0) {
          let height = this.dailyMeasurement.Height
          let weight = this.previousMeasurement.Weight
          let ret = weight / height / height * 10000
          return ret
        } else {
          return 1 / 0
        }
      },
      set: () => {}
    },
    BMIFormatted () {
      return numeral(this.BMI).format('0.00')
    },
    PrevBMIFormatted () {
      return numeral(this.PrevBMI).format('0.00')
    }
  },
  methods: {
    showDatePicker () {
      this.$refs.measureDatePopover.show()
    },
    updateDate () {
      if (typeof this.dailyMeasurement.MeasurementDate !== 'undefined' && this.dailyMeasurement.MeasurementDate !== null && moment(this.value.MeasurementDate).format('YYYYMMDD') !== moment(this.dailyMeasurement.MeasurementDate).format('YYYYMMDD') &&
        this.extantDateIDs.indexOf(moment(this.dailyMeasurement.MeasurementDate).format('YYYYMMDD')) > -1) {
        let vueThis = this
        ActionSheet.create({
          title: 'Date already has data',
          gallery: true,
          actions: [
            {
              label: 'Override existing data',
              // Choose one of the following two:
              icon: 'fa fa-save', // specify ONLY IF using icon
              handler: function () {
                // store.dispatch('DailyMeasurement/Save_DailyMeasurement')
                vueThis.updateMeasurement()
              }
            },
            {
              label: 'Cancel changes and go to that day ',
              // Choose one of the following two:
              icon: 'fa fa-angle-double-right', // specify ONLY IF using icon
              handler: function () {
                // store.dispatch('DailyMeasurement/Save_DailyMeasurement')
                // vueThis.updateMeasurement()
                vueThis.dailyMeasurement = vueThis.value.MeasurementDate
                vueThis.updateMeasurement()
              }
            },
            {
              label: 'Cancel',
              icon: 'fa fa-ban', // specify ONLY IF using icon
              handler: function () {
                vueThis.dailyMeasurement.MeasurementDate = vueThis.value.MeasurementDate
              }
            }
          ]})
      } else {
        this.updateMeasurement()
      }
    },
    updateMeasurement () {
      this.$emit('input', this.dailyMeasurement)
    }
  },
  created () {
  },
  mounted () {
    this.$emit('input', this.dailyMeasurement)
  },
  beforeDestroy () {
  }
}
</script>
<style>
/* This is where your CSS goes */
.q-item .small-label {
  font-size: 14px
}
.q-item .content-center .small-label {
  font-size: 14px
}
.col.knob-dial {
  min-width: 80px
}
</style>
