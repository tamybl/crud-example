<template>
  <v-container grid-list-xl>
    <v-layout>
      <v-flex class="text-center ma-5" xs12 sm12 md12>
      <v-card>
        <h1>JSON: Placeholder</h1>
            </v-card>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex md6>

        <v-card class="mb-3 blue lighten-5 " v-for="(album, index) in albums" :key="index">
          <v-card-text>
            <v-chip label color="blue" text-color="white">
              <v-icon left> mdi-account</v-icon>
              {{albums[index].name }}
            </v-chip>
            <v-flex>
            <p>{{ albums[index].username }}</p>
            <p>{{ albums[index].email }}</p>
            </v-flex>
            <v-btn class="mr-3 ml-0" color="warning" @click="editar( albums[index].id )"
              >Editar</v-btn
            >
            <v-btn class="ma-3" color="error" @click="eliminarTarea( albums[index].id )"
              >Eliminar</v-btn
            >
          </v-card-text>
        </v-card>


      </v-flex>

          <v-flex md6 v-if="formAgregar">
        <v-card class="mb-3 pa-3">
          <v-form @submit.prevent="agregarTarea">
            <v-text-field label="titulo de la tarea" v-model="name"></v-text-field>
            <v-text-field label="titulo de la tarea" v-model="username"></v-text-field>
            <v-textarea label="Descripcion de tarea" v-model="email"></v-textarea>
            <v-btn block color="success" type="submit">Agreagar tarea</v-btn>
          </v-form>
        </v-card>
      </v-flex>

            <v-flex md6 v-if="!formAgregar">
        <v-card class="mb-3 pa-3">
          <v-form @submit.prevent="editarTarea">
            <v-text-field label="Nombre" v-model="name"></v-text-field>
            <v-text-field label="Usuario" v-model="username"></v-text-field>
            <v-textarea label="Email" v-model="email"></v-textarea>
            <v-btn block color="warning" type="submit">Editar Tarea</v-btn>
          </v-form>
        </v-card>
      </v-flex>

    </v-layout>

    <v-snackbar v-model="snackbar">
    {{mensaje}}
    <v-btn  class="center" color="blue" flat @click="snackbar = false">
    Cerrar
    </v-btn>
     </v-snackbar>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';
import store from '../store/index';
import axios from "axios";

export default {
  computed: mapState(['albums' , 'loading']),
  created() {
    store.dispatch("fetchData");
  },
      data() {
        return {
          name: '',
            username: '',
            email: '',
            snackbar: false,
            mensaje:'',
            formAgregar: true,
            indexalbum:''

        }
        
    },



    methods:{
          save (){

            axios.post(this.url+'save', this.albums)
            .then(response => {

             console.log(response); 
            })
            .catch(error => {
              console.log(error); 

            })
          },

        agregarTarea () {
            console.log(this.name, this.username , this.email);
            console.log('updateData', json.slice(1, 10));
            if(this.name === '' || this.username=== ''||this.email=== ''){
                this.snackbar = true
                this.mensaje = 'debes llenar los campos vacios'
            }else {
                this.albums.push({
                    id: Date.now(),
                    name: this.name,
                    username: this.username,
                    email: this.email
                })
                this.name = ''
                this.username = ''
                this.email = ''
                this.snackbar = true
                this.mensaje = 'Tarea Agregada exitosamente'
                 }
            },
            eliminarTarea(index){
                //alert(index)
                alert(this.albums)
                this.albums = this.albums.slice(e => e.index != index )
                alert('Elimino album '+index)
            },
            editar(index){
              alert(index)
                this.formAgregar = false
                this.name = this.albums[index].name
                this.username = this.albums[index].username
                this.email = this.albums[index].email
                this.indexalbums = index
            },
            editarTarea(){
                this.indexalbums[this.indexalbum].name = this.name
                this.indexalbums[this.indexalbum].username = this.username
                this.formAgregar = true
                this.name = ''
                this.username = ''
                this.email = ''
                this.snackbar = true
                this.mensaje = ' Tarea editada Exitosamente '
            }
        }
};
</script>