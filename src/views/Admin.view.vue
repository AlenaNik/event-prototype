<template>
    <div class="layout">
        <div class="container"
             v-for="(hotel, idx) in hotels" :key="idx">
            <p>Hotel identifier: {{ hotel.id }}</p>
            <ul class="mini-card">
           <span class="card-text">
             <img class="main-illustration" src="../assets/img/photo-1543520345-55eb2dc9a1ba.jpeg" alt="" />
             <li>Hotel rating: {{ hotel.rating }}</li>
             <li>Price category: {{ hotel.price_category }}</li>
             <li v-for="(amenity, idx) in hotel.amenities" :key="idx">Including: {{ amenity }} </li>
             <button
                     @click="removeHotel(hotel.id)"
                     class="btn-primary"> Remove hotel from the platform </button>
           </span>
            </ul>
        </div>
                <form @submit.prevent="submitData">
                <h1>New data for hotel </h1>
                <p> Price category </p>
                <select v-model="category_choices[0]">
                    <option disabled value="">Please select one</option>
                    <option v-for="(category, idx) in category_choices"
                            :value="category"
                            :key="idx"
                    >
                        {{ category }}
                    </option>
                </select>
                    <p> Services </p>
                    <span class="checkbox-group" v-for="(amenity, idx) in amenities_choices" :key="idx">
                         <input type="checkbox"
                                v-model="amenities_choices" :value="amenity"
                         >

                    <label  id="amenity"
                    >{{ amenity }}</label>
                    </span>
                    <button @click.prevent="submitData" class="btn-primary">Submit</button>
                </form>
                {{ error }}
    </div>
</template>

<script>
    // TODO: vuelidate validation for input fields

    import { mapState } from 'vuex'
    export default {
        data() {
            return {
                error: '',
                dataId: Math.random(),
                category_choices: [
                    'medium',
                    'low',
                    'high'
                ],
                amenities_choices: [
                    'pets',
                    'free_wifi',
                    'spa',
                    'snacks',
                    'parking'
                ]
            }
        },
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
            },
            submitData () {
                const obj = {
                    id: this.dataId,
                    price_category: this.category_choices,
                    amenities: this.amenities_choices
                }
                if (this.dataId !== null && this.dataId >= 0) {
                    this.$store.dispatch("addNewHotel", obj).catch(err => {
                        console.error(err)
                    })
                } else {
                    this.error = 'Please provide data to submit'
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/scss/variables";
    @import "../assets/scss/buttons";
    .layout {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
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
            margin: 20px;
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
                max-width: 300px;
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
        form {
            font-size: $base-font;
            font-weight: $normal;
            color: $text-accent;
            text-align: center;
            display: flex;
            flex-direction: column;
            input[type=text] {
                min-width: 30%;
                padding: 12px $padding-m * 2;
                margin: 10px;
                border-radius: $border-radius;
                border: $border;
                background-color: $text-accent-background;
                font-size: $base-font;
                font-weight: $light;
            }
            select {
                min-width: 20%;
                padding: 12px $padding-m * 2;
                margin: 10px;
                border-radius: $border-radius;
                border: $border;
                background-color: $text-accent-background;
                font-size: $base-font;
                font-weight: $light;
            }
            .checkbox-group {
                text-align: left;
            }
        }
    }
</style>

