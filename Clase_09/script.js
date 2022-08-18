const gatitos = [
    {
        id: 1,
        name: 'Chimu',
        imgUrl: 'img/chimu.png',
        like: false
    },
    {
        id: 2,
        name: 'Mei',
        imgUrl: 'img/mei.jpg',
        like: true
    },
    {
        id: 3,
        name: 'Gris',
        imgUrl: 'img/gris.jpg',
        like: false
    },
];

const galeria = document.querySelector('.container');
//const loading = document.createElement('img');
//loading.setAttribute('src','img/loading.gif');  
//galeria.appendChild(loading);

function crearCard(gatito){

    const card = ` <div class="card">
                    <div onclick="favorito(${gatito.id})" class="row">
                        <h3 class="card-name">${gatito.name}</h3>
                        <i class="fa-solid fa-lg fa-heart ${ gatito.like ? 'like' : '' }"></i>
                    </div>
                    <img src="${gatito.imgUrl}" class="imagen" alt="imagen de ${gatito.name}" id="${gatito.id}" />
                </div>`;
    galeria.innerHTML += card;
}

// Modifque el gatito del array
function favorito(id){
    console.log('❤');

    gatitos.forEach(gatito => {
        if( gatito.id == id  ){
            gatito.like = !gatito.like;
        }
    }); 
    // Refresco la galaria
    galeria.innerHTML ='';
    renderizarCards();
}

function renderizarCards(){
    gatitos.forEach(gatito => {
        crearCard(gatito);
        //console.table(gatito);
    });

    console.log('Renderizando')
}


setTimeout(renderizarCards, 1000);