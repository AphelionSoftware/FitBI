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
      'Core', ['MeasurementControl', 'MeasurementType', 'BodyPart']
    ),
    ...mapState(
      'Stats', ['MetricSet']
    ),
    ...mapGetters('Stats',
      ['Get_MetricValues_By_MetricDetailID',
        'Get_MetricDetails_BySet']),
    metricSetItem () {
      return this.MetricSet[this.metricSetID]
    },
    LatestValues () {
      // No need to maintain a working copy of the original values, as the Latest is where we retrieved them from anyway
      // Otherwise we'd need to store the initial values here to keep it.
      return this.Get_MetricValues_By_MetricDetailID
    },
    metricDetailList () {
      let MetricSetID = this.metricSetID
      let BodyPart = this.BodyPart
      let MeasurementType = this.MeasurementType
      let MeasurementControl = this.MeasurementControl
      let LatestValues = this.LatestValues
      /// TODO: How on earth does it make it back to Vuex from here??
      let metricDetails = _.chain(this.Get_MetricDetails_BySet)
        .filter(item => {
          return item.MetricSetID === MetricSetID
        })
        .map(item => {
          let ret = {...item}
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
      return metricDetails
    }
  },
  methods: {
    updateMeasurements (payload) {
      debugger
      // let extant = _.find(this.Get_MetricValues_By_MetricDetailID[payload.MetricDetailID], item => {
      //   return item.MeasurementDate === payload.MeasurementDate
      // })
      // this.$store.commit('Stats/SET_METRICVALUE_PROPERTIES', payload)
    },
    saveMeasurements (payload) {
      debugger
      _.each(payload, item => {
        this.$store.commit('Stats/SET_METRICVALUE_PROPERTIES', payload)
      })
    }
    // setFavorite (payload) {
    //   this.$store.dispatch('UserSettings/updateFavorite', {keyName: 'MetricSetID', module: 'Core', MetricSetID: payload.MetricSetID, isFavorite: payload.isFavorite})
    // }
  }
}
</script>
