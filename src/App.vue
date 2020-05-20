<template>
  <div id="app">
    <navbar></navbar>
  </div>
</template>

<script>
import Navbar from './components/Navbar.component'
export default {
  name: "App",
  components: {
    Navbar
  }
};
</script>

<style lang="scss">
@import "./assets/scss/variables";
#app {
  font-family: $font-family;
  font-size: $base-font;
  color: $base-font-color;
  font-weight: $normal;
}
</style>
