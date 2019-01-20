<template>
   <person-edit v-model="item"></person-edit>
</template>
<script>

import { mapState, mapGetters } from 'vuex'
import PersonEdit from '../../components/person/person.edit'
import _ from 'underscore'
import uiMixin from '../../mixins/ui/ui' // Save checks
export default {
  props: {
  },
  data () {
    return {
      item: {}
    }
  },
  components: {
    PersonEdit
  },
  mixins: [uiMixin],
  watch: {
    Get_Current_Person: {
      immediate: true,
      handler: function (newVal, oldVal) {
        debugger
        if (+newVal === 0) {
          this.item = {}
        } else {
          this.item = newVal
        }
      }
    }
  },
  computed: {
    ...mapState(
      'Stats', ['Person']),
    ...mapGetters(
      'Stats', ['Get_Current_Person'])
  },
  methods: {
    saveAction () {
      debugger
      this.$store.dispatch('Stats/savePerson', this.item)
    }
  },
  beforeRouteLeave (to, from, next) {
    let vueThis = this
    let equal = _.reduce(Object.keys(this.item), (memo, key) => {
      return memo
    }, true)
    if (typeof (this.item) === 'undefined' ||
      equal) {
      next()
    } else {
      // this.testEmpty()
      var store = this.$store
      let fnSave = function () {
        debugger
        store.dispatch('Stats/savePerson', vueThis.item)
      }
      this.uiSaveAction(next, fnSave)
    }
  },
  mounted () {
    // this.$API.Initialize()
    // let payload = {
    //   PersonID: this.Personid
    // }
    // this.$store.commit('Stats/GET_Person', payload)
    // Set the save action to enable the toolbar save button
    var store = this.$store
    // let router = this.$router
    let vueThis = this
    let fnSave = function () {
      store.dispatch('Stats/savePerson', vueThis.item)
    }
    this.$store.commit('AppState/SET_SAVE', fnSave)
    this.item = this.Get_Current_Person
  },
  beforeDestroy () {
    this.$store.commit('AppState/CLEAR_SAVE')
  }
}
</script>
