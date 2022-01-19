import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        usuario: {
            loggedIn: false,
            data: null
        }
    },
    getters: {
        usuario(state) {

            return state.usuario
        }
    },
    mutations: {
        SET_LOGGED_IN(state, value) {
            state.usuario.loggedIn = value
        },
        SET_USER(state, data) {
            state.usuario.data = data
        }
    },

    actions: {
        fetchUser({ commit }, usuario) {
            commit('SET_LOGGED_IN', usuario !== null)
            if (usuario) {
                commit('SET_USER', {
                    displayName: usuario.displayName,
                    email: usuario.email
                })
            } else {
                commit('SET_USER', null)
            }
        }
    }
})