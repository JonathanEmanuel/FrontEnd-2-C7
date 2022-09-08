const btn1 = document.querySelector('#boton1');
const btn2 = document.querySelector('#boton2');
const btn3 = document.querySelector('#boton3');
const btn4 = document.querySelector('#boton4');
const respuesta = document.querySelector('#mensaje-posteado');


btn1.addEventListener('click', function(){
    //console.log('Mensaje' , this.dataset)
    let id_usuario  =  this.dataset.idUsuario;
    let titulo  =  this.dataset.titulo;
    console.log(id_usuario, titulo);
    publicar(id_usuario, titulo);

})

btn2.addEventListener('click', function(){
    let id_usuario  =  this.dataset.idUsuario;
    let titulo  =  this.dataset.titulo;
    console.log(id_usuario, titulo);
    publicar(id_usuario, titulo);

})

btn3.addEventListener('click', function(){
    let id_usuario  =  this.dataset.idUsuario;
    let titulo  =  this.dataset.titulo;
    console.log(id_usuario, titulo);
    publicar(id_usuario, titulo);

})

btn4.addEventListener('click', function(){
    let id_usuario  =  this.dataset.idUsuario;
    let titulo  =  this.dataset.titulo;
    console.log(id_usuario, titulo);
    publicar(id_usuario, titulo);

})

function rederizarPost(titulo, id){
    respuesta.innerHTML = `Se guardo el mensaje ${titulo} con su id ${id}`;
}

function publicar(id, titulo){


    const url ='https://jsonplaceholder.typicode.com/posts';
    const datosEnviar = {
        title: titulo,
        userId: id
    }


    fetch(url,{
        method: 'POST',
        body: JSON.stringify(datosEnviar),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
    }).then( function(response){
        return response.json();

    }).then( function(respuestaJson){  // Cuando se resolvio 
        console.log(respuestaJson);
        rederizarPost(respuestaJson.title, respuestaJson.id );

    }).catch( function(response){
        console.error(response);
        respuesta.innerHTML = '<h4> Ocurrio un error</h4>';
    })

}