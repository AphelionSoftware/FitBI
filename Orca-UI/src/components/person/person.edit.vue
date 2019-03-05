<template>
      <div class="layout-padding">
   <q-input v-model="item.FirstName" stack-label="FirstName" @change="update"/>
   <q-input v-model="item.Surname" stack-label="Surname"  @change="update"/>
   <q-input v-model="item.Height" :decimals="2" type="number" stack-label="Height"  @change="update"/>
   <q-datetime v-model="item.DateOfBirth" type="date" float-label="Date of birth"  @blur="countDateChange = 0" @input="++countDateChange"/>
    </div>
</template>
<script>
import Multiselect from 'vue-multiselect'
// import hljs from 'highlight.js'
export default {
  components: {
    Multiselect
  },
  props: {
    value: {
      type: Object,
      required: false
    }
  },
  data () {
    return {
      item: {},
      countDateChange: 0
    }
  },
  watch: {
    countDateChange: {
      handler: function (newVal, oldVal) {
        if (newVal === 5) {
          this.$q.notify('You can click on the year to fast track selecting a year further back')
        }
      }
    },
    value: {
      immediate: true,
      deep: true,
      handler: function (newVal, oldVal) {
        if (+newVal === 0) {
          this.item = {
            DateOfBirth: new Date('1990-01-01')
          }
        } else {
          this.item = newVal
        }
      }
    }
  },
  computed: {
    // editor () {
    //   return this.$refs.quillExerciseType.quill
    // }
  },
  methods: {
    onEditorChange ({ editor, html, text }) {
      this.update()
    },
    update () {
      this.$emit('input', this.item)
    }
  }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<!-- <style src='/src/static/css/quill.snow.css'></style>-->
// <style lang="scss" scoped>
//   .quill-code {
//     border: none;
//     height: auto;
//     > code {
//       width: 100%;
//       margin: 0;
//       padding: 1rem;
//       border: 1px solid #ccc;
//       border-top: none;
//       border-radius: 0;
//       height: 10rem;
//       overflow-y: auto;
//       resize: vertical;
//     }
//   }
// </style>
