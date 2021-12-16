/* 
Arreglo
*/

const comidas = ['Pozole', 'Quesadillas','Tacos'];

/* 
length (cantidad de elementos del arreglo) longitud del arreglo
*/

console.log(comidas.length);

/*
push: agrega al final un elemento
pop: quita un elemento al final
unshift: agrega un elemento al inicio
shift: quita primer elemento
 */

comidas.push('Tortas');
console.log(comidas);

comidas.pop('Tortas');
console.log(comidas);

comidas.unshift('Tortas');
console.log(comidas);

comidas.shift('Tortas');
console.log(comidas);

/* 
forEach: nos puede servir para realizar una accion por cada
elemento de nuestro arreglo
*/

console.log(comidas[0]);
console.log(comidas[1]);
console.log(comidas[2]);

comidas.forEach(function(el){  // function: función sin nombre , el = elementos
    console.log(el);
});

const numeros = [1, 4, 7, 8];
numeros.forEach(function(el){
    let suma = el + 1;
    console.log(suma);
})
console.log(numeros);

/* ejercicio */
const arr = [];

function suma(num){
    let sumNum = num + 1;
    return arr.unshift(sumNum);
}

suma(2);
suma(3);
suma(4);
suma(7);
suma(9);


console.log(arr);