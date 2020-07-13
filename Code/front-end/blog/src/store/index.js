import Vue from 'vue'
import Vuex from 'vuex'
import api from './module/api'
import user from './module/user'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        api,
        user
    }
})