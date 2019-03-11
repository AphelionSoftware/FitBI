<template>
   <!-- Navigation -->
   <q-layout ref="primary_layout">
     <q-layout-header>
    <q-toolbar class="justify-between">
    <q-btn flat @click="left = !left" class="driverjs_01" id="driverjs_01">
      <q-icon name="menu"/>
    </q-btn>
    <q-toolbar-title v-if="left || TitleText === ''">
      Orca {{isHomePage}}
      <span slot="subtitle"> Private pre-alpha only</span>
    </q-toolbar-title>
    <!-- <q-btn flat @click="$refs.layout.toggleRight()">
      <q-icon name="fa fa-square" />
    </q-btn> -->
     <!-- <q-fixed-position corner="top-right" :offset="[18, 24]"> -->
       <q-chip v-if="this.TitleText !== ''" color="tertiary" class="on-left q-ma-md" @click="TitleAction()">{{this.TitleText}}</q-chip>
      <q-btn v-if="typeof this.SaveAction === 'function'" @click="fnSaveAction" icon="fa fa-save" round small color="secondary" style='height:34xp;width:34;margin-top:2px;margin-botton:2px'/>
      <q-btn v-if="typeof this.AddAction === 'function'" @click="fnAddAction" icon="fa fa-plus" round small color="secondary" style='height:34xp;width:34;margin-top:2px;margin-botton:2px'/>
      <router-view name="toolbar"/>
      <q-btn icon="fa fa-user-circle" @click="right = !right"></q-btn>

    <!-- </q-fixed-position> -->
  </q-toolbar>
  </q-layout-header>
  <fit-drawer-left v-model="left"></fit-drawer-left>
  <fit-drawer-right v-model="right"></fit-drawer-right>
  <q-page-container>
    <basicTrends v-if="isHomePage"></basicTrends>
    <router-view/>
  </q-page-container>
  </q-layout>
</template>
<script>
// This is where your Javascript goes
// to define your Vue component, which
// can be a Layout, a Page or your own
// component used throughout the app.
// import { QKnob, QBtn, QIcon } from 'quasar'
// import { QKnob, QIcon, QBtn } from 'quasar'
// import { QTab, QTabs, QTabPane } from 'quasar'
import basicTrends from '../pages/stats/basicTrends'
import {mapState, mapGetters} from 'vuex'
import fitDrawerLeft from './drawers/fit-drawer-left'
import fitDrawerRight from './drawers/fit-drawer-right'
// import {fnIntro} from './driver/intro' /// TODO
export default {
  data: function () {
    return {
      left: true,
      right: false
    }
  },
  components: {
    fitDrawerLeft,
    fitDrawerRight,
    basicTrends
  },
  computed: mapState({
    // arrow functions can make the code very succinct!
    ...mapState(
      'AppState', ['SaveAction', 'AddAction', 'TitleText', 'TitleAction']
    ),
    ...mapGetters(
      'UserSettings', {
        Settings: 'Get_GeneralSetting_ByCode'}
    ),
    ...mapGetters('Stats', [
      'Get_Current_Person'
    ]),
    isHomePage () {
      let ret = this.$route.meta.homePage === true
      return ret
    }
  }),
  methods: {
    fnSaveAction: function () {
      this.$store.getters['AppState/Save']()
    },
    fnAddAction: function () {
      this.$store.getters['AppState/Add']()
    },
    clearLocalStorage: function () {
      // localForage.clearAll()
      this.$store.dispatch('AppState/Clear_LocalForage').then(() => {
        this.$q.notify({message: 'LocalForage cleared'})
      })
      // this.$q.notify({
      //   message: 'Storage cleared',
      //   icon: 'fa-thumbs-up',
      //   timeout: 2400,
      //   type: 'positive',
      //   color: 'positive'
      // })
    }
  },
  mounted () {
    // this.$API.Initialize()
  },
  watch: {
    Get_Current_Person: {
      immmediate: true,
      handler: function (newVal, oldVal) {
        if (typeof newVal !== 'undefined' && typeof oldVal === 'undefined') { // Only fire once
          if (newVal.Height === null || newVal.Height === 0) {
            this.$q.notify('Please enter your height for use in calculations')
            this.$router.push('/stats/personedit')
          }
        }
        if (typeof this.Settings['SHOWINTRO'] === 'undefined' || this.Settings['SHOWINTRO'].BooleanValue) {
          // fnIntro()
        }
      }
    }
  }
}
</script>
<style>
/* This is where your CSS goes */
 .fa {
   font-size: 16px;
 }
.q-chip .q-icon.fa-edit {
  /* background-color: #d6d6d6; */
  color: #5F5F5F
}

.q-chip .fa.q-icon {
   font-size: 16px
}
.q-chip.o-small .fa.q-icon {
   font-size: 12px;
   padding: 2px;
}
.q-chip .o-small.q-icon {
   font-size: 16px;
   padding: 2px;
}
.q-chip.o-xsmall .fa.q-icon {
   font-size: 10px;
   padding: 2px;
}
.o-xsmall.fa.q-icon {
   font-size: 12px;
   padding: 2px;
}
.o-xsmall.q-icon {
   font-size: 16px;
   padding: 2px;
}
</style>
