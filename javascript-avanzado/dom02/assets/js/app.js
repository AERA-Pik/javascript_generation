/* let $titulo = document.getElementById('titulo');
console.log(titulo.textContent);
titulo.textContent = 'Titulo escrito desde JavaScript' */

/* .clase
#id
etiqueta */

let $titulo = document.querySelector('#titulo');
$titulo.textContent = 'Titulo escrito desde JavaScript';

let $parrafo = document.querySelector('p');
console.log($parrafo.textContent);

let $parrafos = document.querySelectorAll('p');
console.log($parrafos[0].textContent);
console.log($parrafos[1].textContent);


//createElement crea un elemento con la etiqueta
let subtitulo = document.createElement('h3');
subtitulo.textContent = 'Este es un Subtitulo desde JavaScript'

// document.body.append agrega un elemento dentro del body al final 
/* document.body.append(subtitulo); */

let $contenido = document.querySelector('#contenido');
/* console.log($contenido.textContent = '<br>'); */
/* console.log($contenido.innerHTML = '<br>'); */
/* console.log($contenido.outerHTML = '<br>'); */
let contenidoParrafo = document.createElement('p');
contenidoParrafo.textContent = 'Contenido de mi nuevo parrafo';
$contenido.appendChild(contenidoParrafo);


// 
/* $contenido.insertAdjacentElement('beforebegin',subtitulo); */
//
/* $contenido.insertAdjacentElement('afterbegin',subtitulo); */
//
/* $contenido.insertAdjacentElement('beforeend',subtitulo); */
//
/* $contenido.insertAdjacentElement('afterend',subtitulo); */

$titulo.insertAdjacentElement('afterend',subtitulo);

