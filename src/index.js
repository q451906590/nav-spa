import Vue from 'vue';
import App from './App.vue';
import routes from './router'
import 'es6-promise/auto'
import store from './store/index'
import singleSpaVue from 'single-spa-vue';

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: '#nav',
    router:routes,
    store,
    render: h => h(App)
  }
});

export const bootstrap = [
  vueLifecycles.bootstrap,
];

export const mount = [
  vueLifecycles.mount,
];

export const unmount = [
  vueLifecycles.unmount,
];
