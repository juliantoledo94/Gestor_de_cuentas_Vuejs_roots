<template>
  <div class="home">
    <div class="container m-0 d-flex justify-content-center">
      <img  alt="Logo del Cofre" src="../assets/cofre.png" id="cofre">
    </div>
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
#cofre{
  height: 500px;

}
</style>