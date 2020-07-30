import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';



Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    movies: [
      { id: 1, title: 'Scary Movie', genre: 'Comedy' },
      { id: 2, title: 'Superbad', genre: 'Comedy' },
      { id: 3, title: 'Home Alone', genre: 'Comedy' },
      { id: 4, title: 'Shrek', genre: 'Family' },
      { id: 5, title: 'The Lion King', genre: 'Family' },
      { id: 6, title: 'Zootopia', genre: 'Family' }, 
    ]
  },

  getters: {
    listaComedias(){
      return store.state.movies.filter(movie => movie.genre === "Comedy");

    },

    listaFamiliar(){
      return store.state.movies.filter(movie => movie.genre === "Family");
    }

  }
})


Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
