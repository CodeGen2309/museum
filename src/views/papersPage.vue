<template>
  <section class="papersLay">
    <h2 class="app__tittle">Выпуски Нашей газеты за {{currYear}} год</h2>
    <grid class="papersLay__papers" :tiles="papers[currYear]" massonry="section" @ClickOnTile="showPaper" :key="currYear"/>

    <transition name="tlineFadeUp">
      <timeline class="papersLay__line"
        v-if="timelineIsVisible"
        :items="years"
        @yearChanged="changeCurrYear"/>
    </transition>
  </section>
</template>

<script>
  import papers from '../mocks/paperNames'
  import Grid from '../components/grid.vue'
  import timeline from '../components/timeline.vue'
  import Wallp from '../components/wallp.vue'

  export default {
    components: {timeline, Wallp, Grid, },

    data: () => ({
      timelineIsVisible: false,
      papers: papers,
      years: [],
      currYear: 2016,
    }),

    methods: {
      print (item) {console.log(item)},
      changeCurrYear (item) {this.currYear = item.year},
      showPaper (item) {
        this.$router.push({name: 'paperDetails', params: {year: this.currYear, paper: item.path}})
      },
      createTimeLineItems () {
        let i = 0

        for (let paper in this.papers) {
          let year = {id: i, year: paper, active: false}

          this.years.push(year)
          i++
        }
      },
    },

    created () {
      this.createTimeLineItems()
      setTimeout(() => { this.timelineIsVisible = true }, 10)
    }
  }
</script>

<style>
  .papersLay {
    display: grid;
    grid-template-rows: 100px 1fr 60px;
    grid-gap: 20px;
  }

  .papersLay__papers {
    justify-self: center;
    align-self: center;
  }

  .papersLay__line {
    position: relative;
    border-radius: 10px;
    transition: .5s;
  }

  .paperLay__paperDetails {
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    transition: .3s;
  }

  /* transitions */
  .tlineFadeUp-enter-active, .tlineFadeUp-leave-active {
    opacity: 0;
    transform: translateY(25px);
  }
  /* transitions */
</style>