let gatitos = [
    {
        id: 1,
        nombre: 'Mei',
        color: 'Blanco',
        imgUrl: 'img/chimu.png',
        edad: 2
    },
    {
        id: 2,
        nombre: 'Chimu',
        color: 'Negra',
        imgUrl: 'img/chimu.png',
        edad: 10
    },
    {
        id:3,
        nombre: 'Gris',
        color: 'Gris',
        imgUrl: 'img/gris.jpg',
        edad: 1
    }
]

const contenedor = document.querySelector('main');
console.log(contenedor);



// Quitar la clase active a todas las card
// Agregar la clase active a la card por id
function seleccionar(id){
   // let activos = document.querySelectorAll('.active');
    //console.log( activos);

    //activos.classList.remove('active');
    

    let card = document.getElementById(id)
    card.classList.add('active');
    
}

function cambiarModo(){
    document.querySelector('body').classList.toggle('dark');
}

cambiarModo();

function crearCard(gatito, contenedor){
    let card = document.createElement('div');
    let titulo = document.createElement('h2');
    let imagen = document.createElement('img');
    let texto = document.createElement('p');

    titulo.innerText = gatito.nombre;
    imagen.setAttribute('src', gatito.imgUrl);
    card.setAttribute('class', 'card');
    texto.innerText = gatito.color;    
 
    // el metodo append agrega varios nodos (opcional) != appendChild()
    card.append( titulo, imagen, texto );
    //card.appendChild(imagen);
    //card.appendChild(texto);

    contenedor.appendChild(card) ;

    // Version anterior
   /*  const card_  =   `<div id="${gatito.id}" class="card">
                            <h2> ${ gatito.nombre} </h2>
                            <img src="${ gatito.imgUrl}">
                            <p> ${ gatito.color} </p>
                        </div>`;
    contenedor.innerHTML +=  card; */
}

for (const gatito of gatitos) {
    crearCard( gatito, contenedor )
}

// 1. Crear el nodo.
// 2. Seleccionar el padre
// 3. Agregar el nodo al padre
/* let titulo = document.createElement('h2');
titulo.innerText = 'un texto desde JS';

let header = document.querySelector('.header');


header.appendChild( titulo );
 */
