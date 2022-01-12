/* Crear un documento HTML, este contendrá un titulo que diga Hola nombre, y un botón que diga cambiar nombre. Cuando el botón se presione aparecerá un promt en donde el usuario puede colocar su nombre, después el titulo cambiara a Hola + nombre del usuario.
 */

/* Con prompt */
let titulo = document.getElementById('titulo');

function cambiarNombre() {        
	var nombre = prompt("Cual es tu nombre?");		     
    titulo.textContent = 'Hola ' + nombre;
};


/* Con formulario */
/* let titulo = document.getElementById('titulo');
let nombre = document.getElementById('nombre');

function cambiarNombre() {
    titulo.textContent = 'Hola ' + nombre.value;
}; */