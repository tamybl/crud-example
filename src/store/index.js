import Vue from 'vue'
import Vuex from 'vuex'
import { state } from './state'
import { mutations } from './mutations'
import { actions } from './actions';
import { getters } from './getters';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(Vuex)
Vue.use(VueAxios, axios);

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
})