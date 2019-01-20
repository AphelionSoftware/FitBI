<template>
<div>
 <program-calendar ></program-calendar>
</div>
</template>
<script>

import { mapState } from 'vuex'
import ProgramCalendar from '../../components/program/program.calendar'
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
    ProgramCalendar
  },
  mixins: [uiMixin],
  watch: {
    exercisetypeid: {
      immediate: true,
      handler: function (newVal, oldVal) {
        if (+newVal === 0) {
          this.item = {}
        } else {
          // this.item = this.ExerciseType[this.exercisetypeid]
        }
      }
    }
  },
  computed: {
    ...mapState(
      'Program', ['CalendarItem']
    )
  },
  methods: {
    saveAction () {
      // this.$store.dispatch('Exercise/saveExerciseType', this.item)
    }
  },
  beforeRouteLeave (to, from, next) {
    // let vueThis = this
    let equal = _.reduce(Object.keys(this.item), (memo, key) => {
      return memo //  && (vueThis.ExerciseType[key] === vueThis.item[key])
    }, true)
    if (typeof (this.item) === 'undefined' ||
      equal) {
      next()
    } else {
      // this.testEmpty()
      // var store = this.$store
      let fnSave = function () {
        debugger
        // store.dispatch('Exercise/saveExerciseType', vueThis.item)
      }
      this.uiSaveAction(next, fnSave)
    }
  },
  mounted () {
    // this.$API.Initialize()
    // let payload = {
    //   ExerciseTypeID: this.exercisetypeid
    // }
    // this.$store.commit('Exercise/GET_EXERCISETYPE', payload)
    // Set the save action to enable the toolbar save button
    // var store = this.$store
    // let router = this.$router
    // let vueThis = this
    let fnSave = function () {
      // store.dispatch('Exercise/saveExerciseType', vueThis.item)
      // router.push({name: 'exerciseTypes'})
    }
    this.$store.commit('AppState/SET_SAVE', fnSave)
  },
  beforeDestroy () {
    this.$store.commit('AppState/CLEAR_SAVE')
  }
}
</script>
