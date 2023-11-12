<template>
    <div class="container">
      <h2 class="d-flex justify-content-center  cherryBomb pb-2 mb-4  border-bottom border-warning">Cuentas Guardadas</h2>
      <div class="container d-flex flex-wrap justify-content-center aling-items-center">
        <div v-for="(dato, index) in localArr" :key="index">
          <div class="card card shadow m-2 p-2 card border-rounded card border-dark" style="width: 18rem;">
            <img v-if="dato.selectedAccountType === 'netflix'" src="../assets/netflix_logo.png" alt="Logo de Netflix" />
            <img v-else-if="dato.selectedAccountType === 'gmail'" src="../assets/gmail_logo.png" alt="Logo de Gmail" />
            <img v-else-if="dato.selectedAccountType === 'steam'" src="../assets/steam_logo.jpg" alt="Logo de Steam" />
            <img v-else-if="dato.selectedAccountType === 'github'" src="../assets/github_logo.jpg" alt="Logo de Github" />
            <div class="card-body">
              <h5 class="card-title">{{ dato.user | mayuscula }}</h5>
              <p class="card-text">Contraseña:{{ dato.password }}</p>
              <button class="btn btn-danger" @click="eliminarDato(index)">Eliminar</button>
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "VerView",
    data() {
      return {
        localArr: [],
      };
    },
    filters: {
      mayuscula: function (value) {
        if (!value) return "";
        value = value.toString();
        return value.charAt(0).toUpperCase() + value.slice(1);
      },
    },
    created() {
      // Recupera datos del Local Storage al iniciar el componente
      const storedData = localStorage.getItem("local");
      this.localArr = storedData ? JSON.parse(storedData) : [];
    },
    methods: {
      eliminarDato(index) {
        // Elimina el dato del arreglo local
        this.localArr.splice(index, 1);
  
        // Actualiza el Local Storage
        localStorage.setItem("local", JSON.stringify(this.localArr));
      },
    },
  };
  </script>