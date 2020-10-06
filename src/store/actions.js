import axios  from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const actions = {
    loadUsers({commit}) {
        axios.get(API_URL+'/users').then((response) => {
            console.log(response.data);
            commit('updateUsers', response.data);
            commit('loadingStatus', false)
        })
    },
    removeUser({commit}, id) {
        commit('removeUser', id);
    },
    saveUser({commit}, newObject) {
        commit('saveUser', newObject);
    }
    
}