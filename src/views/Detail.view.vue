<template>
    <div>
      {{ hotel }}
    </div>
</template>

<script>
  import { mapState } from 'vuex';
export default {
  data() {
    return {
      hotel_data: null
    }
  },
    methods: {
      fetch_hotel_data(id) {
        this.$store.dispatch("fetchHotelDetail", id)
                .then(res => {
                  this.hotel_data = res.data
                })
                .catch(err => {
                  console.log(err)
                })
      }
    },
    created() {
      this.fetch_hotel_data(this.$route.params.id)
      console.log(this.$route.params.id)
    },
    computed: {
    ...
      mapState([
        'hotel'
      ])
    }
}
</script>

<style scoped>

</style>
