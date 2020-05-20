<template>
    <h1>{{ hotels }}</h1>
<!--    <div class="card-wrapper"-->
<!--    >-->
<!--        <div class="hotel-section" v-for="(item, idx) in items" :key="idx">-->
<!--            <img :src="item.images" alt="">-->
<!--            <span class="category-title">{{ item.rating }}</span>-->
<!--            <p class="sub-title"-->
<!--            v-for="(amenitie, idx) in item.amenities" :key="idx"-->
<!--            >{{ amenitie }}</p>-->
<!--            <button><router-link to="/details"> Book </router-link></button>-->
<!--        </div>-->
<!--        <div class="detail-section">-->
<!--            <div class="naming">-->
<!--                <span class="name">{{ item.price_category }}</span>-->
<!--                <span class="info"></span>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: 'card',
        props: [ 'hotels' ],
        mounted() {
            this.$store.dispatch("getAllHotels")
        },
        computed: {
            ...mapState([
                'hotels'
            ])
        }

    }
</script>

<style scoped lang="scss">
@import "../assets/scss/variables";

.card-wrapper {
    margin: $margin-m;
    padding: $padding-m * 2;
    box-shadow: $box-shadow;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: $border;
    border-radius: $border-radius * 2;
    &:hover {
        box-shadow: $box-shadow-hover;
    }
    .hotel-section {
        display: flex;
        flex-direction: column;
        position: relative;
        justify-content: center;
        align-items: center;
        img {
            width: 100%;
            align-items: center;
            overflow: hidden;
            text-align: center;
            border-radius: $border-radius * 2;
        }
        .category-title {
            padding-top: $padding-m;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-size: small;
            color: $text-base;
            font-weight: lighter;
            line-height: 1.5;
            margin: 0;
            opacity: .6;
        }
        .sub-title {
            text-align: center;
            font-size: $sub-heading-font;
            color: $text-light;
            font-weight: bolder;
            letter-spacing: 1px;
        }
    }
    .detail-section-section {
        display: flex;
        padding: .5rem 1rem 1rem;
        flex-grow: 1;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        img {
            border-radius: 50%;
            border-style: none;
            display: block;
            height: 35px;
            width: 35px;
            object-fit: cover;
        }
        .naming {
            align-items: center;
            display: flex;
            flex-direction: column;
            padding: $padding-m;
        }
        .name, .info {
            letter-spacing: 1px;
            font-size: $paragraph-font;
            color: $text-light;
            font-weight: $light;
            line-height: 1.5;
            margin: 0;
        }
    }
}


</style>
