<template>
  <div class="home">
    <img class="container" alt="Logo del Cofre" src="../assets/cofre.png">
    <h2 class="d-flex justify-content-center  cherryBomb pb-2 mb-4  border-bottom border-warning">Información Sobre las Aplicaciones</h2>
    <DetallesComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import DetallesComponent from '@/components/DetallesComponent.vue'

export default {
  name: 'HomeView',
  components: {
    DetallesComponent
  }
}
</script>

<style>



</style>