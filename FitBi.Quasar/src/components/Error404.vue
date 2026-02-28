<template>
  <div class="error-page window-height window-width bg-grey-2 column items-center">
    <div class="error-code bg-primary flex items-center justify-center">
      404
    </div>
    <q-btn v-if="canGoBack" flat label="Go back" @click="goBack" />
  </div>
</template>

<script>
export default {
  name: 'Error404',

  data () {
    return {
      canGoBack: window.history.length > 1
    }
  },

  methods: {
    goBack () {
      window.history.go(-1)
    }
  }
}
</script>

<style>
.error-page .error-code {
  height: 50vh;
  width: 100%;
  padding-top: 15vh;
  font-size: 30vmax;
  color: rgba(255, 255, 255, 0.2);
  overflow: hidden;
}
</style>
