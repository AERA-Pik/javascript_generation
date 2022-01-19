let $titulo = document.querySelector('#titulo');
let $mensaje = document.querySelector('#mensaje');
let $btnmensaje = document.querySelector('#btnMensaje');
let $spanerror = document.querySelector('span');

/* addEventListener agrega un evento al elemento */
$btnmensaje.addEventListener('click', () => {
    console.log('No me presiones');
});

//En funcion anonima
$mensaje.addEventListener('keydown', (e) => {
    /* console.log('escribiste algo') */
    /* console.log(e); */ // muestra informacion del envento
    console.log(e.target.value);

    if (e.target.value.length < 3) {
        $spanerror.classList.remove('hide');
        $spanerror.classList.add('error');
    } else {
        $spanerror.classList.add('hide');
        $spanerror.classList.remove('error');
    }
});

//En una funcion externa
function mostrarConsole() {
    console.log('escribiste algo');
    
}

//sin parentesis para que no se ejecute al cargar
/* $mensaje.addEventListener('keydown', mostrarConsole); */

