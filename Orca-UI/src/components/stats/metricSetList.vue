<template>
  <div>
  <!-- <q-collapsible icon="" label="Body weight" v-model="bwOpen">
  </q-collapsible> -->
  <q-card v-for="(item, key) in metricSetSorted" :key="item.MetricSetID">
    <q-item>
      <q-item-side>
        <q-item-tile class="cursor-pointer" style="font-size:18px" color="yellow" :icon="item.isFavorite ? 'fas fa-star' : 'far fa-star'" @click.native="setFavorite(item)" />
        <!-- /// TODO: take measurementdateid out of here, it doesn't make sense -->
         <q-item-tile class="cursor-pointer" color="primary" icon="play for work" @click.native="navigate(item)"/>
      </q-item-side>
      <q-item-main>
        <q-collapsible :label="item.Name" :icon="item.icon" v-model="collapsed[key]">
           <q-card-main>
            {{item.Description}}
          </q-card-main>
        </q-collapsible>
      </q-item-main>
    </q-item>
    </q-card>
  </div>
</template>

<script>
import _ from 'underscore'
export default {
  props: {
    metricSetList: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      collapsed: {}
    }
  },
  computed: {
    metricSetSorted () {
      /// TODO: Fix sorting of metrics by favorites
      return _.chain(this.metricSetList)
        .sortBy('isFavorite')
        .sortBy('Name')
        .value()
    }
  },
  methods: {
    setFavorite (item) {
      this.$emit('setfavorite', {MetricSetID: item.MetricSetID, isFavorite: !item.isFavorite})
    },
    navigate (item) {
      this.$router.push({name: 'metricsettakemeasurement', params: {metricSetID: item.MetricSetID, measurementdateid: '20180309'}})
    }
  }
}
</script>
