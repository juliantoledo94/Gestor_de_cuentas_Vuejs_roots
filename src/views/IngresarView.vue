<template>
    <div class="container">
            <h2 class="d-flex justify-content-center  cherryBomb pb-2 mb-4  border-bottom border-warning">Complete el formulario</h2>
            <form v-on:submit.prevent class="container d-flex justify-content-center mt-5 p-5">
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
                <label >Usuario:</label>
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
            
        </div> 
</template>

<script>
export default{
    name:"IngresarView",
    data:function(){
    return {
        dato:{
          selectedAccountType: 'gmail',
          user: '',
          password: '',
        },
        arr:[],
        
      };
    },
  methods:{
    guardar(dato){
      console.log(dato)
      if (!dato.selectedAccountType || !dato.user || !dato.password) {
        // Si falta algún dato requerido, muestra un mensaje de error o realiza alguna acción apropiada.
        alert('Por favor, complete todos los campos.');
        return;
      }
      if(!localStorage.local){
        this.arr=[]
      }else{
        this.arr=JSON.parse(localStorage.getItem("local"))
        }

      this.arr.push(dato)
      localStorage.setItem("local",JSON.stringify(this.arr))
      this.dato={selectedAccountType:"",user:"",password:""}
    }
  },
  created: function () {
    // Cargar los datos del localStorage al iniciar la aplicación
    if (localStorage.local) {
      this.arr = JSON.parse(localStorage.getItem("local"));
    }
  },
  
    




}

</script>