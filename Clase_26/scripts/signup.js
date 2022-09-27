window.addEventListener('load', function () {
    /* ---------------------- obtenemos variables globales ---------------------- */
    const inputNombre = document.querySelector('#inputNombre');
    const inputApellido = document.querySelector('#inputApellido');
    const inputEmail = document.querySelector('#inputEmail');
    const inputPassword = document.querySelector('#inputPassword');
    const inputPasswordRepetida = document.querySelector('#inputPasswordRepetida');
    const form = document.querySelector('form');
    const url = 'https://ctd-fe2-todo-v2.herokuapp.com/v1';

    

    /* -------------------------------------------------------------------------- */
    /*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
    /* -------------------------------------------------------------------------- */
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        let email = normalizarEmail(inputEmail.value);
        let firstName = normalizarTexto(inputNombre.value);
        let lastName = normalizarTexto(inputApellido.value );
        if( !validarEmail(email)){
            alert('Email incorrecto');
        }

        if(  ! compararContrasenias(inputPassword.value, inputPasswordRepetida.value) ){
            alert(' Las contraseñas no coinciden');
        }

        

        let password = inputPassword.value;

        const datos = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        }

/*         
        const datos2 = {
            firstName,
            lastName,
            email,
            password
        }
 */
        console.table(datos);
        realizarRegister(datos)
        form.reset();
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
     
        // Inicia la consulta a la API
        fetch(`${url}/users`,config ).then(  (response) => { 
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