<template>
<div class="stars">
  <p class="stars__item" v-for="item in redLength" :key="item">
    <img class="stars__image" src="../assets/red-star.png" />
  </p>
  <p class="stars__item" v-for="item in whiteLength" :key="item + redLength">
    <img stars__image src="../assets/white-star.png" />
  </p>
  <slot></slot>
</div>
</template>

<script>
export default {
  props: ['whiteLength'],
  computed: {
    redLength() {
      return 5 - this.whiteLength;
    }
  }
}
</script>

<style lang="scss" scoped>
.stars {
  display: inline-block;
  &__item {
    display: inline-block;
    margin: 0;
    margin-right: 3px;
    &:last-of-type {
      margin-right: 10px;
    }
  }
}
</style>