/*
REQUERIMIENTOS PARA LA APP

- utilizar el formulario para captar el texto ingresado Ok

- implementar el evento "submit", utilizarlo para guardar el comentario en un array - Ok

- cada vez que se agrega un nuevo comentario renderizarlo en una etiqueta "p"(sacar del html los hardcodeados y hacerlo dinamico) Ok

- constantemente guardar la informacion en localStorage, si se recarga la pagina deberian mantenerse los comentarios
*/

/* --------------------------- Variables globales --------------------------- */
const formulario = document.querySelector('form');
const inputComentario = document.querySelector('#comentario');
const areaComentarios = document.querySelector('#comentarios');
let listaComentarios = [];



/* ------------------------- Renderizar Comentarios ------------------------- */
function renderizarComentarios(lista){
    areaComentarios.innerHTML = '';  // Resetear 
    lista.forEach(elemento => {
        let parrafo = document.createElement('p');
        parrafo.innerText = elemento;
        areaComentarios.appendChild(parrafo);
    });
    guardarComentarios(listaComentarios);
}    
  

/* --------------------------- Guardar Datos en el Storage -------------------------- */
function guardarComentarios(lista){
    localStorage.setItem('listaComentarios', JSON.stringify(lista));
}

/* ------------------------- Leer Datos del Storage ------------------------- */
function leerComentarios(){
    let datos = localStorage.getItem('listaComentarios');

    if( datos ){
        listaComentarios = JSON.parse(datos);
        renderizarComentarios(listaComentarios);
    }

}

/* ---------------------- Leer el evento del Formulario --------------------- */
formulario.addEventListener('submit', function(evento){
    evento.preventDefault();
    let comentario = inputComentario.value.trim();

    if( comentario != ''  ){
        console.log('Agregando comentario');
        listaComentarios.push(comentario);
        inputComentario.value = '';
        console.log(listaComentarios);

        renderizarComentarios(listaComentarios);
    }


})


function normalizar(input){
    return input.value.trim();
}


leerComentarios();