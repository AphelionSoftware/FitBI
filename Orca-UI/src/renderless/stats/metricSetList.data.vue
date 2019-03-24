<script>
import { mapState } from 'vuex'

export default {
  render () {
    return this.$scopedSlots.default({
      metricSet: this.MetricSet,
      setFavorite: this.setFavorite
    })
  },
  computed: {
    ...mapState(
      'Stats', ['MetricSet']
    )
  },
  methods: {
    setFavorite (payload) {
      this.$store.dispatch('UserSettings/updateFavorite', {keyName: 'MetricSetID', module: 'Core', MetricSetID: payload.MetricSetID, isFavorite: payload.isFavorite})
    }
  }
}
</script>
