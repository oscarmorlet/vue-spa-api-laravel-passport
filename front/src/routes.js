import Vue from 'vue'
import VueRouter from 'vue-router'

import Principal from './components/Principal.vue'
import Login from './components/authentication/Login.vue'
import Register from './components/authentication/Register.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
      {
          path: "",
          component: Principal

      },
      {
          path: "/login",
          component: Login

      },
      {
          path: "/register",
          component: Register

      }
    ]
})

export default router
