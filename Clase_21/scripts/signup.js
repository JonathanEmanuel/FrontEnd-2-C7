window.addEventListener('load', function () {
    /* ---------------------- obtenemos variables globales ---------------------- */
    const inputNombre = document.querySelector('#inputNombre');
    const inputApellido = document.querySelector('#inputApellido');
    const inputEmail = document.querySelector('#inputEmail');
    const inputPassword = document.querySelector('#inputPassword');
    const inputPasswordRepetida = document.querySelector('#inputPasswordRepetida');
    const form = document.querySelector('form');

    

    /* -------------------------------------------------------------------------- */
    /*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
    /* -------------------------------------------------------------------------- */
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const datos = {
            firstName: inputNombre.value,
            lastName: inputApellido.value,
            email: inputEmail.value,
            password: inputPassword.value
        }

        console.table(datos);
        realizarRegister(datos)

        //form.reset();

    });

    /* -------------------------------------------------------------------------- */
    /*                    FUNCIÓN 2: Realizar el signup [POST]                    */
    /* -------------------------------------------------------------------------- */
    function realizarRegister(usuario) {
        // Configuraciones de la peticion del Fetch
        const config = {
            method: 'POST',
            body: JSON.stringify(usuario),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const url = 'https://ctd-todo-api.herokuapp.com/v1/users';

        // Inicia la consulta a la API
        fetch(url,config ).then(  (response) => { 
            console.log(response);
            return response.json();
         })
         .then(  (data) => {
            console.log(data);
            if( data.jwt ){
                localStorage.setItem('jwt', data.jwt);
                location.replace('mis-tareas.html');
            }
         })



    };


});