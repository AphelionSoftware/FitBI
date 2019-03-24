<template>
    <!-- <metricSetItem>
    </metricSetItem> -->
    <metric-set-item-data ref="data" :metricSetID="+metricSetID">
      <div slot-scope="{metricSetItem, metricDetailList}">
        <metricSetTakeMeasurements ref="control" v-if="typeof metricSetItem !== 'undefined'" :metricSetItem="metricSetItem" :metricDetailList="metricDetailList">
        </metricSetTakeMeasurements>
      </div>
    </metric-set-item-data>
</template>

<script>
import metricSetItemData from '../../renderless/stats/metricSetItem.data'
import metricSetTakeMeasurements from '../../components/stats/metricSet.takeMeasurements'
import uiMixin from '../../mixins/ui/ui' // Save checks
import _ from 'underscore'
export default {
  props: {
    metricSetID: {
      type: Number,
      required: true
    },
    measurementDate: {
      type: Date,
      required: true
    }
  },
  components: {
    metricSetTakeMeasurements,
    metricSetItemData
  },
  mixins: [uiMixin],
  methods: {
    debug (value) {
      console.log(value)
      debugger
    },
    saveData (msg) {
      if (typeof this.$refs.data !== 'undefined' && typeof this.$refs.control !== 'undefined') {
        debugger
        console.log(this.$refs.data)
        console.log(this.$refs.control)
        this.$refs.data.saveMeasurements({
          MetricSetID: this.metricSetID,
          MeasurementDate: this.measurementDate,
          children: this.$refs.control.metricDetailList
        })
      }
    }
  },
  computed: {
  },
  created () {
    this.$root.$on('save', this.saveData)
  },
  destroyed () {
    this.$root.$off('save')
  },
  beforeRouteLeave (to, from, next) {
    let flagChanges = false
    let control = this.$refs.control
    let data = this.$refs.data
    flagChanges = typeof _.find(control.metricDetailList, newData => {
      let dataItem = data.LatestValues[newData.MetricDetailID]
      // No need to maintain a working copy of the original values, as the Latest is where we retrieved them from anyway
      if (typeof dataItem === 'undefined') {
        if (newData.DecimalValue !== 0 ||
        newData.IntegerValue !== 0 ||
        newData.FloatValue !== 0) return true // A value has been set
        return false // Nothing has been set
      }
      if (newData.DecimalValue !== dataItem.DecimalValue ||
        newData.IntegerValue !== dataItem.IntegerValue ||
        newData.FloatValue !== dataItem.FloatValue // ||
        // newData.BoolValue !== dataItem.BoolValue /// TODO:
      ) return true
      return false // Data is the same
    }) !== 'undefined'
    if (!flagChanges) {
      next()
    } else {
      this.uiSaveAction(next, this.saveData)
    }
  }
}
</script>
