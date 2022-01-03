<template>
  <Brain :width="10" :height="10" :start="2" :destination="97" :weightModificationOnFailure="-2"/>
</template>

<script>
import Brain from './components/Brain.vue'

export default {
  name: 'App',
  components: {
    Brain
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
