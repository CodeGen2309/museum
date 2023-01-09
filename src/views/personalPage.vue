<template>
  <div class="topers__holder">
    <personal :pers="topers"/>
  </div>
</template>

<script>
  import personal from '../components/personal'
  import topers from '../mocks/personal'

  export default {
    components: {personal, },
    data: () => ({
      topers: topers,
    }),
  }
</script>

<style>
  .topers__holder {
    position: relative;
    overflow: scroll;
  }

  .topers__holder::-webkit-scrollbar {display: none;}
</style>