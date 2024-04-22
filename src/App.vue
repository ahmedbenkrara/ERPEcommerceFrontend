<template>
  <router-view/>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions('authModule',['tokenFromLocalStorage']),
    ...mapActions('cartModule',['readLocal', 'readData']),
    ...mapActions('settingsModule', ['loadSettings']),
  },
  created(){
    // this.tokenFromLocalStorage()
    // this.readData()
  },
  watch: {
    $route() {
      this.readData()
    }
  },
  mounted(){
    this.tokenFromLocalStorage()
    this.readLocal()
    this.readData()
    this.loadSettings()
  },
  beforeRouteEnter(to, from, next) {
    this.readData()
    next();
  },
  beforeRouteUpdate(to, from, next) {
    this.readData()
    next();
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
