<template>
    <div class="layout">
        <h1>Welcome back, {{ user_name }}! </h1>
        <div v-if="selected.length > 0">
            <h2>Selected rooms: {{ selected.length }}</h2>
            <p>Total: {{ total }} $</p>
            <router-link :to="{ name: 'Confirmation', params: { id: num, selected, total } }"> <button class="btn-primary"> Checkout </button></router-link>
            <div v-for="(item, idx) in selected" :key="idx">
                <p>{{ item.name }}</p>
                <p class="sub-title">{{ item.price_in_usd }} $</p>
                <button class="sub-title-alert" @click="removeSelection(idx)">Remove room</button>
            </div>
        </div>
      <div
              class="container"
              v-for="(item, idx) in hotel.rooms" :key="idx">
       <p>Room {{ item.name }}</p>
       <ul class="mini-card">
           <span class="card-text">
             <li>{{ item.description }}</li>
             <li>For {{ item.max_occupancy }} people </li>
             <li>Price {{ item.price_in_usd }} $</li>
             <button
                     @click="confirmSelection(item)"
                     class="btn-primary"> Select room </button>
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
        user_name: 'John Doe',
        selected: [],
        num: '675799'
    }
  },
    methods: {
        fetch_hotel_data(id) {
        this.$store.dispatch("fetchHotelDetail", id)
      },
        confirmSelection(id) {
            this.selected.push(id)
        },
        removeSelection(x) {
          this.selected.splice(x, 1);
          this.saveSelection()
        },
        saveSelection() {
            let parsed = JSON.stringify(this.selected)
            localStorage.setItem('selected', parsed)
        }
    },
    created() {
      this.fetch_hotel_data(this.$route.params.id)
    },
    mounted() {
      if(localStorage.getItem('selected')) {
          try {
              this.selected = JSON.parse(localStorage.getItem('selected'));
          } catch (e) {
              localStorage.removeItem('selected')
          }
      }
    },
    computed: {
    ...mapState([
        'hotel'
      ]),
        total: function () {
            if (!this.selected) {
                return 0
            }
            return this.selected.reduce((acc, curr) => {
                return acc += Number(curr.price_in_usd)
            }, 0)
        }
    }
}
</script>

<style scoped lang="scss">
    @import "../assets/scss/variables";
    @import "../assets/scss/buttons";
.layout {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    padding: 0 50px;
    vertical-align: baseline;
    .sub-title {
        text-align: center;
        width: 50px;
        padding: $padding-xs $padding-m;
        font-size: $paragraph-font;
        background-color: $text-accent-background;
        margin-right: $margin-m;
        color: $text-accent;
        border-radius: $border-radius;
    }
    .sub-title-alert {
        text-align: center;
        width: 80px;
        padding: $padding-xs $padding-m;
        font-size: $paragraph-font;
        background-color: $text-attention-background;
        margin-right: $margin-m;
        border: $border;
        color: $text-attention-accent;
        border-radius: $border-radius;
    }
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
    button {
        margin-top: $margin-m;
    }
}
</style>
