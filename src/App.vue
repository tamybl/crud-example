<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
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
      
        
        <v-img
          alt="Crud"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="../public/img/tareacrud.png"
          width="250"
          height="200"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://richardsilvacv.com"
        target="_blank"
        text
      >
        <span class="mr-2">Made by Richard</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
    <router-view></router-view>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Crudjs from '../src/views/Crudjs';
import Json from '../src/views/Json';
import axios from 'axios';


export default {
  name: 'App',

  components: {
    HelloWorld,
    
  },

  data: () => ({
    //
  }),
};
</script>
