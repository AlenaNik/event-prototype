import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'
const baseUrl = 'http://localhost:3000'


Vue.use(Vuex, axios);

export default new Vuex.Store({
  state: {
    hotels: [],
    hotel: null,
  },
  mutations: {
    SET_HOTELS (state, hotels ) {
      state.hotels = hotels;
    },
    SET_DETAIL (state, hotel ) {
      state.hotel = hotel;
    },
    ADD_HOTEL (state, item ) {
          state.hotels.unshift(item)
    },
    REMOVE_RECORD(state, hotel) {
          const hotelIndex = state.hotels.findIndex((i) => i.id === hotel)
          state.hotels.splice(hotelIndex, 1)
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
    fetchHotelDetail({ commit }, hotelId) {
      axios.get(`${baseUrl}/hotels/${hotelId}`)
          .then(res => {
            let hotel = res.data
            commit('SET_DETAIL', hotel)
          }).catch(e => {
            console.error(e)
      })
    },
      removeHotel({ commit }, hotelId) {
          axios.delete(`${baseUrl}/hotels/${hotelId}`)
              .then(res => {
                  commit('REMOVE_RECORD', hotelId)
                  console.log(res.data)
              }).catch(e => {
              console.error(e)
          })
      },
   addNewHotel({ commit }, item) {
        axios.post(`${baseUrl}/hotels`, {item})
            .then(res => {
                commit('SET_NEWHOTELS', Object.assign(item, {id: res.data.id}))
            }).catch(e => {
                console.error(e)
        })
   }
  },
  modules: {}
});
