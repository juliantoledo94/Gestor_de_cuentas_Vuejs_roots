<template>
  <div class="container">
    <h2 class="d-flex justify-content-center cherryBomb pb-2 mb-4 border-bottom border-warning">Complete el formulario</h2>
    <form v-on:submit.prevent="guardar" novalidate class="container d-flex justify-content-center mt-5 p-5">
      <div>
        <label for="accountType">Tipo de Cuenta:</label>
        <select v-model="dato.selectedAccountType" id="accountType">
          <option value="gmail">Gmail</option>
          <option value="netflix">Netflix</option>
          <option value="steam">Steam</option>
          <option value="github">Github</option>
        </select>
      </div>
      <div>
        <label>Usuario:</label>
        <input type="text" v-model="dato.user"/>
      </div>
      <div>
        <label>Contraseña:</label>
        <input type="password" v-model="dato.password" />
      </div>
    </form>
    <div class="d-flex justify-content-center">
      <button class="btn btn-primary btn rounded" @click="guardar(dato)">Guardar Contraseña</button>
    </div>

    <div v-if="enviado === true">
      <div v-if="errores.length > 0" class="classerror">
        <ul>
          <li v-for="x in errores" :key="x">{{ x }}</li>
        </ul>
      </div>
      <div v-else class="enviado">
        <p><span>Enviado con éxito</span></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IngresarView",
  data() {
    return {
      dato: {
        selectedAccountType: 'gmail',
        user: '',
        password: '',
      },
      arr: [],
      errores: [],
      enviado: false,
    };
  },
  methods: {
    guardar(dato) {
      console.log(dato);
      this.enviado = true;
      this.errores = [];
      if (!dato.user) {
        // Si falta algún dato requerido, muestra un mensaje de error o realiza alguna acción apropiada.
        this.errores.push("El usuario es obligatorio");
      }
      if (!dato.password) {
        // Si falta algún dato requerido, muestra un mensaje de error o realiza alguna acción apropiada.
        this.errores.push("La contraseña es obligatoria");
      }
      if(!dato.selectedAccountType){
        this.errores.push("debe seleccionar un tipo de cuenta")
      }

      if (this.errores.length === 0) {
        let nuevoObj = {
          user: dato.user,
          selectedAccountType: dato.selectedAccountType,
          password: dato.password,
          seleccion: dato.selectedAccountType === 'gmail' ? 'Correo' : 'Otro',
          
          
        };

        if (!localStorage.local) {
          this.arr = [];
        } else {
          this.arr = JSON.parse(localStorage.getItem("local"));
        }

        this.arr.push(nuevoObj);
        localStorage.setItem("local", JSON.stringify(this.arr));
        this.dato = { selectedAccountType: "", user: "", password: "" };
      }
    },
  },
  created() {
    // Cargar los datos del localStorage al iniciar la aplicación
    if (localStorage.local) {
      this.arr = JSON.parse(localStorage.getItem("local"));
    }
  },
};
</script>

<style scoped>
.classerror{background:#ef5350;color:white;width: 800px; margin:0 auto;border-radius: 5px;border: solid 1px #ef5350;}
.classerror li, .classerror p{color:white;border:none;padding:10px;}
.classerror p{text-align: center;}
.enviado{border:solid 1px green; background:#43a047; border-radius:5px;width: 800px;color:white; font-weight: bold;text-align: center;margin:auto;padding:20px; }
:focus{outline:white 1px solid;}
</style>