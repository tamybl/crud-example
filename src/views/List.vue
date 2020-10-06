<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <v-flex md7>

        <v-card class="mb-3" v-for="(user, index) in users" :key="index">
          <v-card-title>{{user.name}}</v-card-title>
          <v-card-text>
            <v-spacer class="mb-2">
            <v-chip label color="blue" text-color="white" class="mr-2">
              <v-icon center> mdi-email</v-icon>
            </v-chip>
            <span>{{user.email}}</span>
            </v-spacer>
            <v-spacer>
              <a :href="'https://www.'+user.website" target="_blank">Website</a>
            </v-spacer>

            <v-btn class="mr-3 ml-0" color="warning" @click="userDraft(user)">Editar</v-btn>
            <v-btn class="ma-3" color="error" @click="removeUser(index)">Eliminar</v-btn>
          </v-card-text>
        </v-card>

      </v-flex>
      <v-flex md5 v-if="editUser">
        <v-card class="card__sticky">
          <v-card-text>
            <v-text-field type="text" v-model="activeEditUser.name" ></v-text-field>
            <v-text-field type="text" v-model="activeEditUser.website"></v-text-field>
            <v-text-field type="text" v-model="activeEditUser.email" ></v-text-field>
            <v-btn color="success" class="mr-2" @click="saveUserChanges()">Guardar</v-btn>
            <v-btn color="error" @click="cancelChanges()">Cancelar</v-btn>
          </v-card-text>
        </v-card>
      </v-flex>

    </v-layout>


  </v-container>
</template>

<script>
import {mapState, mapActions} from 'vuex';

export default {
  data() {
    return ({
      editUser: false,
      activeEditUser: {} 
    })
  },
  computed: mapState(['users', 'loading']),
  created() {
    this.$store.dispatch('loadUsers');
  },
  methods: {
    ...mapActions([
      'removeUser'
    ]),
    deleteUser(id) {
      this.$store.dispatch('removeUser', id);
    },
    userDraft(user) {
      this.activeEditUser = Object.assign({}, user); // Copia de objeto en nuevo punto de memoria
      this.editUser = true;      
    },
    saveUserChanges: function() {
      this.$store.dispatch('saveUser', this.activeEditUser);
      this.editUser = false;
    },
    cancelChanges() {
      this.activeEditUser = {};
      this.editUser = false;
    }
  }
}
</script>

<style scoped>
.card__sticky {
  position: sticky;
  top: 80px;
}
</style>