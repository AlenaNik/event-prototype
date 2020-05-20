import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'
const baseUrl = 'http://localhost:3000'


Vue.use(Vuex, axios);

export default new Vuex.Store({
  state: {
    hotels: [],
    hotel: null
  },
  mutations: {
    SET_HOTELS (state, hotels ) {
      state.hotels = hotels;
    },
    SET_DETAIL (state, hotel ) {
      state.hotel = hotel;
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
    },
    fetchHotelDetail({ commit }, customerId) {
      axios.get(`${baseUrl}/hotels/${customerId}`)
          .then(res => {
            let hotel = res.data
            commit('SET_DETAIL', hotel)
          }).catch(e => {
            console.error(e)
      })
    }
  },
  modules: {}
});
