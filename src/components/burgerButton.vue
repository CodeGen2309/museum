<template>
  <div class="burger">
    <img class="burger__icon" src="@/icons/burgerMenu.svg" alt="">
  </div>
</template>

<style>
  .burger {
    display: flex;
    justify-content: center;
    align-items: center;

    background: rgba(0, 0, 0, .4);
    backdrop-filter: blur(10px);
    padding: 10px;
    border-radius: 5px;
    box-sizing: border-box;

    cursor: pointer;
  }
</style>