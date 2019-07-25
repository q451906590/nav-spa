import Vuex from 'vuex';
import Vue from 'vue';
import nav from '../Components/nav/module/index'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    nav,
  }
})

export default store;