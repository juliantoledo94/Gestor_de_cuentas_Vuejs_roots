<template>
    <div class="detalles">
        <ol>
  
          <li v-for="item in aplicaciones" :key="item.id">{{item.titulo}}
        
            <router-link :to="'/aplicaciones/' + item.id" > Ver Detalle </router-link>
  
          </li>
          
        </ol> 
        
    </div>
  </template>
  
  <script>
  export default {
    name: 'DetallesComponent',
    data:function(){
      return{
  
      aplicaciones:[
              {id:1, titulo: "Gmail"},
              {id:2, titulo: "Netflix"},
              {id:3, titulo: "Steam"},
              {id:4, titulo: "Github"}
              ]
    }
  },
    }
  
  
  
  </script>
  <style>
  *{
    box-sizing: border-box;
    margin: 0;
}
  .detalles{
    text-align: center;
  
  }
  ol {
    list-style-type: none;
  }
  ol li {padding: 15px; font-size: 1.3rem;}
  ol li a {border:none}
  
  [v-cloak] > * { display:none }
  
  
  </style>
  