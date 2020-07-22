import Vue from "vue";
import Vuex from "vuex";
import select from "./modules/select";
import checkbox from "./modules/checkbox";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    select,
    checkbox
  }
});
