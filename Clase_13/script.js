const boton = document.querySelector('button');
const formulario = document.querySelector('form');

const nombre = document.querySelector('#nombre');
const inputPass = document.querySelector('#pass');
const inputTel = document.querySelector('#tel');

/*
const campos = document.querySelectorAll('input');
const hobbies = document.getElementsByName('hobbies');
const nacionalidades = document.getElementsByName('nacionalidad');
*/


const inscripcion = {
        nombre: '',
        telefono: '',
        contrasenia: '',
        hobbies: '',
        nacionalidad: ''
}
boton.removeAttribute('disabled');
// nombre.classList.remove('error')

let areaErrores = `<section  class="areaErrores">
                    <ul id="areaErrores">
                    </ul>
                    </section>`;
formulario.innerHTML += areaErrores;


formulario.addEventListener('submit', validar);

console.log('Clase 13')

nombre.addEventListener('blur', function(){
    console.log('Hola')
    nombre.classList.remove('error');
});
inputPass.addEventListener('focus', function(){
    inputPass.classList.remove('error');
})
inputTel.addEventListener('focus', function(){
    inputTel.classList.remove('error');
})



function validar(evento){
    evento.preventDefault();

    let errores = [];

    if( nombre.value.trim() == '' ) {
        //nombre.classList.add('error')
        errores.push('Por favor, complete el nombre');
    } else {
        console.log('NOmbre Correcto!');
        inscripcion.nombre = nombre.value;
    }

    if( inputPass.value.trim() === '' ) {
        inputPass.classList.add('error')
        console.log('error' + inputPass)
        errores.push('Por favor, complete la Contraseña');
    } else {
        inscripcion.contrasenia = inputPass.value;
    }


    if( inputTel.value.trim() === '' ) {
        inputTel.classList.add('error')
        errores.push('Por favor, complete el Tel');
    } else {
        inscripcion.telefono = inputTel.value;
    }


    //console.log(errores);

    // En el caso de que no se encuentren error se envian los datos
    if(  errores.length > 0 ){
        console.log('Hay Errores', errores);

        errores.forEach(error => {
            document.getElementById('areaErrores').innerHTML += `<li> ${error} </li>`
            
        });

    } else {
        console.log('Enviando datos al servidor...');
        console.table(inscripcion);
    }

}