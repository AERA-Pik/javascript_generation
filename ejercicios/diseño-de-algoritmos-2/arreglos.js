/* 
Coleccion de elementos
Tienen métodos o funciones que nos permiten manipular los datos almacenados
*/

//Manera 1
const arreglo1 = [4, 'Hola', true, [1, 2, 6]];
console.log(arreglo1);

//Manera 2
const arreglo2 = Array.of(1, 'Hola', true);
console.log(arreglo2);

//Manera 3
const arreglo3 = new Array(3, true, 'adiós');
console.log(arreglo3);

const frutas = ['manzana', 'naranjas', 'uvas', 'sandias',
[1, 2, 3, 4, 5, ['A', 'B', 'C']]];
//notacion de los corchetes
console.log(frutas[1]);
console.log(frutas[3]);
console.log(frutas[3]);
console.log(frutas[4][5][1]);
console.log(frutas);

//Metodos
/* length = longitud del arreglo
 */
const letras = ['A', 'B', 'C', 'D'];
console.log(letras.length);

/* push = añade un elemento al final de nuestro arreglo */
letras.push('E');
console.log(letras);

/* pop = elimina el ultimo elemento */
letras.pop();
console.log(letras);

/*  unshift = agrega un elemento al inicio */
letras.unshift(1);
console.log(letras);

/* shift = elimina el primer elemento */
letras.shift();
console.log(letras);