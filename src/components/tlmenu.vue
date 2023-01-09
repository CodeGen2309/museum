<template>  
  <div class="tlMenu">
    <div class="tlMenu__link"
      v-for="(item, index) in links" :key="index"
      @click="$emit('clickOnTile', {item, index})">

      <img class="tlMenu__image" :src="item.img" alt="">
      <p class="tlMenu__name">{{item.name}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {links: Array, },
    data: () => ({}),
    computed: {},
  }
</script>



<style>
  .tlMenu {
    display: grid;
    grid-template-columns: repeat(3, 550px);
    grid-template-rows: repeat(3, 250px);
    grid-gap: 40px;

    color: white;
    font-size: 32px;
    font-weight: 300;
  }

  .tlMenu__link {
    position: relative;
    border-radius: 10px;
    overflow: hidden;
  }

  .tlMenu__image {
    position: absolute;
    width: 100%; height: 100%;

    object-fit: cover;
    object-position: center;
  }

  .tlMenu__name {
    position: absolute;
    width: 100%; height: 100%;
    margin: 0; padding: 10px;
    box-sizing: border-box;
    
    display: flex;
    align-items: flex-end;

    background: linear-gradient(to top, rgba(0, 0, 0, .4), rgba(255, 255, 255, .2));
  }
</style>