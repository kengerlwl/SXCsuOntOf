import Vue from 'vue'
import Vuex from 'vuex'
import api from './module/api'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        api
    }
})