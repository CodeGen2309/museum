<template>
  <div class="app__background"><back ref="back" :images="menu" /></div>

  <burger-button class="app__menuICon" @click="tlmenu = !tlmenu"/>
  <search class="app__search" />

  <transition name="menuFade">
    <router-view class="app__content"/>
  </transition>

  <transition name="menuFade">
    <div class="mainMeu" v-if="tlmenu" @click="tlmenu = !tlmenu">
      <tlmenu :links="menu" @clickOnTile="goToPage"/>
    </div>
  </transition>
</template>

<script>
  import './fonts/roboto.css'

  import menuItems from './mocks/mainMenuItems'
  import back from '/src/components/doubleBack'
  import Search from '/src/components/search.vue'
  import BurgerButton from '/src/components/burgerButton.vue'
  import Grid from './components/grid.vue'
  import Tlmenu from './components/tlmenu.vue'

  export default {
    data: () => ({
      tlmenu: false,
      menu: menuItems,
    }),

    methods: {
      print (item) {console.log(item)},
      goToPage (tile) {
        this.$refs.back.ChangeImage(tile.index)
        this.$router.push(tile.item.link)
      }
    },
    components: { back, Search, BurgerButton, Grid, Tlmenu},
  }
</script>

<style>
  body {
    margin: 0; padding: 0;
    font-family: 'Roboto';
  }

  #app {
    width: 100vw; height: 100vh;
    padding: 20px;
    overflow: hidden;
    box-sizing: border-box;

    display: grid;
    grid-template-columns: 50px 1fr;
    grid-template-rows: 50px 1fr;
    grid-gap: 20px;
  }

  .app__background {
    position: absolute;
    width: 100vw; height: 100vh;
    top: 0; left: 0;
  }

  .app__search {
    width: 1200px;
    justify-self: center;
  }

  .app__content {
    position: relative;
    grid-column: span 2;
  }

  .app__tittle {
    position: relative;
    margin: 0; padding: 0;

    color: white;
    font-weight: 100;
    font-size: 50px;

    align-self: center;
  }

  .mainMeu {
    position: absolute;
    top: 0; left: 0;
    width: 100vw; height: 100vh;
    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, .8);
    transition: .3s;
  }


  /* transitions */
  .menuFade-enter-active, .menuFade-leave-active {opacity: 0}
  /* transitions */
</style>