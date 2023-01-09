<template>
  <section class="mainPage">
    <img class="mainPage__logo" src="/images/logo.svg" alt="">
    <h1 class="mainPage__tittle">АО "Завод ЖБК - 1"</h1>
    <p class="mainPage__call">Созидание во имя повышения качества жизни</p>

    <div class="mainPage__tiles">
      <grid class="mainPage__grid" :tiles="tiles" massonry="main" @ClickOnTile="goToLink"/>
    </div>
  </section>
</template>

<script>
  import mainTiles from '../mocks/mainPageLinks'
  import grid from '../components/grid.vue'
  
  export default {
    data: () => ({
      tiles: mainTiles,
    }),

    components: { grid },

    methods: {
      goToLink (item) { this.$router.push(item.link) },
    },
  }
</script>

<style>
  .mainPage {
    display: grid;
    grid-auto-rows: 150px 100px 1fr;
    grid-template-columns: 290px 1fr;
    grid-gap: 40px;
    margin: 40px 0 0 0;

    color: white;
  }

  .mainPage__logo {
    width: 100%; height: 100%;
    object-fit: cover;
    object-position: center;
    grid-row: span 2;
  }
  .mainPage__tittle {
    padding: 0; margin: 0;
    font-size: 70px;
    align-self: end;
  }
  .mainPage__call {
    font-size: 50px;
    font-weight: 100;
    align-self: start;
    margin: 0;
  }

  .mainPage__tiles::-webkit-scrollbar {display: none;}
  .mainPage__tiles {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    overflow: scroll;

    align-self: center;
    grid-column: span 2;
  }
</style>