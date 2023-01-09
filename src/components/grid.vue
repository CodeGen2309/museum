<template>
  <div :class="['gridMass', `gridMass_${massonry}`]">

    <div v-for="(item, index) in tiles" :key="index"
      @click="$emit('ClickOnTile', item)"
      :class = "[
        'gridMass__item',
        `gridMass__item_${item.size}`,
        item.visible ? '' : 'gridMass__item_invs',
      ]">

      <img class="gridMass__itemImg" :src="item.img" alt="#">
      <p class="gridMass__itemText">{{item.name}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      tiles: Array,
      massonry: {
        type: String,
        default: 'line',
        validator (val) {
          if (val == 'section') {return true}
          if (val == 'line') {return true}
          if (val == 'column') {return true}
          if (val == 'main') {return true}

          return false
        }
      },
    },

    data: () => ({}),

    methods: {},

    computed: {},

    components: {},

    mounted () {
      let counter = 0
      let tiles = this.tiles

      tiles.forEach(item => item.visible = false)

      let timer = setInterval(() => {
        if (tiles[counter] == undefined) {
          clearInterval(timer)
          return
        }

        tiles[counter].visible = true
        counter = counter + 1
      }, 70);

    },
  }
</script>

<style>
  .gridMass {
    display: grid;
    grid-gap: 20px;
  }

  .gridMass_line {
    grid-auto-flow: column dense;
    grid-template-rows: repeat(3, 200px);
    grid-auto-columns: 200px;
  }

  .gridMass_column {
    grid-auto-flow: line dense;
    grid-template-columns: repeat(6, 200px);
    grid-auto-rows: 200px;
  }

  .gridMass_section {
    grid-auto-flow: dense;
    grid-template-columns: repeat(8, 200px);
    grid-template-rows: repeat(3, 200px);
    grid-gap: 40px;
  }

  .gridMass_main {
    grid-template-rows: repeat(2, 200px);
    grid-template-columns: repeat(8, 200px);
    grid-auto-columns: 200px;
    grid-auto-flow: column dense;
  }

  .gridMass__item {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    border-radius: 5px;

    overflow: hidden;
    color: white;
    text-decoration: none;
    transition: .5s;
  }

  .gridMass__item_invs {opacity: 0}
  .gridMass__item_wide {grid-column: span 2}
  .gridMass__item_large {
    grid-row: span 2;
    grid-column: span 2;
  }

  .gridMass__itemImg {
    position: absolute;
    width: 100%; height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .gridMass__itemText {
    position: relative;
    margin: 0; padding: 10px 15px;
    background: rgba(0, 0, 0, .8);
  }
</style>