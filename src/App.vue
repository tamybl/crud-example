<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      class="d-flex align-center"
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
        <router-link to="/"><v-btn class="ma-3" color="secondary">Home</v-btn></router-link>
        <router-link to="/list"><v-btn class="ma-3" color="secondary">Lista Usuarios</v-btn></router-link>

      </div>
    </v-app-bar>

    <v-main>
    <router-view>
      <Home/>
    </router-view>
      
    </v-main>
  </v-app>
</template>

<script>
import Main from './components/Main';

export default {
  name: 'App',
  components: {
    Main,
  }
};
</script>
