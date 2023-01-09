<template>
  <div class="search">
    <input class = 'search__input' type="text" placeholder="Искать" @focus="activateSearch">
    <button class="search__button">
      <img class = 'search__icon' src="@/icons/search.svg" alt="">
    </button>
  </div>
</template>

<script>
  export default {
    data() {return {}},
    methods: {},
    computed: {},
  }
</script>

<style>
  .search {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    overflow: hidden;
    background: rgba(0, 0, 0, .4);
    border-radius: 5px;

    backdrop-filter: blur(10px);
    transition: .3s;
  }

  .search_active {background: rgba(0, 0, 0, .8)}

  .search__button {
    background: rgba(0, 0, 0, 0);
    border: none; outline: none;
    padding: 5px 20px;
    transition: .3s;
    cursor: pointer;
  }

  .search__button:hover {background: rgba(255, 255, 255, .2)}

  .search__icon {
    width: 20px;
    height: 20px;
    color: white;
  }
  
  .search__input {
    background: none;
    border: none; outline: none;
    padding: 5px 20px;
    width: 100%;
    color: rgba(255, 255, 255, .8);
  }

  .search__input::placeholder {color: rgba(255, 255, 255, .6)}
</style>