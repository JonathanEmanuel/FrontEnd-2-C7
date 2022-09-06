const btnAPI = document.querySelector('#random');
const area = document.querySelector('.tarjeta');

btnAPI.addEventListener('click', function(){

    fetch('https://restcountries.com/v3.1/all')
    .then( (respuesta) => {
        //console.log(respuesta); // resolve
        return respuesta.json();
    }).then( function(dataJson){
        //console.log(dataJson);
        // llamar a la funcion renderizar
        //console.log ( typeof(dataJson) );
        redenderizar(dataJson);
    })
    .catch( (responseReject)=> {
        console.error( 'Hay un Error ' + responseReject);
    })
    

})




function redenderizar(lista){
    lista.forEach(element => {
        console.log(element.flags.png)

        let img = `<div>
                        <h2>${element.name.common} </h2>
                        <img src="${element.flags.png}" alt="${element.name.common}">
                    </div>`;
        area.innerHTML += img;

    });
}