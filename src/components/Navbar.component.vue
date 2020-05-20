<template>
  <div>
    <nav>
        <ul>
            <li> <router-link to="/">Home</router-link></li>
            <li> <router-link to="/bookings">My bookings</router-link></li>
            <li> <router-link to="/admin-area">Admin </router-link> </li>
            <li>
                <Dropdown :title="settings[0].title" :items="settings"
                />
            </li>
        </ul>
    </nav>
    <router-view />
  </div>
</template>

<script>
    import Dropdown from './Drowdown.component';

export default {
  data() {
    return {
      username: "John Doe",
      loggedIn: true,
      settings: [
          {
              title: 'Español',
              selected: true
          },
          {
              title: 'English',
              selected: false
          },
          {
              title: 'German',
              selected: false
          },
          {
              title: 'Bahasa Indonesia',
              selected: false
          }
      ]
    };
  },
  components: {
        Dropdown
    },
    methods: {
    }
};
</script>

<style scoped lang="scss">
@import "../assets/scss/variables";
    nav {
        background-color: $base-white;
        font-size: $base-font;
        color: $heading-color;
        font-weight: $light;
        box-shadow: $box-shadow;
            ul {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                vertical-align: baseline;
                margin: 0;
                padding-top: $padding-m;
                @include desktop {
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-end;
                    align-items: center;
                    vertical-align: baseline;
                    padding-top: 0;
                }
            }
            li {
                list-style: none;
                margin: $margin-m $margin-m * 2;
            }
        a {
            color: $heading-color;
        }
    }
</style>
