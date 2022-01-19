<template>
  <div class="container">
      <div class="row justify-content-center">
          <div class="col-md-8">
              <div class="card">
                  <div class="card-header">Painel</div>
                      <div class="card-body">
                      <div v-if="usuario" class="alert alert-success" role="alert">Você está logado!</div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import { mapGetters} from 'vuex'
export default {
    computed: {
        ...mapGetters({
            usuario: 'usuario'
        })
    }
}
</script>

<style>

</style>