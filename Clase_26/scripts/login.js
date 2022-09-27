// Evaluamos si ya hay un jwt
const jwt = localStorage.getItem('jwt');
const url = 'https://ctd-fe2-todo-v2.herokuapp.com/v1';
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
        let email = inputEmail.value;
        let password = inputPassword.value;
        if( !validarTexto(email) ){
            Swal.fire({
                title: 'To DO',
                text: 'Por favor, Complete el email',
                icon: 'warning',
                confirmButtonText: 'Aceptar'
            })
            return
        }

        if( !validarEmail(email) ){

            msgBox('To DO', 'Formato de Email invalido', 'info');

            return
        }
        
        if( !validarTexto(password) ){
            Swal.fire({
                title: 'To DO',
                text: 'Por favor, Complete el Password',
                icon: 'warning',
                confirmButtonText: 'Aceptar'
            })
            return
        }

        console.log('Preparando Datos');
        const datosUsuario = {
            email: email,
            password: password
        }

        console.log(datosUsuario);
        realizarLogin(datosUsuario);

    });

    
    /* -------------------------------------------------------------------------- */
    /*                     FUNCIÓN 2: Realizar el login [POST]                    */
    /* -------------------------------------------------------------------------- */
    function realizarLogin(datosUsuario) {

       const config = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(datosUsuario)
       }

       fetch(`${url}/users/login`, config).then(  (response) =>  response.json() )
       .then( (data) => {
            console.log(data);
 
            if( data.jwt){ // Guardo el token
                localStorage.setItem('jwt', data.jwt);
                location.replace('mis-tareas.html');
            } else {
                
                Swal.fire({
                    title: 'To DO',
                    text: 'Usuario o Contaseña invalidos',
                    icon: 'warning',
                    confirmButtonText: 'Aceptar'
                })
            }

       }).catch ( (response) => {
            console.error( response);
       })

    };


});