<template>
   <exercise-type-edit v-model="item"></exercise-type-edit>
</template>
<script>

import { mapState, mapGetters } from 'vuex'
import ExerciseTypeEdit from '../../components/kb/exerciseType.edit'
import _ from 'underscore'
import uiMixin from '../../mixins/ui/ui' // Save checks
export default {
  props: {
    exercisetypeid: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      item: {}
    }
  },
  components: {
    ExerciseTypeEdit
  },
  mixins: [uiMixin],
  watch: {
    exercisetypeid: {
      immediate: true,
      handler: function (newVal, oldVal) {
        if (+newVal === 0) {
          this.item = {}
        } else {
          this.item = this.ExerciseType[this.exercisetypeid]
        }
      }
    }
  },
  computed: {
    ...mapState(
      'Exercise', ['ExerciseType']
    ),
    ...mapGetters(
      'Exercise', ['Get_ExerciseTypeType_Select']
    ),
    editor () {
      return this.$refs.quillExerciseType.quill
    }
  },
  methods: {
    saveAction () {
      debugger
      this.$store.dispatch('Exercise/saveExerciseType', this.item)
    }
  },
  beforeRouteLeave (to, from, next) {
    let vueThis = this
    let equal = _.reduce(Object.keys(this.item), (memo, key) => {
      return memo && (vueThis.ExerciseType[key] === vueThis.item[key])
    }, true)
    if (typeof (this.item) === 'undefined' ||
      equal) {
      next()
    } else {
      // this.testEmpty()
      var store = this.$store
      let fnSave = function () {
        debugger
        store.dispatch('Exercise/saveExerciseType', vueThis.item)
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
    var store = this.$store
    let router = this.$router
    let vueThis = this
    let fnSave = function () {
      store.dispatch('Exercise/saveExerciseType', vueThis.item)
      router.push({name: 'exerciseTypes'})
    }
    this.$store.commit('AppState/SET_SAVE', fnSave)
  },
  beforeDestroy () {
    this.$store.commit('AppState/CLEAR_SAVE')
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<!-- <style src='/src/static/css/quill.snow.css'></style>-->
<style lang="scss" scoped>
  .quill-code {
    border: none;
    height: auto;
    > code {
      width: 100%;
      margin: 0;
      padding: 1rem;
      border: 1px solid #ccc;
      border-top: none;
      border-radius: 0;
      height: 10rem;
      overflow-y: auto;
      resize: vertical;
    }
  }
</style>
