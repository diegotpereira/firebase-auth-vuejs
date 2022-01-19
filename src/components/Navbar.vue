<template>
  <nav class="navbar navbar-expand-md navbar-light navbar-laravel">
      <div class="container">
          <router-link to="/" class="navbar-brand">Vue Autenticação Firebase</router-link>

          <button class="navbar-toggler" type="button" data-toggle ="collapse" 
                  data-target="#navbarSupportedContent" aria-control="navbarSupportedContent" 
                  aria-expanded="false" aria-label>

                  <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto"></ul>
              <ul class="navbar-nav ml-auto">
                  <template v-if="usuario.loggedIn">
                      <div class="nav-item"> {{usuario.data.displayName}}</div>
                          <li class="nav-item">
                              <a class="nav-link" @click.prevent="sair">Sair</a>
                          </li>
                  </template>
                  <template v-else>
                      <li class="nav-item">
                          <router-link to="entrar" class="nav-link">Entrar</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="registrar" class="nav-link">Registrar</router-link>
                      </li>
                  </template>
              </ul>
          </div>
      </div>
  </nav>
</template>

<script>
import { mapGetters} from 'vuex'
import firebase from 'firebase'
export default {
    computed: {
        ...mapGetters({
            usuario: 'usuario'
        })
    },
    methods: {
        sair() {
            firebase
            .auth()
            .signOut()
            .then(() => {
                this.$router.replace({
                    name: 'home'
                })
            })
        }
    }
}
</script>

<style>

</style>