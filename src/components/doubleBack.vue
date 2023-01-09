<template>
  <div class="back">
    <img class="back__img" :class="isForw ? 'back__img_invs' : ''" :src="backImg.img" alt="">
    <img class="back__img" :class="isForw ? '' : 'back__img_invs'" :src="forwImg.img" alt="">

    <div class="back__mask" :class="isForw ? 'back__mask_invs' : ''" :style="backMask" ></div>
    <div class="back__mask" :class="isForw ? '' : 'back__mask_invs'" :style="forwMask" ></div>
  </div>
</template>

<script>
export default {
  props: {images: Array},

  data: () => ({
    backImg: {img: '/images/1.jpg', color: '#9b59b6'},
    forwImg: {img: '/images/2.jpg', color: '#e74c3c'},
    isForw: false,
  }),

  computed: {
    backMask () {
      return {background: `linear-gradient(to top right, ${this.backImg.color}, rgba(0, 0, 0, .1))`}
    },

    forwMask () {
      return {background: `linear-gradient(to top right, ${this.forwImg.color}, rgba(0, 0, 0, .1))`}
    },
  },

  methods: {
    ChangeImage (count) {
      if (this.images[count] == undefined) {count = 0}
      if (this.isForw) {this.backImg = this.images[count]}
      else (this.forwImg = this.images[count])

      this.isForw = !this.isForw
    },
  },
}
</script>

<style>
  .back {
    position: relative;
    width: 100%; height: 100%;
    overflow: hidden;
  }

  .back__img {
    position: absolute;
    width: 100%; height: 100%;
    object-fit: cover;
    object-position: center;

    transition: .5s;
  }

  .back__img_invs {opacity: 0;}

  .back__mask {
    position: absolute;
    width: 100vw; height: 100vh;
    transition: .5s;
  }

  .back__mask_invs {opacity: 0;}
  .back__butt {
    position: absolute;
    bottom: 0; right: 0;
    margin: 20px;
  }
</style>