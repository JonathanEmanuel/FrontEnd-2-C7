// Declarar variables globales
let formulario = document.querySelector('form');
let inputBusqueda = document.querySelector('#busqueda');
let historial = document.querySelector('#busquedas-realizadas');
let busquedas = [];

if( localStorage.getItem('historial') ) {
    busquedas = JSON.parse( localStorage.getItem('historial') );
}

rederizarBusquedas(busquedas);

// Leer los datos del formulario
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();
    
    let palabra = normalizar(inputBusqueda);

    if( palabra != ''){
        console.log(palabra);
        busquedas.push(palabra);
        inputBusqueda.value = '';
        
        guardarDatos(busquedas);
        rederizarBusquedas(busquedas);
        abrirBusqueda(palabra);
    }
})

// Guardar datos en el localStorage
function guardarDatos(listado){
    localStorage.setItem('historial', JSON.stringify(listado) );
}

// Noramalizar
function normalizar(input) {
    let palabra = input.value.trim();
    return palabra;
}

// Rederizado del historial ['mate', 'mouse', 'gatito']
function rederizarBusquedas(listado){
   historial.innerHTML = '';

    listado.forEach(elemento => {
        let parrafo = document.createElement('p');
        parrafo.textContent = elemento;
        historial.appendChild(parrafo);
    });
}

// Redireccionar a Google con el parametro de busqueda
function abrirBusqueda(palabra){
    location.replace(`https://www.google.com.ar/search?q=${palabra}`);
}