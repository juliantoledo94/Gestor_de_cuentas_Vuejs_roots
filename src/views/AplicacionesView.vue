<template>
    <div class="apps">
  
      <p>{{i}} -- {{$route.params.id}}</p>
        <div v-if="i=='1'" class="left">
                <h2>Gmail</h2>
            <img src="../assets/gmail_logo.png" alt="Logo de gmail" />
    
            <div class="texto">
                <p>Gmail es un servicio de correo electrónico desarrollado por Google. Aquí tienes una descripción general de la aplicación de Gmail:</p>

                <p><strong>Nombre:</strong> Gmail</p>
                <p><strong>Desarrollador:</strong> Google LLC</p>
                <p><strong>Plataformas:</strong> Disponible en web y como aplicación para dispositivos móviles (Android e iOS).</p>

                <p><strong>Descripción:</strong><br>
                Gmail es una aplicación de correo electrónico que ofrece a los usuarios la posibilidad de enviar y recibir mensajes electrónicos a través de Internet. Es conocido por su interfaz intuitiva, potentes funciones de organización y sólida capacidad de búsqueda.</p>

                <p><strong>Características Principales:</strong></p>

                <ul>
                    <li><strong>Interfaz Limpia y Fácil de Usar:</strong> La interfaz de Gmail es simple y fácil de navegar, lo que facilita la gestión de correos electrónicos.</li>

                    <li><strong>Almacenamiento Generoso:</strong> Los usuarios de Gmail disfrutan de un considerable espacio de almacenamiento gratuito en la nube para sus correos electrónicos y archivos adjuntos.</li>

                    <li><strong>Potente Sistema de Búsqueda:</strong> Gmail cuenta con un sistema de búsqueda avanzado que permite a los usuarios encontrar rápidamente correos electrónicos específicos entre grandes cantidades de mensajes.</li>

                    <li><strong>Organización Automática:</strong> Gmail organiza automáticamente los correos electrónicos en categorías como "Principal", "Social" y "Promociones", lo que facilita la priorización de mensajes importantes.</li>

                    <li><strong>Filtros y Etiquetas:</strong> Los usuarios pueden aplicar filtros y etiquetas para organizar y categorizar automáticamente los correos electrónicos entrantes.</li>

                    <li><strong>Chat Integrado:</strong> Gmail integra funciones de chat, permitiendo a los usuarios comunicarse en tiempo real con contactos directamente desde la interfaz del correo electrónico.</li>

                    <li><strong>Seguridad:</strong> Gmail implementa medidas de seguridad robustas, como la detección de phishing y la autenticación en dos pasos, para proteger las cuentas de los usuarios.</li>

                    <li><strong>Integración con Google Workspace:</strong> Permite la integración con otras herramientas y servicios de Google, como Google Calendar, Google Drive y Google Meet.</li>

                    <li><strong>Acceso sin Conexión:</strong> Los usuarios pueden acceder a sus correos electrónicos incluso sin conexión a Internet, permitiendo la lectura y redacción de correos que se sincronizan cuando se restablece la conexión.</li>

                    <li><strong>Actualizaciones Constantes:</strong> Google actualiza regularmente la aplicación de Gmail para agregar nuevas características, mejorar la seguridad y proporcionar una experiencia de usuario mejorada.</li>
                </ul>

                <p>Gmail ha sido fundamental en la evolución del correo electrónico, ofreciendo a los usuarios una solución robusta y fácil de usar para la gestión de sus comunicaciones electrónicas.</p>
            </div>
  
        </div>  
  
        <div v-else-if="i=='2'" class="left"> 
            <h2>Netflix</h2>
  
            <img src="../assets/netflix_logo.png" alt="Logo de netflix" />
            <p>Netflix es un servicio de transmisión en línea que ofrece una amplia variedad de contenidos audiovisuales, incluyendo películas, series de televisión, documentales y contenido original. A continuación, se presenta una descripción general de la aplicación Netflix:</p>

            <p><strong>Nombre:</strong> Netflix</p>
            <p><strong>Desarrollador:</strong> Netflix, Inc.</p>
            <p><strong>Plataformas:</strong> Disponible en web y como aplicación para dispositivos móviles (Android e iOS), así como en varias plataformas de transmisión de medios.</p>

            <p><strong>Descripción:</strong><br>
            Netflix es una plataforma de transmisión que permite a los usuarios ver una amplia gama de contenidos audiovisuales a través de Internet. Reconocido por su extenso catálogo, Netflix ofrece opciones de entretenimiento para diversos gustos y preferencias.</p>

            <p><strong>Características Principales:</strong></p>

            <ul>
                <li><strong>Amplio Catálogo:</strong> Netflix ofrece una extensa biblioteca de películas, series, documentales y contenido original, abarcando diversos géneros y temáticas.</li>

                <li><strong>Transmisión en Calidad HD/4K:</strong> Los usuarios pueden disfrutar de contenido en alta definición y calidad 4K, brindando una experiencia visual envolvente.</li>

                <li><strong>Contenido Original:</strong> Netflix produce y presenta contenido exclusivo, incluyendo series y películas que no están disponibles en otras plataformas.</li>

                <li><strong>Perfiles Personalizados:</strong> Permite a los usuarios crear perfiles personalizados, adaptando las recomendaciones y preferencias de visualización a cada usuario.</li>

                <li><strong>Descargas para Visualización sin Conexión:</strong> Los usuarios pueden descargar contenido para verlo sin conexión, ideal para disfrutar de películas y series en movimiento.</li>

                <li><strong>Reproducción Continua:</strong> Netflix reproduce automáticamente el siguiente episodio de una serie, ofreciendo una experiencia de visualización continua.</li>

                <li><strong>Recomendaciones Personalizadas:</strong> Utiliza algoritmos de recomendación para sugerir contenido basado en el historial de visualización y preferencias del usuario.</li>

                <li><strong>Compatibilidad Multiplataforma:</strong> Disponible en una variedad de dispositivos, desde televisores inteligentes y computadoras hasta tabletas y teléfonos móviles.</li>

                <li><strong>Actualizaciones Frecuentes de Contenido:</strong> Netflix actualiza regularmente su catálogo con nuevas películas, series y documentales para mantener el interés de los usuarios.</li>
            </ul>

            <p>Netflix ha transformado la forma en que las personas consumen contenido audiovisual, ofreciendo una experiencia de transmisión conveniente y diversa para usuarios de todo el mundo.</p>
        </div>
        
  
        <div v-else-if="i=='3'" class="left">
            <h2>Steam</h2>
  
            <img src="../assets/steam_logo.jpg" alt="Logo de steam" />
            <div class="texto">
                <p>Steam es una plataforma de distribución digital y comunidad de jugadores que ofrece una amplia variedad de videojuegos, software y contenido relacionado con los videojuegos. A continuación, se presenta una descripción general de la aplicación Steam:</p>

                <p><strong>Nombre:</strong> Steam</p>
                <p><strong>Desarrollador:</strong> Valve Corporation</p>
                <p><strong>Plataformas:</strong> Disponible en web y como aplicación para sistemas operativos Windows, macOS y Linux.</p>

                <p><strong>Descripción:</strong><br>
                Steam es una plataforma integral para la compra, descarga y gestión de videojuegos y otros tipos de software relacionado con los juegos. Además de ser una tienda digital, Steam proporciona funciones sociales y de comunidad para conectar a jugadores de todo el mundo.</p>

                <p><strong>Características Principales:</strong></p>

                <ul>
                    <li><strong>Amplia Biblioteca de Juegos:</strong> Steam ofrece una extensa biblioteca de videojuegos de diversos géneros, desde títulos populares hasta juegos independientes.</li>

                    <li><strong>Plataforma de Distribución Digital:</strong> Permite a los usuarios comprar y descargar juegos de forma digital, eliminando la necesidad de soportes físicos.</li>

                    <li><strong>Actualizaciones Automáticas:</strong> Los juegos adquiridos en Steam se actualizan automáticamente, asegurando que los jugadores tengan acceso a las últimas versiones y mejoras.</li>

                    <li><strong>Comunidad y Funciones Sociales:</strong> Steam ofrece funciones sociales, incluyendo perfiles de usuario, amigos, grupos y chat, facilitando la interacción entre jugadores.</li>

                    <li><strong>Steam Workshop:</strong> Permite a los jugadores crear, compartir y descargar contenido generado por la comunidad, como mods y elementos personalizados.</li>

                    <li><strong>Descargas en Segundo Plano:</strong> Los usuarios pueden descargar juegos mientras juegan otros o realizan otras tareas en segundo plano.</li>

                    <li><strong>Steam Cloud:</strong> Almacena datos de juegos en la nube, permitiendo a los usuarios acceder a su progreso y configuraciones desde diferentes dispositivos.</li>

                    <li><strong>Ofertas y Descuentos:</strong> Steam ofrece regularmente promociones, descuentos y eventos de ventas, permitiendo a los usuarios adquirir juegos a precios reducidos.</li>

                    <li><strong>Transmisión de Juegos:</strong> Steam permite a los usuarios transmitir juegos a través de la red local a otros dispositivos, como televisores o computadoras en la misma red.</li>

                    <li><strong>Soporte para Realidad Virtual (VR):</strong> Steam es compatible con juegos y experiencias de realidad virtual, brindando opciones inmersivas a los usuarios.</li>
                </ul>

                <p>Steam ha desempeñado un papel fundamental en la industria de los videojuegos, ofreciendo una plataforma integral que combina aspectos comerciales, sociales y de entretenimiento para jugadores de todas partes del mundo.</p>
            </div>
            
        </div>

        <div v-else class="left">
          <h2>Github</h2>

          <img src="../assets/github_logo.jpg" alt="Github Logo" />
          <div class="texto">
            <p>GitHub es una plataforma de desarrollo colaborativo que ofrece servicios para el control de versiones y alojamiento de proyectos. A continuación, se presenta una descripción general de la aplicación GitHub:</p>

            <p><strong>Nombre:</strong> GitHub</p>
            <p><strong>Desarrollador:</strong> GitHub, Inc.</p>
            <p><strong>Plataformas:</strong> Disponible en web y como aplicación para sistemas operativos Windows, macOS y Linux.</p>

            <p><strong>Descripción:</strong><br>
            GitHub es una plataforma que facilita la colaboración y el desarrollo de software mediante el control de versiones utilizando Git. Permite a los desarrolladores alojar y revisar código, gestionar proyectos y trabajar de manera colaborativa en equipos distribuidos.</p>

            <p><strong>Características Principales:</strong></p>

            <ul>
                <li><strong>Control de Versiones con Git:</strong> GitHub utiliza el sistema de control de versiones distribuido Git, lo que facilita el seguimiento de cambios en el código y la colaboración en proyectos.</li>

                <li><strong>Alojamiento de Repositorios:</strong> Los desarrolladores pueden alojar sus proyectos en repositorios públicos o privados en GitHub, permitiendo un acceso fácil y seguro al código fuente.</li>

                <li><strong>Colaboración en Equipos:</strong> GitHub facilita la colaboración en equipos distribuidos, permitiendo a los desarrolladores trabajar juntos en proyectos de manera eficiente.</li>

                <li><strong>Gestión de Proyectos:</strong> Ofrece herramientas para la gestión de proyectos, incluyendo tableros de proyectos, seguimiento de problemas y herramientas de planificación.</li>

                <li><strong>Revisión de Código:</strong> Los desarrolladores pueden realizar revisiones de código, comentar en líneas específicas y colaborar en la mejora del código fuente.</li>

                <li><strong>Integración Continua:</strong> GitHub admite la integración continua, permitiendo la ejecución automática de pruebas y flujos de trabajo en cada cambio realizado en el código.</li>

                <li><strong>Despliegue Automático:</strong> Puede integrarse con servicios de despliegue automático para implementar automáticamente cambios en entornos de producción.</li>

                <li><strong>Comunidades y Redes Sociales:</strong> GitHub fomenta la formación de comunidades alrededor de proyectos, permitiendo a los usuarios seguir, contribuir y aprender de otros desarrolladores.</li>

                <li><strong>Seguridad y Acceso Controlado:</strong> GitHub ofrece funcionalidades de seguridad, autenticación de dos factores y control de acceso para garantizar la integridad del código fuente.</li>

                <li><strong>Wiki y Documentación:</strong> Los repositorios pueden incluir wikis y documentación para facilitar la comprensión y el uso del proyecto.</li>

                <li><strong>Estadísticas y Métricas:</strong> GitHub proporciona estadísticas detalladas sobre la actividad del repositorio, contribuciones y colaboradores.</li>
            </ul>

            <p>GitHub se ha convertido en una herramienta fundamental para desarrolladores y equipos de desarrollo en todo el mundo, proporcionando una plataforma robusta y colaborativa para la construcción de software.</p>
         
        </div>
      </div>
        
        
        
  
        <button @click="$router.go(-1)">Volver</button>
          
    </div>
  </template>
  
  <script>
  export default {
    name: 'ApliacionesView',
    data:function(){
      return {
          i:"",
          
    }
   
  },
  mounted: function(){
          this.recuperarApp();
  
        }, 
        
    methods:{
          recuperarApp: function(){
                      
          this.i = this.$route.params.id;
          this.e = this.$route.params.estreno
  
          console.log(this.i + " ")
  
             console.log(this.$route.params.id)
              },
  
           
      }
  }
  </script>
  
  <style>
  
    * {
    box-sizing: border-box;
  }
  .apps{
    color: grey;
  
  }
  .left img{
    float:left;
    shape-outside: circle(50%);
    border-radius:50%;
    margin: 5%;
  }
  .texto{text-align: left;
  padding-right: 5%;
  padding-top: 5%}
  
  .left{overflow: auto;}
  
  ul{
    list-style: none;
  }
  </style>
  