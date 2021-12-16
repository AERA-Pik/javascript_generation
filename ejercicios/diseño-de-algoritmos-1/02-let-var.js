/*  
var es una variable global y puede ser llamada desde cualquier parte del código.
Variable let es una variable de contexto, solo vive en un bloque 
*/

var numero = 40;
console.log(numero);

if (true) {
    var numero = 50;
    console.log(numero);
}

console.log(numero);

var texto = "Bootcamp Java";
console.log(texto);

if(true){
    let texto = "Cohorte 8";
    console.log(texto);
    let numeroFavorito = 76;
}

console.log(numeroFavorito);
console.log(texto);