<template>
  <section class="hboard">
    <transition name="wallFade">
      <div class="hboard__users" :key="activeYear">
          <div class="hboard__user usercard" v-for="item in activeYear" :key="item.id">
            <img class="usercard__img" :src="item.photoPath" alt="">

            <!-- <div class="usercard__text">
            <p class="usercard__name">{{item.name}}</p>
            <p class="usercard__proff">{{item.profession}}</p>
            </div> -->
          </div>
      </div>
    </transition>
    <timeline class="hboard__times" :items="yearsOfHonor" @yearChanged="changeActiveYear"/>
  </section>
</template>

<script>
  import timeline from '../components/timeline.vue'
  import wallOfHonor from '../mocks/wallOfHonor'

  export default {
    data: () => ({
      wallOfHonor: wallOfHonor,
      yearsOfHonor: [],
      activeYear: wallOfHonor[2010],
    }),

    components: {timeline, },
    methods: {
      createTLineItems () {
        for (let key in this.wallOfHonor) {
          let item = {id: key, year: key, active:false}
          this.yearsOfHonor.push(item)
        }
      },

      print (item) {console.log(item)},

      changeActiveYear (item) {
        this.activeYear = this.wallOfHonor[item.id]
        console.log(this.activeYear)
      },
    },

    created () {
      this.createTLineItems()
    },
  }
</script>

<style>
  .hboard {
    display: grid;
    grid-template-rows: 1fr 60px;
    grid-template-areas: 'users' 'timeline';
    grid-gap: 10px;
  }

  .hboard__users {
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(6, 1fr);
    grid-area: users;

    max-height: calc(100vh - 180px);
    overflow: scroll;
    transition: .5s;
  }

  .hboard__users::-webkit-scrollbar {
    display: none;
  }

  .hboard__times {
    grid-area: timeline;
  }

  .usercard__img {
    max-width: 100%;
    border-radius: 10px;
    overflow: hidden;
  }

  .usercard__text {
    padding: 10px;
    margin: 10px 0 0 0;

    background: rgba(0, 0, 0, .4);
    border-radius: 10px;
    backdrop-filter: blur(10px);

    text-align: center;
    color: white;
  }

  .usercard__name {
    font-size: 20px;
  }
  .usercard__proff {
    font-size: 16px;
    font-weight: 100;
  }

  .wallFade-enter-active {
    opacity: 0;
    position: absolute;
  }

  .wallFade-leave-active {
    opacity: 0;
  }
</style>