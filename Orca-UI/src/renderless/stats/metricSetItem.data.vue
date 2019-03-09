<script>
import { mapState } from 'vuex'
import _ from 'underscore'
export default {
  render () {
    return this.$scopedSlots.default({
      metricSetItem: this.metricSetItem,
      metricDetailList: this.metricDetailList
    })
  },
  props: {
    metricSetID: {
      type: Number,
      required: true
    }
  },
  computed: {
    ...mapState(
      'Core', ['MetricSet', 'MetricDetail', 'MeasurementType', 'BodyPart']
    ),
    metricSetItem () {
      return this.MetricSet[this.metricSetID]
    },
    metricDetailList () {
      let MetricSetID = this.metricSetID
      return _.chain(this.MetricDetail)
        .filter(item => {
          return item.MetricSetID === MetricSetID
        })
        .indexBy('MetricDetailID')
        .value()
    }
  },
  methods: {
    // setFavorite (payload) {
    //   this.$store.dispatch('UserSettings/updateFavorite', {keyName: 'MetricSetID', module: 'Core', MetricSetID: payload.MetricSetID, isFavorite: payload.isFavorite})
    // }
  }
}
</script>
