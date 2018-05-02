<template>
  <v-app dark>
    <v-container>
      <navbar></navbar>
      <v-layout justify-center align-start>
          <router-view></router-view>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    'navbar': Navbar
  }
}
</script>
