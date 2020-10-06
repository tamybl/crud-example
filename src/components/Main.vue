<template>
  <v-container grid-list-xl>
      <v-layout row wrap> 
        <v-flex md12>
          <v-img :src="require('../assets/logo.svg')" class="my-3" contain height="70"/>
        </v-flex>
      </v-layout>


      <v-layout row wrap>
        <v-flex md12 class="text-center">
          <h1 class="display-2 font-weight-bold mb-12"> Tarea Vuetify Grid-system</h1>
          <h2>Enunciado</h2>
          <p class="subheading font-weight-regular"><strong>PRUEBA DE CONOCIMIENTOS</strong></p>
        </v-flex>

        <v-flex class="md-4"> 
          <v-card dark >   
          <v-card-text class="text-justify"> 
              * Herramientas a utilizar:<br/>

              <v-img
          alt="Vue Logo"
          class="shrink mr-2"
          contain
          src="../assets/logo.png"
          width="16"
        />Vue.js<br/><br/>
              <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="16"
        />Vuetify (framework progresivo de componentes para Vue.js)<br/><br/>
          </v-card-text>
          </v-card>
        </v-flex>

       <v-flex class="md-4">
         <v-card dark>
          <v-card-text class="text-justify">       
          

          * Consumir data desde:<br/>
          .- https://jsonplaceholder.typicode.com/<br/><br/>

      </v-card-text>
       </v-card>
       </v-flex>


            <v-flex class="md-4">
            <v-card dark >
          <v-card-text class="text-justify">
        <strong> Resumen</strong>:<br/><br/>

Desarrollar una app que permita realizar todas las operaciones propias de un CRUD al endpoint antes mencionado.<br/>
Desarrollando al menos 3 componentes, y utilizando el "Grid system" de Vuetify, se desea ver cómo se utiliza el framework progresivo de componentes para Vue.js.<br/>

La app debe tener su manifest.json (Debe ser Progresivaa).<br/><br/>
</v-card-text>
        </v-card>
            </v-flex>
      </v-layout>


  </v-container>
</template>

<script>
  export default {
    name: 'Main',

    data: () => ({
      
      
    }),
  }
</script>
