<template>
    <div>
        <p>{{ hotels }}</p>
        <div v-for="(hotel, idx) in hotels" :key="idx">
            <button @click="removeHotel(hotel.id)">Remove one</button>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        mounted() {
            this.$store.dispatch("getAllHotels")
        },
        computed: {
            ...mapState([
                'hotels'
            ])
        },
        methods: {
            removeHotel(id) {
                this.$store.dispatch("removeHotel", id).catch(err => {
                    console.error(err)
                })
            }
        }
    }
</script>

<style scoped>

</style>
