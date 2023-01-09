<template>
  <div class="post">
    <slot></slot>
  </div>
</template>

<script>
  export default {}
</script>

<style>
  .post {
    padding: 20px;
    overflow: scroll;

    background: rgba(0, 0, 0, .6);
    border-radius: 10px;
    box-sizing: border-box;

    color: white;
    font-size: 24px;
    font-weight: 100;

    transition: .3s;
  }

  .post__tittle {font-weight: 300;}

  .post__img {
    padding: 20px 0;
    max-width: 100%;
    max-height: 600px;

    object-fit: cover;
    object-position: center;
  }

  .post__img_fw {width: 100%}
  .post__img_hw {width: 50%}

  .post::-webkit-scrollbar {display: none}
</style>