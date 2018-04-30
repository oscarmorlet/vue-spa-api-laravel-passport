<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>{{ msg2 }}</h2>
    <ul>
       <div class="text-xs-center">
         <v-chip color="error" text-color="white">Primary</v-chip>
         <v-chip color="primary" text-color="white">Secondary</v-chip>
         <v-chip color="success" text-color="white">Colored Chip</v-chip>
         <v-chip color="amber darken-4" text-color="white">Colored Chip</v-chip>
         <v-chip color="info" text-color="white">Colored Chip</v-chip>
       </div>
       <div>
         <v-btn color="success">Success</v-btn>
         <v-btn color="error">Error</v-btn>
         <v-btn color="amber darken-4" class="white--text">Warning</v-btn>
         <v-btn color="info">Info</v-btn>
       </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      msg2: "Don't Stop Learning"
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
