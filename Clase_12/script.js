const boton = document.querySelector('button');
const formulario = document.querySelector('form');

const nombre = document.querySelector('#nombre');
const pass = document.querySelector('#pass');
const tel = document.querySelector('#tel');

const campos = document.querySelectorAll('input');

const hobbies = document.getElementsByName('hobbies');
const nacionalidades = document.getElementsByName('nacionalidad');



const inscripcion = {
        nombre: '',
        telefono: '',
        contrasenia: '',
        hobbies: '',
        nacionalidad: ''
}


/* window.addEventListener('keydown', function(evento){
    evento.preventDefault();
    console.log('Tecla', evento.key)
}) */



boton.removeAttribute('disabled');
nombre.classList.remove('error')

formulario.addEventListener('submit', validar);


function validar(evento){
    evento.preventDefault();
    console.log('Validando formulario');
    let listaHobbies = [];
    // Validacion de inputs
    campos.forEach(element => {
        if( element.value.trim() == ''){
            element.classList.add('error')
        }

        element.addEventListener('click', function(){
            element.classList.remove('error');
        })

    });

    hobbies.forEach(hobbie => {
        if( hobbie.checked == true){
            console.log(hobbie.id, hobbie.checked);
            listaHobbies.push(hobbie.id);
        }
    });

    if( listaHobbies.length > 4){
        // Mostar mensaje de error
    } else {
        inscripcion.hobbies = listaHobbies;

    }

    // Agregar los datos al objeto inscripcion
    inscripcion.nombre = nombre.value;


}