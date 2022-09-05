console.log('Clase 16 - AJAX');
// La promesa puede cumpliser (resolve) o puede falla (reject)
let miPromesa = new Promise( (resuelve, falla)=> {

    const cuenta = {
        usuario: 'John Do',
        saldo: 2000,
        activo: true
    }

    setTimeout( function() {
        if( cuenta.saldo < 1  ){
            // Saldo infucifiente
            falla({
                mensaje: "Saldo insuficiente"
            }) 
        } else if( cuenta.activo == false ){
            falla({
                mensaje: "Cuenta inactiva"
            }) 
        } else {
            resuelve({
                mensaje: "Cuenta Activa con saldo " + cuenta.saldo 
            }) 
        }

    }, 5000 ) // Simulamos la demora en el servidor

});

const cajero = document.querySelector('.bancaMobile');
const mensaje = document.querySelector('#mensaje');


// Simulando demora en el servidor con carga asincrona
miPromesa.then(  (respuesta)=> {  // resolve
    console.log('Respuesta Ok' + respuesta.mensaje)
    cajero.innerHTML= `<h4> Estado de la cuenta ${respuesta.mensaje} </h4>`;

}).catch( (error)=> { // reject
    console.log('error ' + error.mensaje)
    cajero.innerHTML= `<h4> Erro de la cuenta ${respuesta.mensaje} </h4>`;

})

mensaje.innerHTML = `<h2>Continua la carga de Datos</h2>`;
console.log('Carga de datos ');

