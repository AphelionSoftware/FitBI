<template>
    <!-- <metricSetItem>
    </metricSetItem> -->
    <metric-set-item-data :metricSetID="+metricSetID">
      <div slot-scope="{metricSetItem, metricDetailList}">
        <metricSetTakeMeasurements v-if="typeof metricSetItem !== 'undefined'" :metricSetItem="metricSetItem" :metricDetailList="metricDetailList">
        </metricSetTakeMeasurements>
      </div>
    </metric-set-item-data>
</template>

<script>
import metricSetItemData from '../../renderless/stats/metricSetItem.data'
import metricSetTakeMeasurements from '../../components/stats/metricSet.takeMeasurements'
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
  methods: {
    debug (value) {
      console.log(value)
      debugger
    }
  },
  computed: {
  }
}
</script>
