// SEGURIDAD: Si no se encuentra en localStorage info del usuario
// no lo deja acceder a la página, redirigiendo al login inmediatamente.
const jwt = localStorage.getItem('jwt');
const url = 'https://ctd-fe2-todo-v2.herokuapp.com/v1';

if( !jwt ){
  location.replace('index.html');
}


/* ------ comienzan las funcionalidades una vez que carga el documento ------ */
window.addEventListener('load', function () {
  AOS.init();
  
  /* ---------------- variables globales y llamado a funciones ---------------- */
  const btnCerrarSesion = document.querySelector('#closeApp');
  const formCrearTarea =  document.querySelector('form.nueva-tarea');
  const nombreUsuario = document.querySelector('.user-info p');
  const contenedorTareasPendientes = document.querySelector('.tareas-pendientes');
  const contenedorTareasTerminadas = document.querySelector('.tareas-terminadas');
  const cantidadFinalizadas = document.querySelector('#cantidad-finalizadas');
  const inputTarea = document.querySelector('#nuevaTarea');

  /* -------------------------------------------------------------------------- */
  /*                          FUNCIÓN 1 - Cerrar sesión                         */
  /* -------------------------------------------------------------------------- */

  btnCerrarSesion.addEventListener('click', function () {

    Swal.fire({
      title: 'Cerrar Sesión',
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: 'Salir',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      console.log(result)
      if( result.isConfirmed){
        localStorage.clear();
        location.replace('index.html');
      }
    })

  });

  /* -------------------------------------------------------------------------- */
  /*                 FUNCIÓN 2 - Obtener nombre de usuario [GET]                */
  /* -------------------------------------------------------------------------- */
  function obtenerNombreUsuario() {
   const config = {
    method: 'GET',
    headers: {
      authorization: jwt
    }
   }

   fetch(`${url}/users/getMe` , config).then( response => response.json() )
   .then(  (data) => {
    console.log(data);
    nombreUsuario.textContent = data.firstName;
   })

  };


  /* -------------------------------------------------------------------------- */
  /*                 FUNCIÓN 3 - Obtener listado de tareas [GET]                */
  /* -------------------------------------------------------------------------- */
  function consultarTareas() {
    const config = {
      method: 'GET',
      headers: {
        authorization: jwt
      }
    }
  
    fetch(`${url}/tasks`, config).then(  response => response.json() )
    .then( data => {
      console.log(data);

      data = data.sort( function(a, b){return b.description < a.description})
      renderizarTareas(data);
    })

  };


  /* -------------------------------------------------------------------------- */
  /*                    FUNCIÓN 4 - Crear nueva tarea [POST]                    */
  /* -------------------------------------------------------------------------- */
  formCrearTarea.addEventListener('submit', function (event) {

    // Solicitud a la API con el method POST
    event.preventDefault();
    console.log('Creando tarea ', inputTarea.value );

    let tarea = inputTarea.value;

    if( !validarTexto(tarea) ){
      Swal.fire({
          title: 'To DO',
          text: 'Por favor, complete la Tarea',
          icon: 'warning',
          confirmButtonText: 'Aceptar'
      })
      return
  }

    // preparamos el objeto a enviar al servidor
    const nueva = {
      description: inputTarea.value,
      completed: false
    }

    // armamos la carta(peticion) como la pide el servidor (ver documentacion)
    const configuraciones = {
      method:'POST',
      headers: {
        authorization: jwt,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(nueva)
    }

    fetch( `${url}/tasks`, configuraciones)
    .then( respuesta => respuesta.json())
    .then( info => {
      console.log("Tarea recien posteada 👇");
      console.log(info);
      inputTarea.value = '';
      // necesitamos recargar nuestra interfaz
      consultarTareas();

    })
    .catch( error => console.log(error))
  });

  /* -------------------------------------------------------------------------- */
  /*                  FUNCIÓN 5 - Renderizar tareas en pantalla                 */
  /* -------------------------------------------------------------------------- */
  function renderizarTareas(listado) {
    contenedorTareasPendientes.innerHTML = '';
    contenedorTareasTerminadas.innerHTML = '';
    
    let contador = 0;

    listado.forEach(tarea => {

      if( tarea.completed) {
        contador++;
        contenedorTareasTerminadas.innerHTML += `
          <li class="tarea" data-aos="fade-up" data-aos-duration="1000">
            <div class="hecha">
              <i class="fa-regular fa-circle-check"></i>
            </div>
            <div class="descripcion">
              <p class="nombre">${ tarea.description }</p>
              <div class="cambios-estados">
                <button class="change incompleta" id="${tarea.id}" type="button"><i class="fa-solid fa-rotate-left"></i></button>
                <button class="borrar" id="${tarea.id}" type="button"><i class="fa-regular fa-trash-can"></i></button>
              </div>
            </div>
          </li>`;
      } else {
        contenedorTareasPendientes.innerHTML += `
        <li class="tarea" data-aos="flip-up" data-aos-duration="1000">
            <button class="change" id="${
              tarea.id
            }"><i class="fa-regular fa-circle"></i></button>
            <div class="descripcion">
              <p class="nombre">${tarea.description}</p>
              <p class="timestamp">${  new Date(tarea.createdAt).toLocaleDateString()  }</p>
            </div>
          </li>`;
      }

    });

    cantidadFinalizadas.textContent = contador;

    const botonesCambiarEstado = document.querySelectorAll('.change');
    const botonesBorrar = document.querySelectorAll('.borrar');

    botonesCambiarEstado.forEach(boton => {
      boton.addEventListener('click', function(){
        botonesCambioEstado(this);
      })
    });

    botonesBorrar.forEach(boton => {
      boton.addEventListener('click', function(event){
        botonBorrarTarea(event.target);
      })
    });

  };

  /* -------------------------------------------------------------------------- */
  /*                  FUNCIÓN 6 - Cambiar estado de tarea [PUT]                 */
  /* -------------------------------------------------------------------------- */
  function botonesCambioEstado(elemento) {
    console.log(elemento);
    console.log(elemento.classList.contains('incompleta')); // Obtiene un true o false si exite la clase

    
    let tarea = {
      completed: !elemento.classList.contains('incompleta') ? true : false
    }

    const config = {
      method: 'PUT',
      headers: {
        authorization: jwt,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tarea)
    }
    fetch(`${url}/tasks/${elemento.id}`, config).then(  response => response.json() )
    .then( data => {
      console.log(data);
      // Vuelve a recargar las tareas
      consultarTareas();
    })
  }


  /* -------------------------------------------------------------------------- */
  /*                     FUNCIÓN 7 - Eliminar tarea [DELETE]                    */
  /* -------------------------------------------------------------------------- */
  function botonBorrarTarea(elemento) {
    console.log(elemento);
    console.log(elemento.id);

    Swal.fire({
      title: 'To DO',
      text: '¿Confirma eliminar la tarea?',
      icon: 'question',

      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      console.log(result)
      if( result.isConfirmed){
        const config = {
          method: 'DELETE',
          headers: {
            authorization: jwt
          }
        }
        fetch(`${url}/tasks/${elemento.id}`, config).then(  response => response.json() )
        .then( data => {
          console.log(data);
          // Vuelve a recargar las tareas
          consultarTareas();
        }) 
      }
    })


  
  };

  obtenerNombreUsuario();
  consultarTareas();
});