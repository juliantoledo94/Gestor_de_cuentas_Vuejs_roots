<template>
  <div id="app">
    <h1 class="container d-flex justify-content-center  cherryBomb pb-2 mb-4  border-bottom border-warning">Gestor de cuentas</h1>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/ingresar">Ingresar</router-link> |
      <router-link to="/ver">Ver</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

h1{
    font-size: 4rem;
    
}
</style>
