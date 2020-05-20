<template>
  <div>
    <div class="wrapper">
      <img class="main-illustration" :src="bg" alt="" />
      <section class="section-one" v-scroll-reveal>
        <h1>Developer Summit {{ year }} at <strong>{{ place }}</strong></h1>
        <router-link to="/" class="call-to-action"> Book your spot </router-link>
        <a :href="`mailto:${email}`" class="call-to-action-disabled"> Contact us </a>
      </section>
    </div>
    <section class="section-two" v-scroll-reveal="{delay: 250}">
      <Card />
    </section>
  </div>
</template>

<script>
import Card from '../components/Card.component';
import Img from "../assets/img/conference.jpeg";

export default {
  name: "Home",
  data() {
    return {
      bg: Img,
      Card,
      year: 2020,
      email: 'conference@gmail.com',
      place: "Leipzig, Germany"
    };
  },
  components: {
    Card
  }
};
</script>

<style scoped lang="scss">
@import "../assets/scss/variables";
  .wrapper {
    .main-illustration {
      height: 50vh;
      object-fit: cover;
      width: 100%;
      @include desktop {
        width: 50%;
      }
    }
    .section-one {
      box-sizing: border-box;
      text-align: center;
      width: 100%;
      padding: $padding-m * 4;
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
        margin-top: $margin-m * 4;
      }
      a {
        border-radius: $border-radius;
        color: $text-accent;
        background: $text-accent-background;
        padding: 14px 24px;
        width: 190px;
      }
      .call-to-action-disabled {
        border-radius: $border-radius;
        color: $text-accent-disabled;
        background: $text-accent-disabled-background;
        padding: 14px 24px;
        width: 190px;
        margin-left: $margin-m;
      }

      @include desktop {
        text-align: left;
        margin-left: $padding-m * 5;
      }
    }
    @include desktop {
      display: flex;
      flex-direction: row-reverse;
    }
  }
  .section-two {
    display: flex;
    flex-direction: column;
    padding-top: $padding-m;

    @include desktop {
      padding: 1rem;
      display: flex;
      flex-direction: row;
    }
  }

</style>
