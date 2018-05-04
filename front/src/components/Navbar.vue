<template>
    <div class="text-xs-center">
    <v-btn color="orange darken-4" :to="{ path: '/' }" class="white--text">Principal</v-btn>
    <v-btn color="orange darken-4" :to="{ path: '/panel' }" class="white--text" v-if="isAuth">Panel</v-btn>
    <v-btn color="orange darken-4" :to="{ path: '/login' }" class="white--text"  v-if="! isAuth">Login</v-btn>
    <v-btn color="orange darken-4" :to="{ path: '/register' }" class="white--text"  v-if="! isAuth" >Registrarme</v-btn>
    <v-btn color="orange darken-4" v-on:click="logout" class="white--text"  v-if="isAuth">Salir</v-btn>
  </div>
</template>

<script>

  export default {
    data () {
      return {
          isAuth: false
      }
    },
    created: function () {
        this.isAuth = this.$auth.isAuthenticated()
    },
    methods: {
      logout: function() {
        this.$auth.destroyToken()
        // this.$router.push('/login')
        this.$router.go('/panel')
      }
    }
  }
</script>
