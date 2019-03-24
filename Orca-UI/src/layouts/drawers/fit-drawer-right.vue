<template>
<q-layout-drawer ref="right" side="right" v-model="internalValue" @input="updateValue">
    <q-list no-border link inset-separator>
    <q-list-header>Account</q-list-header>
      <q-item :to="{name: 'PersonEdit'}">
        <q-item-side icon="fa fa-user-circle" />
        <q-item-main label="Personal Details" />
      </q-item>
      <q-item @click.native="logout()">
        <q-item-side icon="fa fa-sign-out" />
        <q-item-main label="Log out" />
      </q-item>
     </q-list>
    </q-layout-drawer>
</template>
<script>
export default {
//   data: function () {
//     return {
//       left: true
//     }
  data () {
    return {
      internalValue: this.value
    }
  },
  watch: {
    value: {
      immediate: true,
      handler: function (newVal, oldVal) {
        this.internalValue = newVal
      }
    }
  },
  methods: {
    updateValue (newVal) {
      this.internalValue = newVal
      this.$emit('input', this.internalValue)
    },
    logout () {
      this.$store.dispatch('AppState/Clear_LocalForage').then(() => {
        this.$fit.notifyPerSecond({message: 'LocalForage cleared'})
      })
      this.$auth.logout()
    }
  },
  props: {
    value: {
      type: Boolean,
      required: true,
      default: false
    }
  }
}
</script>
