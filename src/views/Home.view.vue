<template>
  <div>
    <div class="wrapper">
      <img class="main-illustration" :src="bg" alt="" />
      <section class="section-one" v-scroll-reveal>
        <h1>Developer Summit {{ year }} at <strong>{{ place }}</strong></h1>
        <p>You can plan your travel and budget appropriately, here's a shortlist of the biggest, boldest, and best software developer conferences and events coming up in 2020.</p>
        <div class="button-container">
          <router-link to="/" class="call-to-action"> Book your spot </router-link>
          <a :href="`mailto:${email}`" class="call-to-action-disabled"> Contact us </a>
        </div>
      </section>
    </div>
    <Card v-scroll-reveal="{delay: 250}"/>
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
        height: 100vh;
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
      .button-container {
          display: flex;
          flex-direction: column;
          @include wide {
              flex-direction: row;
          }
      }
      a {
        border-radius: $border-radius;
        color: $text-accent;
        background: $text-accent-background;
        padding: 14px 24px;
        width: 190px;
        margin: $margin-m;
        text-align: center;
      }
      .call-to-action-disabled {
        border-radius: $border-radius;
        color: $text-accent-disabled;
        background: $text-accent-disabled-background;
        padding: 14px 24px;
        width: 190px;
      }
      @include desktop {
        align-items: flex-start;
        text-align: left;
        justify-content: center;
        margin-left: $padding-m * 5;
      }
    }
    @include desktop {
      display: flex;
      flex-direction: row-reverse;
    }
}


</style>
