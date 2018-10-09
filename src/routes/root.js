import Vue from 'vue'
import VueRouter from 'vue-router'
import homeRoutes from './home'

import Home from 'Pages/Home.vue'
import Detail from 'Pages/Detail.vue'

Vue.use(VueRouter);

const routes = [
  {
    path:'/home', component: Home,
    children: homeRoutes
  },

  {
    path:'/detail/:id', component: Detail
  },

  {
    path:'/', redirect: '/home'
  },
];

export default new VueRouter({
    routes
})