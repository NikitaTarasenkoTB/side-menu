<template>
  <div class="checkbox">
    <transition name="appear">
      <Button class="checkbox__button" v-if="showButton && check" />
    </transition>
    <label :for="checkboxId" class="checkbox__label">
      <input
        class="checkbox__input"
        :id="checkboxId"
        type="checkbox"
        v-model="check"
      />
      <span class="checkbox__body"></span>
      <p class="checkbox__text"><slot>Check this!</slot></p>
    </label>
  </div>
</template>

<script>
import Button from '@/components/Button';
export default {
  name: "Home",
  props: ["checkboxId", "showButton"],
  components: { Button },
  data() {
    return {
      check: false
    }
  }
};
</script>

<style lang="scss" scoped>
.checkbox {
  max-width: 221px;
  margin: 0 auto;
  position: relative;
  &__button {
    position: absolute;
    top: -10px;
    left: -200px;
  }
  &__label {
    margin: 0;
    display: flex;
    align-items: center;
  }
  &__text {
    font-size: 13px;
    line-height: 9px;
    margin: 0;
  }
  &__body {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    transition: all linear 0.3s;
    cursor: pointer;
    opacity: .8;
    &:hover {
      opacity: 1;
    }
    &::after {
      content: "";
      display: inline-block;
      position: absolute;
      top: 1px;
      left: 5px;
      height: 9px;
      width: 5px;
      border-bottom: 2px solid #fff;
      border-right: 2px solid #fff;
      transform: rotate(45deg);
      visibility: hidden;
    }
  }
  &__input {
    appearance: none;
    &:checked ~ span {
      background: rgba(255, 0, 0, .7);
      &:after {
        visibility: visible;
      }
    }
    &:focus ~ .checkbox__body {
      box-shadow: 0px 0px 0px 1px rgba(240, 18, 18, 0.49);
    }
  }
}
.appear-enter-active, .appear-leave-active {
  transition: all  .3s;
}
.appear-enter, .appear-leave-to {
  opacity: 0;
  transform: translatex(8px);
}
</style>
