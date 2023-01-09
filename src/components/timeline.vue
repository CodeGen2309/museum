<template>
  <div class="timel">
    <button class="timel__arrowHolder" @click="changeYear(-1)">
      <img class="timel__arrow timel__arrow_back" src="../icons/arrow.svg" alt="">
    </button>

    <div class="timel__yearsHolder">
      <ul class="timel__years">
        <li v-for="(item) in items" :key="item.year"
          @click="chooseYear(item)"
          :class = "['timel__year', item.active ? 'timel__year_active' : '',]">
          {{item.year}} г.
        </li>
      </ul>
    </div>

    <button class="timel__arrowHolder" @click="changeYear(+1)">
      <img class="timel__arrow" src="../icons/arrow.svg" alt="">
    </button>
  </div>
</template>


<script>
export default {
  props: ['items'],
  data: () => ({
    activeYear: {},
  }),

  computed: {},

  methods: {
    chooseYear (item) {
      this.activeYear.active = false
      this.activeYear = item
      this.activeYear.active = true

      this.$emit('yearChanged', this.activeYear)
    },

    changeYear (where) {
      if (this.activeYear.id == 0 && where == -1) {where = 0}
      if (this.activeYear.id == this.items.length - 1 && where == 1) {where = 0}

      this.activeYear.active = false
      this.activeYear = this.items[this.activeYear.id + where]
      this.activeYear.active = true

      this.$emit('yearChanged', this.activeYear)
    },
  },

  created () {
    this.activeYear = this.items[0]
    this.activeYear.active = true
  }
}
</script>


<style>
  .timel {
    display: grid;
    grid-template-columns: 60px 1fr 60px;
  }

  .timel__arrowHolder {
    display: flex;
    justify-content: center;
    align-items: center;

    background: rgba(0, 0, 0, .4);
    outline: none;
    border: none;
    border-radius: 10px;
    backdrop-filter: blur(10px);

    transition: .3s;
  }
  .timel__arrowHolder_active {background: rgba(255, 255, 255, .2);}

  .timel__arrow {width: 40px; height: 40px;}
  .timel__arrow_back {transform: rotate(180deg);}
  
  .timel__yearsHolder::-webkit-scrollbar {display: none;}
  .timel__yearsHolder {
    display: flex;
    justify-content: flex-start;
    align-items: stretch;

    overflow: scroll;
    margin: 0px 20px;

    border-radius: 10px;
    background: rgba(0, 0, 0, .4);
    backdrop-filter: blur(10px);
  }

  .timel__years {
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    padding: 0; margin: 0;

    color: white;
    font-size: 20px;
    font-weight: 100;
    list-style: none;
  }

  .timel__year {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 130px;
    
    cursor: pointer;
    transition: .1s;
  }

  .timel__year_active {
    font-weight: 300;
    background: rgba(255, 255, 255, .2);
  }
</style>