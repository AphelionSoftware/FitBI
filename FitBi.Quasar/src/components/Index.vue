<template>
  <q-layout>
    <div slot="header" class="toolbar">
      <q-toolbar-title :padding="0">
        Fitness Record
      </q-toolbar-title>
    </div>

    <!--
      Replace following "div" with
      "<router-view class="layout-view">" component
      if using subRoutes
    -->
    <div class="layout-view">
      <fit-weight/>
    
    </div>
  </q-layout>
</template>

<script>

// import { Utils } from 'quasar'
// import { weight } from './weight.vue'

export default {
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  },
  mounted () {
    this.$nextTick(() => {
      document.addEventListener('mousemove', this.move)
      document.addEventListener('touchmove', this.move)
    })
  },
  beforeDestroy () {
    document.removeEventListener('mousemove', this.move)
    document.removeEventListener('touchmove', this.move)
  }
}
</script>

<style lang="styl">
</style>
