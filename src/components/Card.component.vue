<template>
        <div class="card-wrapper">
            <div class="hotel-section" v-for="(hotel, idx) in hotels" :key="idx">
                <div class="info">
                    <star-icon size="1.5x" class="custom-class"></star-icon>
                    <span class="category-title">{{ hotel.rating }}</span>
                    <p class="sub-title"
                       v-for="(amenity, idx) in hotel.amenities" :key="idx"
                    >{{ amenity }}</p>
                    <p class="sub-title"> Rooms available: {{ Number(hotel.rooms.length) }} </p>
                </div>
                <img src="../assets/img/photo-1543520345-55eb2dc9a1ba.jpeg" alt="">
                <router-link :to="{ name: 'Details', params: {id: hotel.id}}"> <button class="btn-primary"> Book now </button></router-link>
            </div>
        </div>
</template>

<script>
    import { mapState } from 'vuex'
    import { StarIcon } from 'vue-feather-icons'
    export default {
        name: 'card',
        mounted() {
            this.$store.dispatch("getAllHotels")
        },
        computed: {
            ...mapState([
                'hotels'
            ])
        },
        components: {
            StarIcon
        }
    }
</script>

<style scoped lang="scss">
@import "../assets/scss/variables";
@import "../assets/scss/buttons";
.card-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    margin: $margin-m;
    padding: $padding-m * 2;
    border: $border;
    border-radius: $border-radius * 2;
    &:hover {
        box-shadow: $box-shadow-hover;
    }
    .info {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .hotel-section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-bottom: $padding-m * 4;
        img {
            width: 400px;
            object-fit: cover;
            margin-bottom: $margin-m;
            border-radius: $border-radius;
        }
        .category-title {
            letter-spacing: 1px;
            color: $text-base;
            font-weight: lighter;
            margin: 0;
            margin-right: $margin-m;
        }
        .sub-title {
            text-align: center;
            font-size: $paragraph-font;
            background-color: $text-accent-background;
            margin-right: $margin-m;
            color: $text-accent;
            padding: $margin-m;
            border-radius: $border-radius;
        }
        a {
            color: $base-white;
        }
    }
    @include desktop {
        flex-direction: row;
        flex-wrap: wrap;
    }
}


</style>
