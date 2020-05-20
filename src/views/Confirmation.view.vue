<template>
        <div class="wrapper">
            <img class="main-illustration" src="../assets/img/photo-1556761175-5973dc0f32e7.jpeg" alt="" />
            <section class="section-one" v-scroll-reveal v-if="order == 'Nothing to show yet'">
                <h1>You have to book your spot first </h1>
                <p>{{ order }}</p>
            </section>
            <section class="section-one" v-scroll-reveal v-else>
                <h1>Order: </h1>
                <p>Thank you for choosing us. Here is you order details:</p>
                <div class="container">
                    <div v-for="(item, idx) in selected" :key="idx"> Room: {{ item.name }} </div>
                    <p>Total order: {{ total }} $</p>
                </div>
            </section>
        </div>
</template>

<script>
    export default {
        name: 'Confirmation',
        props: ['selected', 'total'],
        data() {
            return {
                order: 'Nothing to show yet'
            }
        },
        mounted() {
            if (this.selected) {
                this.order = this.selected
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/scss/variables";
    .main-illustration {
        height: 50vh;
        object-fit: cover;
        width: 100%;
        @include desktop {
            height: 50vh;
        }
    }
    .section-one {
        text-align: center;
        width: 100%;
        padding: $padding-m * 4;
        display: flex;
        flex-direction: column;
        align-items: center;
        h1 {
            font-size: $heading-font;
            color: $text-dark;
            font-weight: $normal;
            letter-spacing: 1px;
        }
        h2 {
            font-size: $sub-heading-font;
            color: $base-font-color;
            font-weight: $light;
        }
        p {
            font-size: $base-font;
            color: $text-light;
            font-weight: $light;
        }
    }
</style>
