let gatitos = [
    {
        id: 1,
        nombre: 'Mei',
        color: 'Blanco',
        imgUrl: '',
        edad: 2
    },
    {
        id: 2,
        nombre: 'Chimu',
        color: 'Negra',
        imgUrl: '',
        edad: 10
    },
    {
        id:3,
        nombre: 'Gris',
        color: 'Gris',
        imgUrl: '',
        edad: 1
    }
]

const contenedor = document.querySelector('main');
console.log(contenedor);

function crearCard(gatito, contenedor){
    const card  =   `<div id="${gatito.id}" class="card">
                        <h2> ${ gatito.nombre} </h2>
                        <img src="${ gatito.imgUrl}">
                        <p> ${ gatito.color} </p>
                     </div>`;
    contenedor.innerHTML +=  card;
}

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

for (const gatito of gatitos) {
    crearCard( gatito, contenedor )
}

