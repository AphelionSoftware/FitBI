<template>
   <!-- Navigation -->
   <!-- <q-layout>
     <div slot="toolButtons"> <q-btn flat @click="$refs.layout.toggleRight()">
      <q-icon name="fa fa-close" />
    </q-btn>
     </div> -->
 <div>
   <exercise-edit v-model="item" :lookup="Get_ExerciseType_Select" :lookupObject="Get_ExerciseType_SelectObject"></exercise-edit>
  </div>
   <!-- </q-layout> -->
</template>
<script>

// import { required } from 'vuelidate/lib/validators'
// import hljs from 'highlight.js'
// import hljs from 'highlight.js'
// // import 'highlight.js/styles/monokai-sublime.css'
// import VueQuillEditor, { Quill } from 'vue-quill-editor'
// import Multiselect from 'vue-multiselect'
import uiMixin from '../../mixins/ui/ui'
import ExerciseEdit from '../../components/kb/exercise.edit'
import { mapState, mapGetters } from 'vuex'
import _ from 'underscore'
// import { ImageDrop } from 'quill-image-drop-module'

// Vue.use(VueQuillEditor, {
//   components: {Quill}
// })

// Vue.use(Multiselect)

export default {
  components: {
    ExerciseEdit
  },
  props: {
    exerciseid: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      item: {}
    }
  },
  mixins: [uiMixin],
  watch: {
    exerciseid: {
      immediate: true,
      handler: function (newVal, oldVal) {
        if (+newVal === 0) {
          this.item = {}
        } else {
          this.item = this.Exercise[this.exerciseid]
        }
      }
    }
  },
  computed: {
    ...mapState(
      'Exercise', ['Exercise']
    ),
    ...mapGetters(
      'Exercise', ['Get_ExerciseType_Select', 'Get_ExerciseType_SelectObject']
    )
  },
  methods: {
    saveAction () {
      this.$store.dispatch('Exercise/saveExercise', this.item)
    }
  },
  beforeRouteLeave (to, from, next) {
    let store = this.$store
    let vueThis = this
    let equal = _.reduce(Object.keys(this.item), (memo, key) => {
      return memo && (vueThis.Exercise[key] === vueThis.item[key])
    }, true)
    if (typeof (this.item) === 'undefined' ||
      equal) {
      next()
    } else {
      let fnSave = function () {
        store.dispatch('Exercise/saveExercise', vueThis.item)
        vueThis.$fit.notifyPerSecond({
          html: 'Exercise saved',
          icon: 'fa-thumbs-up',
          timeout: 2400,
          color: '#99d8c9',
          bgColor: 'white'
        })
      }
      this.uiSaveAction(next, fnSave)
    }
  },
  mounted () {
    var store = this.$store
    let router = this.$router
    let vueThis = this
    let fnSave = function () {
      store.dispatch('Exercise/saveExercise', vueThis.item)
      this.$fit.notifyPerSecond({
        html: 'Exercise saved',
        icon: 'fa-thumbs-up',
        timeout: 2400,
        color: '#99d8c9',
        bgColor: 'white'
      })
      router.push({name: 'exercises'})
    }
    this.$store.commit('AppState/SET_SAVE', fnSave)
  },
  beforeDestroy () {
    this.$store.commit('AppState/CLEAR_SAVE')
  }
}
</script>
