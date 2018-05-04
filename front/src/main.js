import Vue from 'vue'
import App from './App.vue'
import Router from './routes.js'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import './stylus/main.styl'

import Auth from './packages/auth/Auth.js'

// import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify)
Vue.use(Auth)
Router.beforeEach(
    ( to, from, next ) => {
      if( to.matched.some( record => record.meta.forVisitors  ) ) {
          if( Vue.auth.isAuthenticated() ) {
              next({
                    path: '/panel'
              })
          } else next()
      }else if( to.matched.some( record => record.meta.forAuth  ) ) {
          if( ! Vue.auth.isAuthenticated() ) {
              next({
                    path: '/login'
              })
          } else next()
      }else next()
    }
)

new Vue({
  el: '#app',
  render: h => h(App),
  router: Router
})
