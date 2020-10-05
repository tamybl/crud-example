<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 sm6 md6>
        <v-card>
          <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg">
            <v-container>
            <v-layout>
            <v-flex>
            <span class="headline white--text" >Lorem, ipsum dolor.</span>
            </v-flex>
            </v-layout>
            </v-container>
          </v-img>
          <v-card-title><h2>Lorem, ipsum dolor.</h2></v-card-title>
          <v-card-text>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              dolores molestias nisi harum ab delectus doloribus nobis est
              cupiditate pariatur porro amet aut iusto enim placeat illo, nulla
              alias similique!
            </p></v-card-text
          >
          <v-card-actions>
            <v-btn flat> accion</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md6>
        <v-card>
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          ></v-img>
          <v-card-title><h2>Lorem, ipsum dolor.</h2></v-card-title>
          <v-card-text>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              dolores molestias nisi harum ab delectus doloribus nobis est
              cupiditate pariatur porro amet aut iusto enim placeat illo, nulla
              alias similique!
            </p></v-card-text
          >
          <v-card-actions>
            <v-btn flat @click="dialog = true">accion</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>

   <!--Dialogo tipo pop-up --> 

   <v-dialog v-model="dialog" width="500px"  persistent>
   <v-card>
   <v-card-title>Titulo del dialogo </v-card-title>
   <v-card-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat est minus, velit nisi veritatis nobis corporis odio libero. Minus qui voluptatibus sunt omnis? Laudantium magni commodi quae voluptates qui neque.</v-card-text>
   <v-divider></v-divider>
   <v-card-actions>
   <v-btn flat @click="dialog = false">Cerrar</v-btn>
   </v-card-actions>
   </v-card>
   </v-dialog>

   <!--Fin del dialgoo -->

   <!--Abrir dialogo Registro-->

   <v-dialog
      v-model="dialog1"
      persistent
      max-width="600px"
    >
      <template >
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Legal first name*"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Legal middle name"
                  hint="example of helper text only on focus"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Legal last name*"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Email*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Password*"
                  type="password"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="Age*"
                  required
                ></v-select>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-autocomplete
                  :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                  label="Interests"
                  multiple
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog1 = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog1 = false"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
   <!--Cerrar dialogo de registro -->
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      dialog:false,
      dialog1:false,
    };
  },
};
</script>>
