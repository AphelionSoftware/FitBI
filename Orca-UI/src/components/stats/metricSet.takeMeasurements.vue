<template>
  <div>
  <!-- <q-collapsible icon="" label="Body weight" v-model="bwOpen">
  </q-collapsible> -->
  <q-list inset-separator class="no-border">
  <q-card v-for="(item) in metricDetailList" :key="item.MetricDetailID">
    <div v-if="item.MeasurementControlCode === ''">Blank</div>
    <!-- <q-item-main v-if="item.MeasurementControlCode === 'NUMSLIDER'" label="Weight"> -->
      <q-item class="q-mx-sm">
      <q-item-main :label="item.Name">
      <q-item-tile sublabel>
      <numeric-slider
        color="primary"
        v-model="item.DecimalValue"
        :min="item.MinValue"
        :max="item.MaxValue"
        :adjustment="item.Increment"
        @change="updateMeasurement"
      />
      </q-item-tile>
    </q-item-main>
    </q-item>
    </q-card>
    </q-list>
  </div>
</template>

<script>
import numericSlider from 'src/components/inputs/numeric.slider'
export default {
  props: {
    metricSetItem: {
      type: Object,
      required: true
    },
    metricDetailList: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      collapsed: {}
    }
  },
  components: {
    numericSlider
  },
  methods: {
    updateMeasurement (item) {
      this.$emit('updateMeasurement', {})
    }
  }
}
</script>
