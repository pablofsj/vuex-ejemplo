<template>
  <div class="col m6 s12">
    <h2>{{title}}</h2>
    <br>
    <ul class="collection">
      <li class="collection-item" v-for="movie in Movies" :key="movie.id">{{ movie.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MovieList',
  props: {
    title: String,
    genre: String
  },
  computed:{
    Movies(){
      if (this.genre == 'Comedy'){
        return this.$store.getters.listaComedias
      }
      else if (this.genre == 'Family') {
        return this.$store.getters.listaFamiliar

      }
      else {
        return []
      }
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





