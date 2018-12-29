<template>
   <!-- Navigation -->
   <q-layout>
     <div slot="toolButtons"> <q-btn flat @click="$refs.layout.toggleRight()">
      <q-icon name="fa-close" />
    </q-btn>
     </div>
 <div class="layout-padding">
        <q-input v-model="Code" stack-label="Code" />
   <q-input v-model="Name" stack-label="Name" />
   <!--<q-input v-model.lazy="Description" stack-label="Description" type="textarea"/>-->
    </div>
   </q-layout>
</template>
<script>

// import { required } from 'vuelidate/lib/validators'
import { mapFields } from 'vuex-map-fields'
// import hljs from 'highlight.js'
// import hljs from 'highlight.js'
// import 'highlight.js/styles/monokai-sublime.css'
// import VueQuillEditor, { Quill } from 'vue-quill-editor'
// import Vue from 'vue'

import uiMixin from '../../mixins/ui/ui'
import { mapState, mapGetters } from 'vuex'

// import { ImageDrop } from 'quill-image-drop-module'

// Vue.use(VueQuillEditor, {
//   components: {Quill}
// })

export default {
  props: {
    exercisetypeid: {
      type: String,
      required: true
    }
  },
  mixins: [uiMixin],
  computed: {
    ...mapFields({
      Name: 'Exercise.ExerciseTypeItem.Name',
      Code: 'Exercise.ExerciseTypeItem.Code',
      Description: 'Exercise.ExerciseTypeItem.Description'
    }),
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
    onEditorChange ({ editor, html, text }) {
      // console.log('editor change!', editor, html, text)
      let ExerciseType = this.$store.getters['Exercise/Get_ExerciseType_Item']
      ExerciseType.Description = html
      this.$store.commit('Exercise/SET_EXERCISETYPEITEM', ExerciseType)
    },
    saveAction () {
      debugger
      this.$store.dispatch('Exercise/saveExerciseType', this.$store.state.Exercise.ExerciseTypeItem)
    }
  },
  data () {
    return {
    }
  },
  beforeRouteLeave (to, from, next) {
    if (typeof this.$store.state.Exercise.ExerciseTypeItem === 'undefined' ||
      typeof (this.$store.state.Exercise.ExerciseTypeItem.ExerciseTypeID) === 'undefined' ||
    this.$_.isEqual(this.$store.state.Exercise.ExerciseType[this.$store.state.Exercise.ExerciseTypeItem.ExerciseTypeID],
      this.$store.state.Exercise.ExerciseTypeItem)) {
      next()
    } else {
      // this.testEmpty()
      var store = this.$store
      let fnSave = function () {
        store.dispatch('Exercise/saveExerciseType', store.state.Exercise.ExerciseTypeItem)
      }
      this.uiSaveAction(next, fnSave)
    }
  },
  mounted () {
    debugger
    // this.$API.Initialize()
    let payload = {
      ExerciseTypeID: this.exercisetypeid
    }
    this.$store.commit('Exercise/GET_EXERCISETYPE', payload)
    // Set the save action to enable the toolbar save button
    var store = this.$store
    let router = this.$router
    let fnSave = function () {
      store.dispatch('Exercise/saveExerciseType', store.state.Exercise.ExerciseTypeItem)
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
