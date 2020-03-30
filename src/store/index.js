import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth/index";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";
import state from "./state";
Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: { auth }
});
