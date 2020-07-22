<template>
  <div class="select">
    <h2 class="select__header">
      <slot name="header">Header</slot>
    </h2>
    <div class="select__body" @click="shown = !shown">
      <p class="select__body-text" ref="body">
        <slot name="placeholder">Header</slot>
      </p>
      <img
        :class="['select__image', { imgrotate: shown }]"
        ref="img"
        src="../assets/arrow.png"
      />
    </div>
    <transition name="fade">
      <ul
        class="select__options"
        @click="chooseItem($event)"
        v-if="shown"
        ref="selectList"
      >
        <li class="select__option" v-for="option in options" :key="option">
          {{ option }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  props: ['options'],
  data() {
    return {
      shown: false
    }
  },
  methods: {
    chooseItem(event) {
      this.shown = !this.shown;
      this.$refs.body.textContent = event.target.textContent;
    }
  }
}
</script>

<style lang="scss" scoped>
.select {
  max-width: 221px;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  &-options {
    background: none;
    border-radius: 5px;
    padding: 5px;
    appearance: none;
    &::after {
      content: "";
      border: 1px solid black;
      background-image: url("../assets/arrow.png");
      display: inline-block;
      width: 10px;
      height: 10px;
      position: absolute;
      top: 0;
      right: 0;
      z-index: 10;
    }
  }
  &__header {
    font-size: 15px;
    line-height: 16px;
    font-weight: bold;
    margin: 0;
    margin-bottom: 7px;
    text-align: start;
  }
  &__body {
    padding: 12px 15px 12px 12px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 0;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }
  &__body-text {
    margin: 0;
    font-size: 13px;
    line-height: 9px;
  }
  &__image {
    transition: transform .3s;
  }
  &__options {
    background-color: white;
    width: 100%;
    margin: 0;
    padding: 0;
    padding: 12px 12px 0 12px;
    font-size: 13px;
    line-height: 9px;
    text-align: start;
    list-style: none;
    border-radius: 0 0 5px 5px;
    border: 1px solid #ccc;
    border-top: none;
    cursor: pointer;
    position: absolute;
    top: 58px;
    left: 0;
    z-index: 100;
  }
  &__option {
    padding-bottom: 12px;
    &:hover {
      opacity: .8;
    }
  }
}
.imgrotate {
  transform: rotate(180deg);
}
.fade-enter-active, .fade-leave-active {
  transition: all  .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>