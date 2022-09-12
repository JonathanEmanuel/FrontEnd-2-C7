// Evaluamos si ya hay un jwt
const jwt = localStorage.getItem('jwt');

if( jwt ){
    location.replace('mis-tareas.html');
}


window.addEventListener('load', function () {
    /* ---------------------- obtenemos variables globales ---------------------- */
    const form = document.querySelector('form');
    const inputEmail = document.querySelector('#inputEmail');
    const inputPassword = document.querySelector('#inputPassword');



    /* -------------------------------------------------------------------------- */
    /*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
    /* -------------------------------------------------------------------------- */
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        console.log('Preparando Datos');
        const datosUsuario = {
            email: inputEmail.value,
            password: inputPassword.value
        }

        console.log(datosUsuario);
        realizarLogin(datosUsuario);

    });

    
    /* -------------------------------------------------------------------------- */
    /*                     FUNCIÓN 2: Realizar el login [POST]                    */
    /* -------------------------------------------------------------------------- */
    function realizarLogin(datosUsuario) {
       const url = 'https://ctd-todo-api.herokuapp.com/v1/users/login';

       const config = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(datosUsuario)
       }

       fetch(url, config).then(  (response) =>  response.json() )
       .then( (data) => {
            console.log(data);

            if( data.jwt){ // Guardo el token
                localStorage.setItem('jwt', data.jwt);
                location.replace('mis-tareas.html');
            }

       }).catch ( (response) => {
            console.error( response);

       })





        
    };


});