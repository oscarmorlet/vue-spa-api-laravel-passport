import Vue from 'vue'
import VueRouter from 'vue-router'

import Principal from './components/Principal.vue'
import Login from './components/authentication/Login.vue'
import Register from './components/authentication/Register.vue'
import Panel from './components/Panel.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
      {
          path: "",
          component: Principal

      },
      {
          path: "/login",
          component: Login,
          meta: {
              forVisitors: true
          }
      },
      {
          path: "/register",
          component: Register,
          meta: {
              forVisitors: true
          }
      },
      {
          path: "/panel",
          component: Panel,
          meta: {
              forAuth: true
          }
      }
    ],
    linkActiveClass: 'active',
    mode: 'history'
})

export default router
