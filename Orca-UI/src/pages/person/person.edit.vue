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
        if (+newVal === 0) {
          this.item = {}
        } else {
          this.item = {...{}, ...newVal}
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
      this.$store.dispatch('Stats/savePerson', this.item)

      this.$router.push('/home')
    }
  },
  beforeRouteLeave (to, from, next) {
    let vueThis = this
    let equal = _.reduce(Object.keys(this.item), (memo, key) => {
      return memo && vueThis.item[key] === vueThis.Get_Current_Person[key]
    }, true)
    if (typeof (this.item) === 'undefined' ||
      equal) {
      next()
    } else {
      // this.testEmpty()
      var store = this.$store
      let router = this.$router
      let fnSave = function (redirect) {
        store.dispatch('Stats/savePerson', vueThis.item).then(() => {
          vueThis.$fit.notifyPerSecond({
            html: 'Details saved',
            icon: 'fa-thumbs-up',
            timeout: 2400,
            color: '#99d8c9',
            bgColor: 'white'
          })
          if (redirect === true) {
            router.push('/home')
          }
        })
      }
      this.uiSaveAction(next, fnSave)
    }
  },
  mounted () {
    // this.$API.Initialize()
    // let payload = {
    //   PersonID: this.Personid
    // }
    var store = this.$store
    // let router = this.$router
    let vueThis = this
    let router = this.$router
    let fnSave = function () {
      store.dispatch('Stats/savePerson', vueThis.item)
      router.push('/home')
    }
    this.$store.commit('AppState/SET_SAVE', fnSave)
    this.item = {...{}, ...this.Get_Current_Person}
  },
  beforeDestroy () {
    this.$store.commit('AppState/CLEAR_SAVE')
  }
}
</script>
