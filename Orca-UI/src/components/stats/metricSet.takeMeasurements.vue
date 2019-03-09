<template>
  <div>
  <!-- <q-collapsible icon="" label="Body weight" v-model="bwOpen">
  </q-collapsible> -->
  <q-card v-for="(item) in metricDetailList" :key="item.MetricSetID">
    {{item}}
    </q-card>
  </div>
</template>

<script>
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
  methods: {
    setFavorite (item) {
      this.$emit('setfavorite', {MetricSetID: item.MetricSetID, isFavorite: !item.isFavorite})
    }
  }
}
</script>
