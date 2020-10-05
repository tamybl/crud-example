<template>
  <v-container>
    <v-layout>
      <v-flex>
        <h1 class="md-5" dark>Tabla De Usuarios</h1>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex md6>
        <v-card class="mb-3">
          <v-card-text>
            <v-chip label color="blue" text-color="white">
              <v-icon left> mdi-comment-outline</v-icon>
              <p>Nombre nombre </p>
            </v-chip>
            <p>nombre nombre</p>
            <v-btn class="mr-3 ml-0" color="warning" 
              >Editar</v-btn
            >
            <v-btn class="ma-3" color="error" 
              >Eliminar</v-btn
            >
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>

</template>

