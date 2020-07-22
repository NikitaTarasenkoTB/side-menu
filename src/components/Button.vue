<template>
  <div class="button">
    <img src="../assets/zoom.png" class="buttom__zoom">
    <router-link to="/about">
      <p class="button__text">
        Показать 38 компаний
      </p>
    </router-link>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.button {
  position: relative;
  background-color: rgba(255, 0, 0, 1);
  max-width: 200px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  &__text {
    color: white;
    margin: 0;
    font-size: 13px;
    line-height: 9px;
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }
  &:after {
    content: "";
    background-color: rgba(255, 0, 0, 1);
    display: block;
    width: 15px;
    height: 15px;
    position: absolute;
    transform: rotate(45deg);
    top: 11px;
    right: -5px;
    z-index: -1;
  }
}
</style>