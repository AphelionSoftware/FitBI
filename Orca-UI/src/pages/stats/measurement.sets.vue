<template>
    <!-- <metricSetList>
    </metricSetList> -->
    <metric-set-list-data>
      <div slot-scope="{metricSet, setFavorite}">
        <metricSetList :metricSetList="metricSet" @setfavorite="setFavorite">
        </metricSetList>
      </div>
    </metric-set-list-data>
</template>

<script>
import metricSetListData from '../../renderless/stats/metricSetList.data'
import metricSetList from '../../components/stats/metricSetList'
export default {
  // props: {
  //   measurementDate: {
  //     type: Date,
  //     required: false
  //   }
  // },
  components: {
    metricSetList,
    metricSetListData
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
