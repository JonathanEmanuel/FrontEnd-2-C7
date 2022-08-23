const formulario = document.querySelector('form');
const divMensaje = document.querySelector('#mensaje');
let inputNombre = document.querySelector('#nombre'); 
let inputEmail = document.querySelector('#email'); 
let textConsulta = document.querySelector('#consulta'); 

// Validar campos completos
formulario.addEventListener('submit', function(evento){
    evento.preventDefault();
    console.log('Envio de Datos')

    let nombre = inputNombre.value;
    let email = inputEmail.value;
    let consulta = textConsulta.value;

    console.log(nombre, email, consulta);
    validarDatos(nombre, email, consulta);

})

function validarDatos(nombre, email, consulta){
    /*
    let nombre = inputNombre.value;
    let email = inputEmail.value;
    let consulta = textConsulta.value; 
    */

    if( nombre.trim().length == 0 || email.trim().length == 0 || consulta.trim().length == 0 ){
        mostrarMensaje();
    }
}



inputNombre.addEventListener('keypress', function(){
    ocultarMensaje();
})
inputEmail.addEventListener('keypress', function(){
    ocultarMensaje();
})
textConsulta.addEventListener('keypress', function(){
    ocultarMensaje();
})


function mostrarMensaje(){
    divMensaje.classList.remove('oculto');
}

function ocultarMensaje(){
    divMensaje.classList.add('oculto');
}


function agregarEvento(){
    let inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('keypress', function(){
            ocultarMensaje();
        });
        input.addEventListener('focus', function(){
            ocultarMensaje();
        })
    });
}
