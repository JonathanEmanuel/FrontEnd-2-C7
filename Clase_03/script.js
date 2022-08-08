/* -------------------------- Script Principal -------------------------- */
/*  R
    1. solicitar el min
    2. Solicitar el max
    3. Mostra el número
*/
/* 
let min = parseInt(  prompt('Ingrese el minimo')  );
let max = parseInt(  prompt('Ingrese el max')  );
let random =  Math.round( Math.random() * (max - min) + min) ;

console.log(random);
 */

// Eligir una peli random

//                    0              1             2
/* let peliculas = ['Iron man', 'Capitan America', 'Hulk'];
let max = peliculas.length;
let min = 0;
let posRandom = generarRandom(min, max)

console.log(posRandom);
console.log( peliculas[posRandom] );


function generarRandom(min, max){
    let numero = Math.floor( Math.random() * (max - min) + min);
    return numero;
} */

/*
    1. Pedir jugar
    1.a Validar
    2. Generar Jugada
    3. Determinar Ganador
    4. Mostrar el ganador
*/


/* ----------------------------- Juego Principal ---------------------------- */
const EMPATE = 0;
const GANASTE = 1;
const PERDISTE = 2;

let ptosUsuario = 0;
let ptosMaquina = 0;


while( ptosMaquina <= 3 || ptosUsuario <= 3  ){
    let opcionUsuario = pedirOpcion();
    let opcionMaquina = jugarMaquina();
    let resultado = juego(opcionUsuario, opcionMaquina);


}

/* ------------------------------- comentario ------------------------------- */


function pedirOpcion(){
    let usuario
    // Validar que el numero este entre 1 y 3
    do {
        usuario = parseInt( prompt( `Ingresar Jugada 
                                1- Piedra
                                2- Papel
                                3- Tijera
                            `) );
        console.log(usuario)
                                // 4
    } while(  isNaN(usuario) || !(usuario >= 1 && usuario <= 3 ) ) // isNaN(n) -> Valida si el parametro es un No Numero

}

function jugarMaquina(){
    let maquina = Math.round(  Math.random() * (3 -1) +1  );
    return maquina;
}

function juego(opcionUsuario,opcionMaquina){
    if(opcionUsuario === opcionMaquina){
        return EMPATE;
    }else if(opcionUsuario===PIEDRA){
        if (opcionMaquina===PAPEL){
            return PERDISTE;
        }else if(opcionMaquina===TIJERA){
            return GANASTE;
        }
    }else if(opcionUsuario===PAPEL){
        if(opcionMaquina===TIJERA){
            return PERDISTE;
        }else if(opcionMaquina===PIEDRA){
            return GANASTE;
        }
        else if (opcionUsuario===TIJERA){
            if(opcionMaquina===PIEDRA){
                return PERDISTE;
            }else if (opcionMaquina===PAPEL){
                return GANASTE;
            }
        }
    }
}










