<template>
  <div>
  <!-- <q-collapsible icon="" label="Body weight" v-model="bwOpen">
  </q-collapsible> -->
  <q-card v-for="(item, key) in metricSetList" :key="item.MetricSetID">
    <q-item>
      <q-item-side>
        <q-item-tile style="font-size:18px" color="yellow" :icon="item.isFavorite ? 'fas fa-star' : 'far fa-star'" @click.native="setFavorite(item)" />
         <q-item-tile color="primary" icon="play for work" />
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
  methods: {
    setFavorite (item) {
      this.$emit('setfavorite', {MetricSetID: item.MetricSetID, isFavorite: !item.isFavorite})
    }
  }
}
</script>
