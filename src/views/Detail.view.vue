<template>
    <div class="layout">
      <div
              class="container"
              v-for="(item, idx) in hotel.rooms" :key="idx">
       <ul class="mini-card">
           <span class="card-text">
             <li>{{ item.name }}</li>
             <li>{{ item.description }}</li>
             <li>For {{ item.max_occupancy }} people </li>
             <li>Price {{ item.price_in_usd }} $</li>
           </span>
         <img src="../assets/img/photo-1576675784201-0e142b423952.jpeg" alt="">
       </ul>
      </div>
    </div>
</template>

<script>
  import { mapState } from 'vuex';
export default {
  data() {
    return {

    }
  },
    methods: {
        fetch_hotel_data(id) {
        this.$store.dispatch("fetchHotelDetail", id)
      }
    },
    created() {
      this.fetch_hotel_data(this.$route.params.id)
      console.log(this.$route.params.id)
    },
    computed: {
    ...mapState([
        'hotel'
      ])
    }
}
</script>

<style scoped lang="scss">
    @import "../assets/scss/variables";
.layout {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    padding: 0 50px;
    vertical-align: baseline;

    .container {
        margin: 0;
        padding: 16px 0 0;
        vertical-align: baseline;
        .mini-card {
            background-color: $base-white;
            border-radius: $border-radius;
            border-style: none;
            box-shadow: $box-shadow;
            display: flex;
            justify-content: space-between;
            font-size: 16px;
            margin: 0 0 16px;
            padding: $padding-m;
            vertical-align: baseline;
            max-width: 700px;
            .card-text {
                padding: $padding-m * 2;
            }
            li {
                list-style: none;
                font-size: $base-font;
                color: $text-light;
                font-weight: $light;
            }
            img {
                max-width: 30%;
                object-fit: cover;
            }
        }
    }
    @include desktop {
        margin: 0 0 0 200px;
    }
}
</style>
