<template>
   <!-- Navigation -->
   <q-layout>
 <div class="layout-padding">
    <q-card>
      <q-card-title style="text-align: right">
        <q-chip color="secondary" @click="minDate = new Date(1900, 1, 1)">All time</q-chip>
        <q-chip color="secondary" @click="setStart(-3, 'y')">3 years</q-chip>
        <q-chip color="secondary" @click="setStart(-1, 'y')">1 year</q-chip>
        <q-chip color="secondary" @click="setStart(-6, 'M')">6 months</q-chip>
        <q-chip color="secondary" @click="setStart(-3, 'M')">3 months</q-chip>
        <q-chip color="secondary" @click="setStart(-1, 'M')">1 month</q-chip>
      </q-card-title>
    </q-card>
   <!-- <q-card>
    <q-card-title>
      Vital stats
    </q-card-title>
    <q-card-main>
      <vue-apex-charts type="line" :height="250" :options="multiChartOptions" :series="multiChartOptions.series" />
    </q-card-main>
  </q-card> -->
  <q-collapsible icon="fa fa-balance-scale" label="Body weight" v-model="bwOpen">
    <vue-apex-charts type="line" :height="250" :options="bwChartOptions" :series="seriesWeights" />
  </q-collapsible>
  <q-collapsible icon="compare_arrows" label="Body fat percentage">
    <vue-apex-charts type="line" :height="250" :options="bfChartOptions" :series="seriesBodyFat" />
  </q-collapsible>
  <q-collapsible icon="compare_arrows" label="Waist / height ratio">
    <vue-apex-charts type="line" :height="250" :options="whrChartOptions" :series="seriesWHR" />
  </q-collapsible>
   <!-- <q-card>
    <q-card-title>
      Body weight
    </q-card-title>
    <q-card-main>
      <vue-apex-charts type="line" :height="250" :options="bwChartOptions" :series="seriesWeights" />
    </q-card-main>
  </q-card>
  <q-card>
    <q-card-title>
      Body fat percentage
    </q-card-title>
    <q-card-main>
      <vue-apex-charts type="line" :height="250" :options="bfChartOptions" :series="seriesBodyFat" />
    </q-card-main>
  </q-card>
  <q-card>
    <q-card-title>
      Waist/Hip Ratio
    </q-card-title>
    <q-card-main>
      <vue-apex-charts type="line" :height="250" :options="whrChartOptions" :series="seriesWHR" />
    </q-card-main>
  </q-card> -->
   <!--<q-card>
     <q-card-title>
      Body weight
    </q-card-title>
     <q-card-main>
      <vue-trend
        :data="weights"
        :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
        auto-draw
        smooth>
      </vue-trend>
    </q-card-main>
  </q-card> -->
  <!-- <q-card>
     <q-card-title>
      Body Fat Estimate
    </q-card-title>
    <q-card-main>
      <vue-trend
        :data="bodyFatEstimate"
        :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
        auto-draw
        smooth>
      </vue-trend>
    </q-card-main>
  </q-card>
  <q-card>
     <q-card-title>
      Waist to Hip Ratio
    </q-card-title>
    <q-card-main>
      <vue-trend
        :data="whr"
        :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
        auto-draw
        smooth>
      </vue-trend>
    </q-card-main>
  </q-card> -->
  </div>
   </q-layout>
</template>
<script>
import { mapGetters } from 'vuex'
import vueTrend from 'vuetrend'
import _ from 'underscore'
import VueApexCharts from 'vue-apexcharts'
import moment from 'moment'
import numeral from 'numeral'
export default {
  components: {
    vueTrend,
    VueApexCharts
  },
  data () {
    return {
      bwOpen: true,
      minDate: new Date(1900, 1, 1),
      chartOptions: {
        chart: {
          zoom: {
            type: 'x',
            enabled: true
          },
          toolbar: {
            show: false,
            autoSelected: 'zoom'
          }
        },
        plotOptions: {
          line: {
            width: 0.5,
            curve: 'smooth'
          }
        },
        // colors: ['#fc8d59', '#fee090', '#ffffbf', '#e0f3f8', '#91bfdb', '#4575b4'],
        stroke: {
          width: 2,
          gradient: {
            enabled: true,
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0,
            opacityTo: 0,
            stops: [0, 90, 100]
          },
          curve: 'smooth'
        },
        dataLabels: {
          enabled: false
        },
        markers: {
          size: 2,
          // style: 'full'
          shape: 'circle',
          // strokeWidth: 5,
          strokeColor: 'light-blue',
          strokeOpacity: 0.5,
          fillOpacity: 0.2,
          hover: {
            strokeOpacity: 1,
            fillOpacity: 1,
            sizeOffset: 3
          }
        },
        // colors: ['#0165fc'],
        // title: {
        //   text: 'Body Weight',
        //   align: 'left'
        // },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            gradientToColors: ['#FDD835'],
            shadeIntensity: 1,
            type: 'vertical',
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100, 100, 100]
          }
        },
        yaxis: {
          min: 0,
          max: 100,
          labels: {
            formatter: function (val) {
              // return (val / 1000000).toFixed(0)
              return val.toFixed(0)
            }
          },
          title: {
            floating: true
          }
        },
        xaxis: {
          type: 'datetime'
        },

        tooltip: {
          shared: false,
          y: {
            formatter: function (val) {
              // return (val / 1000000).toFixed(0)
              return val
            }
          }
        },
        grid: {
          yaxis: {
            lines: {
              show: false
            }
          }
        }
      }
    }
  },
  methods: {
    setStart (amount, period) {
      this.minDate = moment().add(amount, period).toDate()
    },
    startDate (filter) {
      let minDate = this.minDate
      let startDate = new Date(
          _.chain(this.statsDates)
            .filter(item => {
              return (typeof filter === 'undefined' || (item[filter] !== null && typeof item[filter] !== 'undefined' && item[filter] !== 0)) &&
              item.MeasurementDate > minDate
            })
            .min(item => { return item.MeasurementDate })
            .value()
            .MeasurementDate),
        startY = startDate.getFullYear(),
        startM = startDate.getMonth()
      return moment([startY || 1900, (startM || 1) - 1]).format('YYYY-MM-DD')
    }
  },
  computed: {
    ...mapGetters({
      'statsDates': 'Stats/Get_DailyMeasurement_Dates'
    }),
    statsDatesReverse () {
      return _.sortBy(this.statsDates, 'MeasurementDateID').reverse()
    },
    statsDatesFilled () {
      var startM = moment(this.startDate())
      let ret = {
        series: []
      }
      if (startM.isAfter('1900-01-01')) {
        var endM = moment()
        let seriesWeights = {
          name: 'Body Weight',
          data: []
        }
        let seriesBodyFat = {
          name: 'Body Fat Estimate',
          data: []
        }
        let seriesWHR = {
          name: 'Waist Height Ratio',
          data: []
        }
        try {
          let datesArr = []
          let endI = endM.diff(startM, 'days')
          for (let i = 0; i <= endI; i++) {
            let dateID = +moment(startM).add(i, 'd').format('YYYYMMDD')
            datesArr.push(moment(startM).add(i, 'd').toDate())
            if (typeof this.statsDates[dateID] !== 'undefined') {
              seriesWeights.data.push(this.statsDates[dateID].Weight || null)
              seriesBodyFat.data.push(this.statsDates[dateID].BodyFatEstimate || null)
              seriesWHR.data.push(this.statsDates[dateID].WHR || null)
            }
          }
          ret.series.push(seriesWeights)
          ret.series.push(seriesBodyFat)
          ret.series.push(seriesWHR)
          ret.xaxis = {
            categories: datesArr
          }
        } catch (ex) {
          debugger
        }
      }
      return ret
    },
    statsDatesFiltered () {
      let minDate = this.minDate
      let ret = _.filter(this.statsDates, item => { return item.MeasurementDate >= minDate })
      return ret
    },
    multiChartOptions () {
      let options = JSON.parse(JSON.stringify(this.chartOptions))
      options.xaxis = {...options.xaxis, ...this.statsDatesFilled.xaxis}
      options.xaxis.type = null
      options.series = this.statsDatesFilled.series
      debugger
      return options
    },
    series () {
      let weights = _.chain(this.statsDatesFiltered)
        .map(item => {
          return {
            x: new Date(item.MeasurementDate),
            y: item.Weight
          }
        })
        .value()
      return [{
        name: 'Body weight',
        data: weights
      }]
    },
    seriesWeights () {
      let weights = _.chain(this.statsDatesFiltered)
        .map(item => {
          return {
            x: new Date(item.MeasurementDate),
            y: item.Weight
          }
        })
        .value()
      return [{
        name: 'Body weight',
        data: weights
      }]
    },
    seriesBodyFat () {
      let BodyFat = _.chain(this.statsDatesFiltered)
        .map(item => {
          return {
            x: new Date(item.MeasurementDate),
            y: item.BodyFatEstimate
          }
        })
        .value()
      return [{
        name: 'Body fat',
        data: BodyFat
      }]
    },
    seriesWHR () {
      let WHR = _.chain(this.statsDatesFiltered)
        .map(item => {
          return {
            x: new Date(item.MeasurementDate),
            y: item.WHR
          }
        })
        .value()
      return [{
        name: 'Waist Height Ratio',
        data: WHR
      }]
    },
    weights () {
      let ret = _.chain(this.statsDatesReverse)
        .pluck('Weight')
        .filter(item => {
          return typeof item !== 'undefined' && item !== null
        })
        .value()
      return ret
    },
    maxWeight () {
      let ret = _.max(this.statsDates, item => {
        return item.Weight
      })
      return ret.Weight
    },
    minWeight () {
      let ret = _.min(this.statsDates, item => {
        return item.Weight
      })
      return ret.Weight
    },
    maxBodyFat () {
      let ret = _.max(this.statsDatesFiltered, item => {
        return item.BodyFatEstimate
      })
      return ret.BodyFatEstimate
    },
    minBodyFat () {
      let ret = _.min(this.statsDatesFiltered, item => {
        return item.BodyFatEstimate
      })
      return ret.BodyFatEstimate
    },
    maxWHR () {
      let ret = _.max(this.statsDatesFiltered, item => {
        return item.WHR
      })
      return ret.WHR
    },
    minWHR () {
      let ret = _.min(this.statsDatesFiltered, item => {
        return item.WHR
      })
      return ret.WHR
    },
    whr () {
      let ret = _.chain(this.statsDatesReverse)
        .pluck('WHR')
        .filter(item => {
          return typeof item !== 'undefined' && item !== null
        })
        .value()
      return ret
    },
    bodyFatEstimate () {
      let ret = _.chain(this.statsDatesReverse)
        .pluck('BodyFatEstimate')
        .filter(item => {
          return typeof item !== 'undefined' && item !== null
        })
        .value()
      return ret
    },
    endDate () {
      let endDate = new Date(_.max(this.statsDates, item => { return item.MeasurementDate }).MeasurementDate),
        endY = endDate.getFullYear(),
        endM = endDate.getMonth()
      return moment([endY, endM + 1]).format('YYYY-MM-DD')
    },
    bwChartOptions () {
      let options = JSON.parse(JSON.stringify(this.chartOptions))
      options.yaxis.max = Math.ceil(this.maxWeight / 10) * 10
      options.yaxis.min = (Math.floor(this.minWeight / 10) * 10) - 20
      options.xaxis.min = this.startDate('Weight')
      options.xaxis.max = this.endDate
      // options.title.text = 'Body weight'
      return options
    },
    bfChartOptions () {
      let options = JSON.parse(JSON.stringify(this.chartOptions))
      options.yaxis.max = Math.ceil(this.maxBodyFat * 10) / 10
      options.yaxis.min = (Math.floor(this.minBodyFat * 10) / 10) - 0.1
      options.xaxis.min = this.startDate('BodyFatEstimate')
      options.xaxis.max = this.endDate
      options.yaxis.labels.formatter = function (value) { return numeral(value).format('0.00%') }
      // options.xaxis.labels = {...options.xaxis.labels, ...{show: false, axisTicks: {show: false}, axisBorder: {show: false}}}
      // options.title.text = ''
      return options
    },
    whrChartOptions () {
      let options = JSON.parse(JSON.stringify(this.chartOptions))
      options.yaxis.max = Math.ceil(this.maxWHR * 10) / 10
      options.yaxis.min = (Math.floor(this.minWHR * 10) / 10) - 0.1
      options.xaxis.min = this.startDate('WHR')
      options.xaxis.max = this.endDate
      options.yaxis.labels.formatter = function (value) { return numeral(value).format('0.00%') }
      // options.title.text = ''
      return options
    }
  }
}
</script>
<style scoped>
 i.q-icon.fa.fa-edit {
  font-size: 12px
}
.q-card .apexcharts-title-text {
  font-size: 18px!important;
  font-family: 'Roboto, -apple-system, "Helvetica Neue", Helvetica, Arial, sans-serif'
}
</style>
