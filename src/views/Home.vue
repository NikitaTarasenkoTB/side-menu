<template>
  <Panel class="side-menu">
    <Map class="side-menu__map" />
    <Select
      class="side-menu__selectors"
      v-for="select in selectors"
      :key="select.id"
      :options="select.options"
    >
      <template v-slot:header>{{ select.header }}</template>
      <template v-slot:placeholder>{{ select.placeholder }}</template>
    </Select>
    <div
      class="side-menu__checkbox-block"
      v-for="checkbox in checkboxes"
      :key="checkbox.id"
    >
      <p class="side-menu__checkbox-title">{{ checkbox.title }}</p>
      <Checkbox
        class="side-menu__checkbox-item"
        v-for="(checkboxItem, index) in checkbox.checks"
        :key="checkboxItem"
        :showButton="checkbox.id === 5"
      >
        <Stars
          v-if="checkbox.title === 'Рейтинг' && index > 1"
          :whiteLength="index - 2"
          >{{ checkboxItem }}
        </Stars>
        <template v-else>{{ checkboxItem }}</template>
      </Checkbox>
      <div v-if="checkbox.title === 'Профиль автосервиса'">
        <transition name="move">
          <div class="side-menu__checkbox-show-all" v-if="isShowAll">
            <Checkbox
              class="side-menu__checkbox-item"
              v-for="(element, index) in showAll"
              :key="index"
            >
              {{ element }}
            </Checkbox>
          </div>
        </transition>
        <p
          @click="isShowAll = !isShowAll"
          class="side-menu__checkbox-show-all-text"
        >
          Показать все
        </p>
      </div>
    </div>
  </Panel>
</template>

<script>
import Checkbox from '@/components/Checkbox';
import Stars from '@/components/Stars';
import Select from '@/components/Select';
import Map from '@/components/Map';
import Panel from '@/components/Panel';

export default {
  components: {
    Checkbox,
    Stars,
    Select,
    Map,
    Panel
  },
  data() {
    return {
      isShowAll: false,
      isShownButton: false
    }
  },
  computed: {
    selectors() {
      return this.$store.getters.getSelectors;
    },
    checkboxes() {
      return this.$store.getters.getCheckboxes;
    },
    showAll() {
      return this.$store.getters.getShowAll;
    }
  }
}
</script>

<style lang="scss" scoped>
.showButton {
  visibility: hidden;
}
.side-menu {
  margin: 0 auto;
  border: 1px solid #ccc;
  &__map {
    margin-bottom: 32px;
  }
  &__selectors {
    margin-bottom: 27px;
  }
  &__checkbox-block {
    margin-bottom: 35px;
  }
  &__checkbox-title {
    font-size: 15px;
    line-height: 16px;
    font-weight: bold;
    margin: 0;
    text-align: start;
    margin-bottom: 12px;
  }
  &__checkbox-item {
    margin-bottom: 12px;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
  &__checkbox-show-all {
    overflow: hidden;
    height: 80px;
    &-text {
      font-size: 13px;
      line-height: 9px;
      margin: 0;
      text-align: start;
      padding-top: 7px;
      padding-left: 25px;
      text-decoration: underline;
      color: #0472A6;
      cursor: pointer;
      &:hover {
        opacity: .8;
      }
    }
  }
}
.move-enter-active, .move-leave-active {
  transition: all  .3s;
}
.move-enter, .move-leave-to {
  height: 0;
}
</style>