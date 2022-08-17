// Loading
window.addEventListener('load', function(){
    iniciar();
})

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

function seleccionar(id){
    console.log('Se selecciono a...'); 
    let card = document.getElementById(id)
    card.classList.add('active');
}

function cambiarModo(){
    document.querySelector('body').classList.toggle('dark');
}

function crearCard(gatito, contenedor){
    let card = document.createElement('div');
    let titulo = document.createElement('h2');
    let imagen = document.createElement('img');
    let texto = document.createElement('p');

    titulo.innerText = gatito.nombre;
    imagen.setAttribute('src', gatito.imgUrl);
    card.setAttribute('class', 'card');

    // Solucion uno Con setAttribute 
    //card.setAttribute('onClick', 'cambiarModo();');
    
    texto.innerText = gatito.color;    
 
    // el metodo append agrega varios nodos (opcional) != appendChild()
    card.append( titulo, imagen, texto );

    // Solucion dos con addEventListener
    /*
    card.addEventListener('click', function(){
        this.classList.add('active')
    })
    */
    
    //card.addEventListener('click', seleccionar(this))

    contenedor.appendChild(card) ;


}

// Esto sucede cuando el evendo cargar termina
function iniciar(){
  
    let titulo = document.createElement('h1');
    titulo.innerText = 'Clase 08 - Web Reactiva';
    document.querySelector('header').appendChild( titulo );

    const contenedor = document.querySelector('main');
    
    cambiarModo();
    
    
    for (const gatito of gatitos) {
        crearCard( gatito, contenedor )
    }

    // 1. Selecciono los elementos a observar
    // Solucion tres. Cuando tengo los elementos creado
    let cards = document.querySelectorAll('.card');
    for (let i = 0; i < cards.length; i++) {

        //console.log( cards[i]  );
        cards[i].onclick = function(){
            //alert('Seleccionado');
            //console.log(this.classList);
            this.classList.add('active')
        }
    }
    

}



