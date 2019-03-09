<script>
import { mapState, mapGetters } from 'vuex'
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
      /// TODO: MOve MetricSet and MetricDetail to Stats as they are UI controlled and updateable
      'Core', ['MetricSet', 'MetricDetail', 'MeasurementControl', 'MeasurementType', 'BodyPart']
    ),
    ...mapGetters('Stats',
      ['Get_MetricValues_By_MetricDetailID']),
    metricSetItem () {
      return this.MetricSet[this.metricSetID]
    },
    metricDetailList () {
      let MetricSetID = this.metricSetID
      let BodyPart = this.BodyPart
      let MeasurementType = this.MeasurementType
      let MeasurementControl = this.MeasurementControl
      let LatestValues = this.Get_MetricValues_By_MetricDetailID
      let ret = _.chain(this.MetricDetail)
        .filter(item => {
          return item.MetricSetID === MetricSetID
        })
        .map(item => {
          let ret = item
          if (item.BodyPartID !== null) ret.BodyPartName = BodyPart[item.BodyPartID].Name
          ret.MeasurementTypeName = MeasurementType[item.MeasurementTypeID].Name
          if (MeasurementType[item.MeasurementTypeID].MeasurementControlID !== null) {
            ret.MeasurementControlCode = MeasurementControl[MeasurementType[item.MeasurementTypeID].MeasurementControlID].Code
          }
          let latest = _.chain(LatestValues[item.MetricDetailID])
            // Already sorted so no need
            .last()
            .value()
          if (typeof latest !== 'undefined') {
            ret.IntegerValue = latest.IntegerValue || 0
            ret.DecimalValue = latest.DecimalValue || 0
            ret.FloatValue = latest.FloatValue || 0
          } else {
            ret.IntegerValue = 0
            ret.DecimalValue = 0
            ret.FloatValue = 0
          }
          ret.Name = ret.OverrideName || (ret.BodyPartName || '') + ' ' + ret.MeasurementTypeName
          return ret
        })
        .indexBy('MetricDetailID')
        .value()
      return ret
    }
  },
  methods: {
    // setFavorite (payload) {
    //   this.$store.dispatch('UserSettings/updateFavorite', {keyName: 'MetricSetID', module: 'Core', MetricSetID: payload.MetricSetID, isFavorite: payload.isFavorite})
    // }
  }
}
</script>
