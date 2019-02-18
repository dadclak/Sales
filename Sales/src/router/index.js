import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import Home from '../components/Home.vue'
import Show from '../components/Show.vue'
import NotFound from '../components/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: HelloWorld
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/show',
    component: Show
  },
  {
    path: '*',
    component: NotFound
  }
]

export default new VueRouter({
  routes: routes,
  mode: 'history'
})
