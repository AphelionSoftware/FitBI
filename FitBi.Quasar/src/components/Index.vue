<template>
  <q-page>
    <q-toolbar-title>Fitness Record</q-toolbar-title>
    <FitWeightPage />
  </q-page>
</template>

<script>
import FitWeightPage from './pages/FitWeightPage.vue'

export default {
  name: 'IndexPage',
  components: { FitWeightPage },

  mounted () {
    this.$nextTick(() => {
      document.addEventListener('mousemove', this.move)
      document.addEventListener('touchmove', this.move)
    })
  },

  beforeUnmount () {
    document.removeEventListener('mousemove', this.move)
    document.removeEventListener('touchmove', this.move)
  },

  methods: {
    move () {}
  }
}
</script>
