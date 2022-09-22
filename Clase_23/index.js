// Simulamos un proceso que demora 5 segundos en completarse
const tiempoDeCarga = 5000;
 
function animarBarra() {
    // Seleccionamos el elemento barra
    let elem = document.getElementById("barra");
 
    // Inicializamos el progreso en 0, para asegurarnos
    // que siempre arranque desde el principio
    let width = 0;
    
    // Calculamos el progreso en base al tiempo total de carga,
    const progresoSobreTiempoTotal = tiempoDeCarga / 100;
    
    // Creamos un intervalo que se repita en el tiempo que calculamos
    // para ir incrementando el progreso.
    let id = setInterval(incrementarProgreso, progresoSobreTiempoTotal);
    
    function incrementarProgreso() {
        // Si el progreso esta completo, detenemos el programa
        if (width >= 100) {
        clearInterval(id);
        } else {
        width++;
    
        // Modificamos el DOM, para impactar el nuevo progreso.
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
        }
    }
}
 
document.querySelector("#iniciar-carga").addEventListener("click", animarBarra);

// Repíte en un intervalo de tiempo la funcion pasada por parametro
/*
setInterval(saludar, 1000);

function saludar(){
    console.log('Hola');
}
*/