<template>
  <div class="pers">
    <div class="pers__item persCard" v-for="(item, index) in pers" :key="index">
      <img class="persCard__img" :src="item.img" alt="">
      <p class="persCard__name">{{item.name}}</p>
      <p class="persCard__job">{{item.job}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['pers', ],
    data: () => ({
    }),
  }
</script>

<style>
.pers {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  color: white;
}

.pers__item {
  width: 250px;
  background: rgba(0, 0, 0, .6);

  margin: 20px;
}

.persCard {
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 10px;
  overflow: hidden;
}

.persCard__img {
  width: 100%;
  height: 300px;

  object-fit: cover;
  object-position: center;
}

.persCard__name {
  text-align: center;
  font-size: 20px;
  font-weight: 500;

  margin: 10px;
}

.persCard__job {
  text-align: center;
  margin: 10px;
}
</style>