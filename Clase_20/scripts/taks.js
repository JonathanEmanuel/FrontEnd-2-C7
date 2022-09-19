// SEGURIDAD: Si no se encuentra en localStorage info del usuario
// no lo deja acceder a la página, redirigiendo al login inmediatamente.
const jwt = localStorage.getItem('jwt');
if( !jwt ){
  location.replace('index.html');
}


/* ------ comienzan las funcionalidades una vez que carga el documento ------ */
window.addEventListener('load', function () {

  
  /* ---------------- variables globales y llamado a funciones ---------------- */
  const btnCerrarSesion = document.querySelector('#closeApp');
  const formCrearTarea =  document.querySelector('form.nueva-tarea');
  const nombreUsuario = document.querySelector('.user-info p');
  const contenedorTareas = document.querySelector('.tareas-pendientes');
  const inputTarea = document.querySelector('#nuevaTarea');

  /* -------------------------------------------------------------------------- */
  /*                          FUNCIÓN 1 - Cerrar sesión                         */
  /* -------------------------------------------------------------------------- */

  btnCerrarSesion.addEventListener('click', function () {
   console.log('Cerrar sesion');
   const confirmacion = confirm('¿Desea Salir?');

   if( confirmacion){
    localStorage.clear();
    location.replace('index.html');
   }



  });

  /* -------------------------------------------------------------------------- */
  /*                 FUNCIÓN 2 - Obtener nombre de usuario [GET]                */
  /* -------------------------------------------------------------------------- */

  function obtenerNombreUsuario() {
   const url = 'https://ctd-todo-api.herokuapp.com/v1/users/getMe';
   const config = {
    method: 'GET',
    headers: {
      authorization: jwt
    }
   }

   fetch(url, config).then( response => response.json() )
   .then(  (data) => {
    console.log(data);
    nombreUsuario.textContent = data.firstName;
   })

  };


  /* -------------------------------------------------------------------------- */
  /*                 FUNCIÓN 3 - Obtener listado de tareas [GET]                */
  /* -------------------------------------------------------------------------- */

  function consultarTareas() {
    const url = 'https://ctd-todo-api.herokuapp.com/v1/tasks';
    const config = {
      method: 'GET',
      headers: {
        authorization: jwt
      }
    }
  
    fetch(url, config).then(  response => response.json() )
    .then( data => {
      console.log(data);
      renderizarTareas(data);
    })



  };


  /* -------------------------------------------------------------------------- */
  /*                    FUNCIÓN 4 - Crear nueva tarea [POST]                    */
  /* -------------------------------------------------------------------------- */

  formCrearTarea.addEventListener('submit', function (event) {
    
  });


  /* -------------------------------------------------------------------------- */
  /*                  FUNCIÓN 5 - Renderizar tareas en pantalla                 */
  /* -------------------------------------------------------------------------- */
  function renderizarTareas(listado) {
    listado.forEach(tarea => {
      contenedorTareas.innerHTML += `
      <li class="tarea" data-aos="fade-up">
        <div class="hecha">
          <i class="fa-regular fa-circle-check"></i>
        </div>
        <div class="descripcion">
          <p class="nombre">${ tarea.description }</p>
          <div class="cambios-estados">
            <button class="change incompleta" id="tarea_id" type="button"><i class="fa-solid fa-rotate-left"></i></button>
            <button class="borrar" id="tarea2_id" type="button"><i class="fa-regular fa-trash-can"></i></button>
          </div>
        </div>
      </li>
      `;
    });


  };

  /* -------------------------------------------------------------------------- */
  /*                  FUNCIÓN 6 - Cambiar estado de tarea [PUT]                 */
  /* -------------------------------------------------------------------------- */
  function botonesCambioEstado() {
    
    



  }


  /* -------------------------------------------------------------------------- */
  /*                     FUNCIÓN 7 - Eliminar tarea [DELETE]                    */
  /* -------------------------------------------------------------------------- */
  function botonBorrarTarea() {
   
    

    

  };


  obtenerNombreUsuario();
  consultarTareas();
});