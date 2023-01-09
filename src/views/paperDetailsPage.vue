<template>
  <section class="paperdet">
    <div class="paperdet__sidebar">
      <ul class="paperdet__sideList">
        <li v-for="(item, index) in papers" :key="index"
          class="paperdet__sideItem"
          @click="paperSrc = item.path">

          <img class="paperdet__sideImg" :src="item.img" alt="">
          <p class="paperdet__sideNote">{{item.name}}</p>
        </li>
      </ul>
    </div>

    <pdfview class="paperdet__paper" :pdfSrc="paperSrc" :key="paperSrc"/>
    <router-link class="paperdet__close" to="/papers/">Закрыть просмотр</router-link>
  </section>
</template>

<script>
  import papers from '../mocks/paperNames'
  import pdfview from '../components/pdfview'

  export default {
    props: ['year', 'paper'],
    data: () => ({papers: '', paperSrc: '', }),

    methods: {},
    components: {pdfview, }, 
    created () {
      this.paperSrc = this.paper
      this.papers = papers[this.year]
    },
  }
</script>

<style>
  .paperdet {
    display: grid;
    grid-template-columns: 400px 1fr;
    grid-template-rows: 1fr 50px;
    grid-gap: 20px;

    position: relative;

    color: white;
    overflow: hidden;
    transition: .3s;
  }

  .paperdet__sidebar::-webkit-scrollbar {display: none;}
  .paperdet__sidebar {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    background: rgba(0, 0, 0, .4);
    border-radius: 10px;
    backdrop-filter: blur(10px);
    overflow: scroll;
  }

  .paperdet__sideList {
    display: flex;
    flex-direction: column;

    list-style: none;
    padding: 0; margin: 0;
  }

  .paperdet__sideItem {
    position: relative;
    height: 300px;
    margin: 20px;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    border-radius: 10px;
    overflow: hidden;
  }

  .paperdet__sideImg {
    position: absolute;

    width: 100%; height: 100%;
    object-fit: cover;
    object-position: top;
  }

  .paperdet__sideNote {
    position: relative;
    background: rgba(0, 0, 0, .6);
    margin: 0; padding: 10px;
  }

  .paperdet__paper {
    grid-row: span 2;

    border-radius: 10px;
    overflow: hidden;
    transition: .3s;
    background: rgba(0, 0, 0, .8);
  }

  .paperdet__close {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;

    background: rgba(0, 0, 0, .4);
    backdrop-filter: blur(10px);
    color: white;
    text-decoration: none;
  }
</style>