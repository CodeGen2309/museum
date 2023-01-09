<template>
  <div class="wpapers">
    <transition v-for="paper in papers" :key="paper.name" name="fadeUp">
      <a  class="papers_item" v-if="paper.visible"
        :class="paper.visible ? '' : 'papers__item_invsbl'"
        :href="paper.path" target="_blank">

        <img class="papers__itemCover" :src="paper.image" alt="">
        <p class="papers__itemName">Выпуск от {{paper.name}}</p>
      </a>
    </transition>
  </div>
</template>

<script>
export default {
  props: {},

  data: () => ({
  }),

  methods: {},
  components: {},
  created () {
    let counter = 0
    let showPaper = () => {
      if (this.papers[counter] == undefined) {return}

      this.papers[counter].visible = true
      counter = counter + 1
    }

    let timer = setInterval(() => {
      if (this.papers[counter] == undefined)  {clearInterval(timer)}
      else {showPaper()}
    }, 100);
  }
}
</script>

<style>
.wpapers {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  transition: .3s;
}

.wpapers::-webkit-scrollbar {
  display: none;
  background: black;
}

.papers_item {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  width: 550px; height: 300px;
  margin: 10px 0;

  border-radius: 5px;
  overflow: hidden;

  transition: .5s;
}

.papers__itemCover {
  position: absolute;

  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: top;

  transition: .3s;
}

.papers__itemName {
  position: absolute;
  left: 0; right: 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 0; padding: 10px 20px;
  height: 40%;
  background: linear-gradient(to top, rgba(0, 0, 0, .8), rgba(0, 0, 0, 0));

  color: #F2F2F2;
  font-size: 20px;

  transition: .5s;
}

/* анимация при создании */
.fadeUp-enter-active {
  opacity: 0;
  transform: translateY(20px);
}
/* анимация при создании */
</style>