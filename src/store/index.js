import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'
const baseUrl = 'http://localhost:3000'


Vue.use(Vuex, axios);

export default new Vuex.Store({
  state: {
    hotels: []
  },
  mutations: {
    SET_HOTELS (state, hotels ) {
      state.hotels = hotels;
    }
  },
  actions: {
    getAllHotels({ commit }) {
      axios.get(`${baseUrl}/hotels`)
          .then(res => {
            let hotels = res.data
            commit('SET_HOTELS', hotels)
          })
          .catch(e => {
            console.error(e)
          });
    }
  },
  modules: {}
});
