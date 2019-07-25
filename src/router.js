import Vue from 'vue'
import VueRouter from 'vue-router'
import nav from './Components/nav/nav.vue';


Vue.use(VueRouter)

const routes = [
  { path: '/*', component: nav },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router;