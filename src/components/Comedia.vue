<template>
  <div class="col m6 s12">
    <h2>Peliculas Comedia</h2>
    <br>
    <ul class="collection">
      <li class="collection-item" v-for="movie in listaComedias" :key="movie.id">{{ movie.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Comedia',
  computed:{
    listaComedias(){
      return this.$store.state.movies.filter(movie => movie.genre === "Comedy");

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');

h2{
  font-family: 'Lobster', cursive;

}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
}
</style>
