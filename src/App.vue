<template>
  <div id="app" class="container">
    <div class="row">
      <img src="https://cdn4.iconfinder.com/data/icons/planner-color/64/popcorn-movie-time-512.png" alt="">
    </div>
    <div class="row">
      <MovieList title='Peliculas Familiares' genre= 'Family' />
      <MovieList title='Peliculas Comedia' genre= 'Comedy' />
    </div>  
  </div>
</template>

<script>
import MovieList from './components/MovieList.vue'

export default {
  name: 'App',
  components: {
    MovieList
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
