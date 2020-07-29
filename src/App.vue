<template>
  <div id="app" class="container">
    <div class="row">
      <img src="https://cdn4.iconfinder.com/data/icons/planner-color/64/popcorn-movie-time-512.png" alt="">
    </div>
    <div class="row">
      <Familiar/>
      <Comedia/>
    </div>  
  </div>
</template>

<script>
import Comedia from './components/Comedia.vue'
import Familiar from './components/Familiar.vue'

export default {
  name: 'App',
  components: {
    Comedia,
    Familiar
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

img{
  width: 200px;

}
</style>
