 console.log('Inicio del Programa');
//console.log(   alert("Bienvenidos") );
// Alert No retorna ningun valor

// Confim Retorna un boolean
//console.log(  confirm('Validar') );

let nombre = prompt('Ingrese su nombre');
let numeroRandom;

    //  false ||  true
while(   confirm('¿Jugar?')   ){
    numeroRandom = Math.round(  Math.random() * (6 - 1) + 1 ); 
    alert('El dado dio ' + numeroRandom);
    console.log('número ' + numeroRandom);
}


console.log('Fin del programa');


let dia = parseInt( prompt('Ingrese el número del día') );
console.log(dia, typeof(dia));

 

const gatito = {
    nombre: 'Mei',
    color: 'Blanco',
    edad: 2
}

let gatitos = [
    {
        nombre: 'Mei',
        color: 'Blanco',
        especie: 'Gato',
        edad: 2
    },
    {
        nombre: 'Chimu',
        color: 'Negra',
        especie: 'Gato',
        edad: 10
    },
    {
        nombre: 'Gris',
        color: 'Blanco',
        especie: 'Gato',
        edad: 1
    }
]

for (const gatito of gatitos) {
    console.log(gatito.color)
}


// Itera sobre un objeto iterable, obteniendo las propiedad 
for (const propiedad in gatito) {
    console.log(propiedad);
    console.log('-----');
    console.log(  gatito[propiedad]  );
}